import React from 'react'
import PropTypes from 'prop-types'

export default function DocsPage({ children, frontMatter }) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      {children}
    </div>
  )
}

DocsPage.propTypes = {
  children: PropTypes.any,
  frontMatter: PropTypes.any,
}
