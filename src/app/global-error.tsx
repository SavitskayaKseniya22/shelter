'use client';

import router from 'next/router';
import React, { useEffect } from 'react';
import Button, {
  ButtonContentType,
  ButtonColorType,
} from './components/shared/Button/Button';
import styled from './error.module.scss';

export default function GlobalError({
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
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
