'use client';

import React, { useState } from 'react';
import AnimalCard from '@/app/components/shared/AnimalCard/AnimalCard';
import { AnimalType, AnimalCartType } from '@/app/interfaces';
import json from '../../../../public/json/pets.json';
import styles from './page.module.scss';

function Animal({
  params,
}: {
  params: {
    name: string;
  };
}) {
  const [animal] = useState<AnimalType>(
    json.filter((item) => item.name === params.name)[0]
  );

  return (
    <main className={styles.main}>
      <AnimalCard type={AnimalCartType.DETAILED} animal={animal} />
    </main>
  );
}

export default Animal;
