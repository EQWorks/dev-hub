import PropTypes from 'prop-types'
import React from 'react'

import MDXIndex, { metadata } from '../docs/dev-hub/index.mdx'

export default function Index({ localDocs }) {
  console.log(metadata)
  console.log(localDocs)

  return (
    <div>
      <h1>EQ Works Dev Hub</h1>
      <MDXIndex />
    </div>
  )
}

Index.propTypes = {
  localDocs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    files: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
}

export async function getStaticProps() {
  const fs = require('fs')
  const path = require('path')
  
  function getPath(folderName) {
    return path.join(process.cwd(), folderName)
  }

  function getDirectories(path) {
    return fs.readdirSync(path).filter((file) => {
      return fs.statSync(path+'/'+file).isDirectory()
    })
  }

  function getFiles(path) {
    return fs.readdirSync(path)
  }

  const docsFolders = getDirectories(getPath('docs'))
  let files = []
  let docsFoldersWithFiles = []

  docsFolders.forEach((docFolder) => {
    files.push(getFiles(getPath(`docs/${docFolder}`)))
  })

  docsFolders.forEach((folder, index) => {
    let object = {}
    object.name = folder
    object.files = files[index]
    docsFoldersWithFiles.push(object)
  })

  return {
    props: {
      localDocs: docsFoldersWithFiles,
    },
  }
}
