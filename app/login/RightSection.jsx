import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Background from '../../public/images/background.jpg';

const RightSection = () => (
  <div className={styles.rightSection}>
    <Image
      src={Background}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
    />
  </div>
);

export default RightSection;
