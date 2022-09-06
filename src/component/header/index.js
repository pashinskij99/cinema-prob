import React from 'react'
import { Button } from 'react-bootstrap'
import clsx from 'clsx'
import styles from './styles.module.scss'
import logo_icon from '../../assets/img/logo/logo.png'
import { Link } from 'react-router-dom';
import { pagesLinks } from '../../stats/pagesLinks';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={clsx('d-flex', 'justify-content-between')}>
          <div className={styles.logo}>
            <Link to={pagesLinks.HOME}>
              <img src={logo_icon} alt="Logo"/>
            </Link>
          </div>
          <div className={styles.nav}>
            <div className={styles.descr}>
              ФИЛЬМЫ И СЕРИАЛЫ БЕЗ ОГРАНИЧЕНИЙ
            </div>
            <div className={styles.buttons}>
              <Button variant="danger">Присоединяйтесь</Button>
              <Button variant="outline-light">Войти</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;