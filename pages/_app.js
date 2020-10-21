import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'

import { URL_PREFIX } from '../utils/constants'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EQ Works | Dev Hub</title>
        <link href={`${URL_PREFIX}/favicon.ico`} rel="shortcut icon" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}
