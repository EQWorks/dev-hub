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
  if (context.ctx.res) {
    const fs = require('fs')
    const path = require('path')

    // get all directories and files inside `pages/`
    const getDocuments = (directory) => {
      const directoryFiles = fs.readdirSync(directory)
      const directories = {}
      const files = []
      directoryFiles.forEach((file) => {
        const stat = fs.statSync(`${directory}/${file}`)
        if (stat.isDirectory()) {
          directories[file] = getDocuments(path.join(directory, file))
        } else {
          if (file.substr(file.lastIndexOf('.') + 1) === 'mdx') {
            const parsedFile = matter(fs.readFileSync(path.join(directory, `/${file}`)), 'utf8')
            files.push({
              fileName: file,
              content: parsedFile.content,
              data: parsedFile.data,
              isEmpty: parsedFile.isEmpty,
              excerpt: parsedFile.excerpt,
            })
          } else {
            files.push({
              fileName: file,
            })
          }
        }
      })
      const result = {
        files: files,
        directories: directories,
      }
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
