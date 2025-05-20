import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Logo from '../../public/images/images.png';

const LogoHeader = () => {
  return (
    <>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" width={150} height={50} />
      </div>
      <div>
        <h2 className={styles.accessTitle}>
          Secure access to system controls and insights.
        </h2>
      </div>
      <div>
        <h1 className={styles.adminAccess}>ADMIN ACCESS</h1>
      </div>
    </>
  );
}
export default LogoHeader;
