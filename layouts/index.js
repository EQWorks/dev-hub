import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../components/sidebar'

export default function Index({ children, frontMatter }) {
  return (
    <div>
      <Sidebar />
      <h1>{frontMatter.title}</h1>
      {children}
    </div>
  )
}

Index.propTypes = {
  allDirsAndFiles: PropTypes.any,
  children: PropTypes.any,
  frontMatter: PropTypes.any,
}
