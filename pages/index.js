import matter from 'gray-matter'
import PropTypes from 'prop-types'
import React from 'react'

import Sidebar from '../components/sidebar'

export default function Index({ allDirsAndFiles, sidebarData }) {
  console.log(allDirsAndFiles)

  return (
    <div>
      <Sidebar data={sidebarData} />
      <h1>Dev Hub Index</h1>
    </div>
  )
}

Index.propTypes = {
  allDirsAndFiles: PropTypes.shape({
    directories: PropTypes.object,
    files: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  sidebarData: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    data: PropTypes.object,
    excerpt: PropTypes.string,
    isEmpty: PropTypes.bool,
    slug: PropTypes.string,
  })).isRequired,
}

export async function getStaticProps() {
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
        files.push(file)
      }
    })
    const result = {
      files: files,
      directories: directories,
    }
    return result
  }
  const allDirsAndFiles = getDocuments(path.join(process.cwd(), 'pages'))

  // get metadata of all apps inside `pages/`
  const sidebarData = []
  const apps = Object.keys(allDirsAndFiles.directories)
  for (const key of apps) {
    const parsedFile = matter(fs.readFileSync(path.join(process.cwd(), `pages/${key}/index.mdx`), 'utf8'))
    sidebarData.push({
      slug: key,
      content: parsedFile.content,
      data: parsedFile.data,
      isEmpty: parsedFile.isEmpty,
      excerpt: parsedFile.excerpt,
    })
  }

  return {
    props: {
      allDirsAndFiles: allDirsAndFiles,
      sidebarData: sidebarData,
    },
  }
}
