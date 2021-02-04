import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <div className="">
      <Head>WebDev News</Head>
      <meta name="keywords" content="web development, programming" />
      <h1>Welcome to Next</h1>
    </div>
  );
}
