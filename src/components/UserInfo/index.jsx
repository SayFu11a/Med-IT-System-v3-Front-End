import React from 'react';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ avatarUrl, fullName, additionalText, patient }) => {
   return (
      <div className={styles.root}>
         <img className={styles.avatar} src={avatarUrl || '/noavatar.png'} alt={fullName} />
         <div className={styles.userDetails}>
            <span className={styles.userName}>{fullName}</span>
            <span className={styles.additional}>{additionalText}</span>
            {/* <span className={styles.additional}>{console.log(patient, fullName, '111')}</span> */}
         </div>
      </div>
   );
};
