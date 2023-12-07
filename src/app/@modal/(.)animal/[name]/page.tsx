'use client';

import React, { useState } from 'react';
import AnimalCard, {
  AnimalCartType,
  AnimalType,
} from '@/app/components/shared/AnimalCard/AnimalCard';
import Popup from '@/app/components/shared/Popup/Popup';
import json from '../../../../../public/json/pets.json';

function AnimalModal({
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
    <Popup>
      <AnimalCard type={AnimalCartType.DETAILED} animal={animal} />
    </Popup>
  );
}

export default AnimalModal;
