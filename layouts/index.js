import React from 'react'
import PropTypes from 'prop-types'

import PageContainer from '../components/page-container'
import Sidebar from '../components/sidebar'

export default function Index({ children, frontMatter }) {
  return (
    <>
      <Sidebar />
      <PageContainer>
        <h1>{frontMatter.title}</h1>
        {children}
      </PageContainer>
    </>
  )
}

Index.propTypes = {
  allDirsAndFiles: PropTypes.any,
  children: PropTypes.any,
  frontMatter: PropTypes.any,
}
