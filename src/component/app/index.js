import React from 'react';
import styles from './styles.module.scss'
import Header from '../header';
import Layout from "../layout";

const App = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Layout />
    </div>
  );
};

export default App;