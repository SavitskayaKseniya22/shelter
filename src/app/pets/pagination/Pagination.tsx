'use client';

import AnimalCard from '@/app/components/shared/AnimalCard/AnimalCard';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '@/app/components/shared/Button/Button';
import { AnimalCartType, RangeType } from '@/app/interfaces';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { checkRange } from '@/app/utils';
import Spinner from '@/app/components/shared/Spinner/Spinner';
import PaginationData from './PaginationData';
import styles from './pagination.module.scss';

function Pagination() {
  const [animals, setAnimals] = useState<null | PaginationData>(null);

  const [isLoading, setLoading] = useState(true);

  const [pageNumber, setPageNumber] = useState(1);

  const [widthRange, setWidthRange] = useState<RangeType | null>(null);

  useEffect(() => {
    fetch('/json/pets.json')
      .then((res) => res.json())
      .then((data) => {
        setAnimals(new PaginationData(data));
        setWidthRange(checkRange());
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidthRange(checkRange());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (
      animals &&
      widthRange !== null &&
      pageNumber > animals.getlastPageNumber(widthRange)
    ) {
      setPageNumber(animals.getlastPageNumber(widthRange));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthRange]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading && !animals) {
    return <h5>No pets found</h5>;
  }

  if (!isLoading && animals && widthRange !== null) {
    return (
      <>
        <ul className={styles.pagination}>
          {animals.getRangeData(widthRange, pageNumber).map((animal) => {
            const key = Math.random();
            return (
              <AnimalCard
                animal={animal}
                key={key}
                type={AnimalCartType.SHORT}
              />
            );
          })}
        </ul>
        <div className={styles.controls}>
          <Button
            colorType={ButtonColorType.WHITE}
            contentType={ButtonContentType.SYMBOL}
            disabled={pageNumber === 1}
            onClick={() => {
              setPageNumber(1);
            }}
          >
            <Image
              width={27}
              height={23}
              src="/icons/arrow-right-end.svg"
              alt="arrow right end"
              style={{ transform: 'rotate(0.5turn)' }}
            />
          </Button>

          <Button
            colorType={ButtonColorType.WHITE}
            contentType={ButtonContentType.SYMBOL}
            disabled={pageNumber === 1}
            onClick={() => {
              setPageNumber((a) => (a > 1 ? a - 1 : 1));
            }}
          >
            <Image
              width={23}
              height={13}
              src="/icons/arrow-right-next.svg"
              alt="arrow right next"
              style={{ transform: 'rotate(0.5turn)' }}
            />
          </Button>

          <Button
            colorType={ButtonColorType.COLORED}
            contentType={ButtonContentType.SYMBOL}
            onClick={() => {}}
          >
            {pageNumber}
          </Button>

          <Button
            colorType={ButtonColorType.WHITE}
            contentType={ButtonContentType.SYMBOL}
            disabled={pageNumber === animals.getlastPageNumber(widthRange)}
            onClick={() => {
              setPageNumber((a) => {
                const lastPage = animals.getlastPageNumber(widthRange);
                return a < lastPage ? a + 1 : lastPage;
              });
            }}
          >
            <Image
              width={23}
              height={13}
              src="/icons/arrow-right-next.svg"
              alt="arrow right next"
            />
          </Button>
          <Button
            colorType={ButtonColorType.WHITE}
            contentType={ButtonContentType.SYMBOL}
            disabled={pageNumber === animals.getlastPageNumber(widthRange)}
            onClick={() => {
              setPageNumber(animals.getlastPageNumber(widthRange));
            }}
          >
            <Image
              width={27}
              height={23}
              src="/icons/arrow-right-end.svg"
              alt="arrow right end"
            />
          </Button>
        </div>
      </>
    );
  }
}

export default Pagination;
