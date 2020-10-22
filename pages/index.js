import PropTypes from 'prop-types'
import React from 'react'

export default function Index({ allDirsAndFiles }) {
  console.log(allDirsAndFiles)

  return (
    <div>
      <h1>Dev Hub Index</h1>
    </div>
  )
}

Index.propTypes = {
  allDirsAndFiles: PropTypes.shape({
    directories: PropTypes.object,
    files: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export async function getStaticProps() {
  const fs = require('fs')
  const path = require('path')

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

  const allDirsAndFiles = getDocuments(path.join(process.cwd(), 'pages/docs'))

  return {
    props: {
      allDirsAndFiles: allDirsAndFiles,
    },
  }
}
