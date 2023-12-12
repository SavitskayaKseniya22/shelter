'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button, {
  ButtonContentType,
  ButtonColorType,
} from './components/shared/Button/Button';
import styled from './error.module.scss';

export default function NotFound() {
  const router = useRouter();
  return (
    <main className={styled.main}>
      <h3>Not Found</h3>
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
