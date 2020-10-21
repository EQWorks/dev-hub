import React from 'react'

import MDXIndex, { metadata } from '../docs/dev-hub/index.mdx'

console.log(metadata)

export default function Index() {
  return (
    <div>
      <h1>EQ Works Dev Hub</h1>
      <MDXIndex />
    </div>
  )
}
