import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        NotFound
      </h1>
      <p className={styles.description}>Нет такой страницы</p>
    </div>
  );
};

export default NotFoundBlock;
