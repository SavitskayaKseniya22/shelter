'use client';

import React, { useEffect } from 'react';
import styled from './error.module.scss';
import ErrorView from './components/shared/ErrorView/ErrorView';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styled.main}>
       <ErrorView reset={reset} />
    </main>
  );
}
