/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import ArticlesProvider from '../context/Articles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArticlesProvider>
      <Component {...pageProps} />
    </ArticlesProvider>
  );
}

export default MyApp;
