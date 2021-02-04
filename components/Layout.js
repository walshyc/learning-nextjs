import React from 'react';
import Nav from './Nav';
import Meta from './Meta';
import Header from './Header';
import styles from '../styles/Layout.module.css';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Meta></Meta>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
