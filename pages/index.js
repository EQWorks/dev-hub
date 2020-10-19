import React from 'react'

import { URL_PREFIX } from '../utils/constants'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the<br />EQ&nbsp;Works Dev&nbsp;Hub</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img
            src={`${URL_PREFIX}/vercel.svg`}
            alt="Vercel Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  )
}
