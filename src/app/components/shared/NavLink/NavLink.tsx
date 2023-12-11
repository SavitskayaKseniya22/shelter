'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav-link.module.scss';
import stylesHeader from '../../layout/Header/header.module.scss';

function NavLink({ children, href }: { children: ReactNode; href: string }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${stylesHeader.rotated} ${styles.link} ${
        pathname !== '/' ? styles.regular : styles.primary
      } ${pathname === href ? styles.active : ''} `}
    >
      {children}
    </Link>
  );
}

export default NavLink;
