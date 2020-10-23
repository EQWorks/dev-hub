import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

export default function Sidebar({ data }) {
  return (
    <div>
      <p>Sidebar</p>
      <ul>
        {Object.keys(data).map((slug, index) => {
          return (
            <li key={index}>
              <Link href={`/${slug}`}>
                <a>{slug}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <hr />
    </div>
  )
}

Sidebar.propTypes = {
  data: PropTypes.object,
}
