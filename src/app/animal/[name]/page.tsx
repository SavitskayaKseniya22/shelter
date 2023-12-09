'use client';

import React, { useState } from 'react';
import AnimalCard from '@/app/components/shared/AnimalCard/AnimalCard';
import { AnimalType, AnimalCartType } from '@/app/interfaces';
import json from '../../../../public/json/pets.json';

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

  return <AnimalCard type={AnimalCartType.DETAILED} animal={animal} />;
}

export default Animal;
