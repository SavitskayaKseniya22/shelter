'use client';

import React, { useEffect, useState } from 'react';
import AnimalCard from '@/app/components/shared/AnimalCard/AnimalCard';
import { AnimalType, AnimalCartType } from '@/app/interfaces';
import Spinner from '@/app/components/shared/Spinner/Spinner';
import { useRouter } from 'next/navigation';
import Button, {
  ButtonContentType,
  ButtonColorType,
} from '@/app/components/shared/Button/Button';
import styles from './page.module.scss';

function Animal({
  params,
}: {
  params: {
    name: string;
  };
}) {
  const [animal, setAnimal] = useState<AnimalType | null>(null);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/json/pets.json')
      .then((res) => res.json())
      .then((data: AnimalType[]) => {
        const filteredAnimal = data.filter(
          (item) => item.name === params.name
        )[0];
        if (filteredAnimal) {
          setAnimal(filteredAnimal);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.name]);

  return (
    <main className={styles.main}>
      {isLoading && <Spinner />}
      {animal && <AnimalCard type={AnimalCartType.DETAILED} animal={animal} />}
      {!animal && !isLoading && (
        <>
          <h4>No pet found</h4>
          <Button
            contentType={ButtonContentType.STRING}
            colorType={ButtonColorType.COLORED}
            onClick={() => {
              router.push('/');
            }}
          >
            Return Home
          </Button>
        </>
      )}
    </main>
  );
}

export default Animal;
