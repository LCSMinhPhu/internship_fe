'use client';
import React from 'react';
import styles from './page.module.css';
import LogoHeader from './LogoHeader';
import LoginForm from './LoginForm';
import FooterForm from './FooterForm';

const LeftSection = () => {
  return (
    <div className={styles.leftSection}>
      <LogoHeader />
      <LoginForm />
      <FooterForm />
    </div>
  );
}
export default LeftSection;