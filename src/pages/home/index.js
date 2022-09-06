import React from 'react';
import { Button } from "react-bootstrap";
import styles from './styles.module.scss'
import clsx from "clsx";
import { Link } from 'react-router-dom';
import { pagesLinks } from '../../stats/pagesLinks';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx("container", styles.container)}>
        <Link to={pagesLinks.FILMS}>
          <Button variant="warning" className={styles.button}>Фильмы</Button>
        </Link>
        <Link to={pagesLinks.SERIALS}>
          <Button variant="dark" className={styles.button}>Сериалы</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;