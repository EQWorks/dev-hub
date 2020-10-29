import matter from 'gray-matter'
import Head from 'next/head'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { URL_PREFIX } from '../utils/constants'
import Context from '../utils/context'

function ContextProvider({ children, value }) {
  const [valueState] = useState(value)

  return (
    <Context.Provider value={valueState}>
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.any,
  value: PropTypes.any,
}

function MyApp({ appProps, Component, pageProps }) {
  return (
    <ContextProvider value={appProps}>
      <Head>
        <title>EQ Works | Dev Hub</title>
        <link href={`${URL_PREFIX}/favicon.ico`} rel="shortcut icon" />
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  appProps: PropTypes.any,
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

MyApp.getInitialProps = async (context) => {
  // if context is a server-side execution
  if (context.ctx.res) {
    const fs = require('fs')
    const path = require('path')

    // get all directories and files inside `pages/`
    const getDocuments = (directory) => {
      const result = []
      const directoryFiles = fs.readdirSync(directory)

      directoryFiles.forEach((file) => {
        const pathStats = fs.statSync(`${directory}/${file}`)

        if (pathStats.isDirectory()) {
          // if path is a directory, then recursively query it
          result.push(getDocuments(path.join(directory, file)))
        } else {
          // if path is an mdx/md file, then save it to an array
          if (file.includes('mdx') || file.includes('md')) {
            // format file path based if file is index or not, and get file Front Matter content
            const parsedPath =
              (file.includes('index'))
                ? path.join(directory.substring(directory.indexOf('pages') + 'pages'.length), '/')
                : path.join(directory.substring(directory.indexOf('pages') + 'pages'.length), file)
                  .replace('.mdx', '')
                  .replace('.md', '')
            const parsedFile = matter(fs.readFileSync(path.join(directory, `/${file}`)), 'utf8')

            result.push({
              path: parsedPath,
              fileData: {
                content: parsedFile.content,
                data: parsedFile.data,
                isEmpty: parsedFile.isEmpty,
                excerpt: parsedFile.excerpt,
              },
            })
          }
        }
      })

      return result
    }

    const pages = getDocuments(path.join(process.cwd(), 'pages'))

    return {
      appProps: {
        pages: pages,
      },
    }
  }
  return {}
}
