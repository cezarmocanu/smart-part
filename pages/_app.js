import React from 'react';
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@Styles/Theme.scss';
import '@Styles/global.scss';

import LABELS from '@Strings';

function MyApp({ Component, pageProps}) {
  return (
      <React.Fragment>
        <Head>
          <title>{LABELS.smartPartCallToAction}</title>
          <meta name="description" content={LABELS.metaDescription}></meta>
        </Head>
        <Component {...pageProps}/>
      </React.Fragment>
  )
};

export default MyApp;