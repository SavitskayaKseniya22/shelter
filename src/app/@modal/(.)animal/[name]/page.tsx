'use client';

import React, { useEffect, useState } from 'react';
import Popup from '@/app/components/shared/Popup/Popup';
import AnimalCard from '@/app/components/shared/AnimalCard/AnimalCard';
import { AnimalType, AnimalCartType } from '@/app/interfaces';
import { useRouter } from 'next/navigation';
import Spinner from '@/app/components/shared/Spinner/Spinner';
import Button, {
  ButtonContentType,
  ButtonColorType,
} from '@/app/components/shared/Button/Button';
import stylesError from '../../../error.module.scss';

function AnimalModal({
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
    <Popup>
      {isLoading && <Spinner />}
      {animal && <AnimalCard type={AnimalCartType.DETAILED} animal={animal} />}
      {!animal && !isLoading && (
        <main className={stylesError.main}>
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
        </main>
      )}
    </Popup>
  );
}

export default AnimalModal;
