'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button, {
  ButtonColorType,
  ButtonContentType,
} from './components/shared/Button/Button';
import styled from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styled.main}>
      <h3>Something went wrong!</h3>

      <Button
        contentType={ButtonContentType.STRING}
        colorType={ButtonColorType.WHITE}
        onClick={() => reset()}
      >
        Try again
      </Button>
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
  );
}
