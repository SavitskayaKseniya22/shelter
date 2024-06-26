import React, { ReactNode, Suspense } from 'react';
import Spinner from '@/app/components/shared/Spinner/Spinner';
import getData from '@/app/actions';
import DataProvider from './provider';
import InfoBox from '../InfoBox/InfoBox';




async function AnimalsContainer({ children }: {
  children: ReactNode
}) {
  const { data, isError, error } = await getData();

  return (
    <Suspense fallback={<Spinner />}>
      {isError && error}
      {!data?.animals.length && (
        <InfoBox>No pets found</InfoBox>
      )}

      {data?.animals.length && <DataProvider value={data}>
        {children}
      </DataProvider>}

    </Suspense>
  );
}

export default AnimalsContainer;