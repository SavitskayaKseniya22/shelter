'use client';

import AnimalCard from '@/app/components/shared/AnimalCard/AnimalCard';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from '@/app/components/shared/Button/Button';
import { AnimalCartType, RangeType } from '@/app/interfaces';
import React, { useContext, useEffect, useState } from 'react';
import { checkRange } from '@/app/utils';
import { DataContext } from '@/app/components/shared/AnimalsContainer/provider';
import InfoBox from '@/app/components/shared/InfoBox/InfoBox';
import Spinner from '@/app/components/shared/Spinner/Spinner';
import PaginationData from './PaginationData';
import styles from './pagination.module.scss';

function Pagination() {
  const contextData = useContext(DataContext);

  const [animals] = useState<PaginationData>(new PaginationData(contextData?.animals || []));

  const [pageNumber, setPageNumber] = useState(1);

  const [widthRange, setWidthRange] = useState<RangeType|null>(null);


  useEffect(() => {

    setWidthRange(checkRange())
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

  return (<>
    {widthRange===null&&<Spinner />}
    {!animals.getLength() && <InfoBox>No pets found</InfoBox>}
    {!!animals.getLength() &&widthRange!==null&& <>
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
          <svg style={{ transform: 'rotate(0.5turn)' }}>
            <use href="/icons/icon-arrows-sprite.svg#arrow-right-end" />
          </svg>
        </Button>

        <Button
          colorType={ButtonColorType.WHITE}
          contentType={ButtonContentType.SYMBOL}
          disabled={pageNumber === 1}
          onClick={() => {
            setPageNumber((a) => (a > 1 ? a - 1 : 1));
          }}
        >
          <svg style={{ transform: 'rotate(0.5turn)' }}>
            <use href="/icons/icon-arrows-sprite.svg#arrow-right-next" />
          </svg>
        </Button>

        <Button
          colorType={ButtonColorType.COLORED}
          contentType={ButtonContentType.SYMBOL}
          onClick={() => { }}
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
          <svg>
            <use href="/icons/icon-arrows-sprite.svg#arrow-right-next" />
          </svg>
        </Button>
        <Button
          colorType={ButtonColorType.WHITE}
          contentType={ButtonContentType.SYMBOL}
          disabled={pageNumber === animals.getlastPageNumber(widthRange)}
          onClick={() => {
            setPageNumber(animals.getlastPageNumber(widthRange));
          }}
        >
          <svg>
            <use href="/icons/icon-arrows-sprite.svg#arrow-right-end" />
          </svg>
        </Button>
      </div>
    </>}
  </>
  )
}

export default Pagination;
