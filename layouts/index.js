import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../components/sidebar'
import Context from '../utils/context'

export default function Index({ children, frontMatter }) {
  const appContext = useContext(Context)
  console.log('layouts', appContext)

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
