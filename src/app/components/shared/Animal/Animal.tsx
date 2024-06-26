import React, { Suspense } from 'react';
import AnimalCard from '@/app/components/shared/AnimalCard/AnimalCard';
import { AnimalCartType } from '@/app/interfaces';
import Spinner from '@/app/components/shared/Spinner/Spinner';
import getData from '@/app/actions';
import InfoBox from '../InfoBox/InfoBox';



async function Animal({
  params,
}: {
  params: {
    name: string;
  };
}) {
  const { data, isError, error } = await getData();

  return (
      <Suspense fallback={<Spinner />}>
        {isError && error}
        {data?.animals.length && <AnimalCard type={AnimalCartType.DETAILED} animal={data.animals.filter(
          (item) => item.name === params.name
        )[0]} />}
        {!data?.animals.length && (<InfoBox>No pets found</InfoBox>)}
      </Suspense>
  );
}

export default Animal;