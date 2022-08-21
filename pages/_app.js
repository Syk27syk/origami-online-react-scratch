import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
};
