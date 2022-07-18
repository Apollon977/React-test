import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@material-ui/core';

import styles from './Page404.module.css';

const Page404Block = () => {
  return (
    <Container>
      <div className={styles.container}>
        <span className={styles.container__title}>404</span>
        <br />
        <span className={styles.container__description}>Упс, монеты на другой странице</span>
        <br />
        <div className={styles.container__title_button}>
          <Link to="/" className={styles.btn}>
            Вернуться
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Page404Block;
