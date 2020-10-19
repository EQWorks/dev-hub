import Head from "next/head";

import '../styles/globals.css'

const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EQ Works | Dev Hub</title>
        <link href={`${PREFIX}/favicon.ico`} rel='shortcut icon'></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
