/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import type { NextPage } from 'next';
import Head from 'next/head';
import Articles from '../UI/modules/Articles'
import Header from '../UI/components/organisms/Header'
//import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Articles />
      </main>
    </div>
  )
}

export default Home;
