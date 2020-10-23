import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

export default function Sidebar({ data }) {
  if (data) {
    return (
      <div>
        <p>Sidebar</p>
        <ul>
          {data.map((app, index) => {
            return (
              <li key={index}>
                <Link href={`/${app.slug}`}>
                  <a>{app.data.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <hr />
      </div>
    )
  }

  return (
    <p>No projects</p>
  )
}

Sidebar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    data: PropTypes.object,
    excerpt: PropTypes.string,
    isEmpty: PropTypes.bool,
    slug: PropTypes.string,
  })),
}
