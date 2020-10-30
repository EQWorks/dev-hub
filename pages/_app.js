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

    const getApps = (directory) => {
      const directoryFiles = fs.readdirSync(directory)
      const apps = {}
      directoryFiles.forEach((file) => {
        const stat = fs.statSync(`${directory}/${file}`)
        if (stat.isDirectory()) {
          apps[file] = getDocuments(0, directory, file)
        }
      })
      return {
        apps,
      }
    }

    const getDocuments = (level, root, directory) => {
      const directoryFiles = fs.readdirSync(path.join(root, directory))
      const directories = {}
      const files = []
      let data = []
      let content = []
      let pathName = `/${directory}`
      directoryFiles.forEach((file) => {
        const stat = fs.statSync(path.join(root, directory, file))
        if (stat.isDirectory()) {
          directories[file] = getDocuments(level + 1, root, path.join(directory, file))
        } else {
          if (file.toLowerCase().substr(file.lastIndexOf('.') + 1) === 'mdx') {
            const parsedFile = matter(fs.readFileSync(path.join(root, directory, file)), 'utf8')
            if (file === 'index.mdx') {
              data = parsedFile.data
              content = parsedFile.content
            }
            if (level === 0 || file !== 'index.mdx') {
              if (file === 'index.mdx') {
                if (level === 0) {
                  parsedFile.data.linkTitle = 'Overview'
                }
                files.unshift({
                  fileName: file,
                  content: parsedFile.content,
                  data: parsedFile.data,
                })
              } else {
                files.push({
                  fileName: file,
                  content: parsedFile.content,
                  data: parsedFile.data,
                })
              }
            }
          }
        }
      })
      const result = {
        files,
        directories,
        pathName,
        data,
        content,
        level,
      }
      return result
    }
    const pages = getApps(path.join(process.cwd(), 'pages'))

    return {
      appProps: {
        pages: pages,
      },
    }
  }
  return {}
}
