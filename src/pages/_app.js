import { Fragment } from 'react';
import Head from 'next/head';
import 'animate.css/animate.min.css';
import '../styles/globals.css';

function App({ Component, pageProps }) {

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Bams" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="page-discription" />

        <link rel="shortcut icon" href="./images/favicon.png" />
        <title>Bam Bam's porfolio | Main</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="./css/bootstrap.css" />
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
}

export default App
