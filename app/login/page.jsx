'use client';

import LayoutComponent from '../login/Components/layoutComponent/layoutComponent';
import RightSection from '../login/Components/rightSectionComponent/RightSection';
import styles from './style.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LayoutComponent />
      <RightSection />
    </div>
  );
}
