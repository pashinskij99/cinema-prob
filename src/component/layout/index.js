import React from 'react'
import styles from './styles.module.scss'
import { Route, Routes } from 'react-router-dom';
import { Content, Home } from '../../pages';
import { pagesLinks } from '../../stats/pagesLinks';
import clsx from 'clsx';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      {/*<div className={clsx("container", styles.layout_container)}>*/}
        <Routes>
          <Route path={pagesLinks.HOME} element={<Home />} />
          <Route path={pagesLinks.CONTENT} element={<Content />} >
            <Route path={pagesLinks.FILMS_BASIC} element={<Content />} />
            <Route path={pagesLinks.SERIALS_BASIC} element={<Content />} />
          </Route>
        </Routes>
      {/*</div>*/}
    </div>
  )
}

export default Layout