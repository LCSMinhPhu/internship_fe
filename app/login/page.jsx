'use client';
import React from 'react';
import styles from './page.module.css';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LeftSection />
      <RightSection />
    </div>
  );
}
export default LoginPage;