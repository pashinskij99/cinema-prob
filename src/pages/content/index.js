import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './styles.module.scss'
import { pagesLinks } from "../../stats/pagesLinks";

const Content = () => {

  const { pathname } = useLocation()
  const path = pathname.slice(1)

  useEffect(() => {
    console.log(path === pagesLinks.FILMS)
  })

  return (
    <div className={styles.wrapper}>
      {path}
    </div>
  )
}

export default Content