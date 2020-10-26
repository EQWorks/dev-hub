import Link from 'next/link'
import React, { useContext } from 'react'

import Context from '../utils/context'

export default function Sidebar() {
  const appContext = useContext(Context)

  const sidebarApps = []
  Object.keys(appContext.pages.directories).forEach((app) => {
    const appData = appContext.pages.directories[app].files.find(o => o.fileName === 'index.mdx')
    sidebarApps.push({
      displayName: appData.data.title,
      slug: app,
    })
  })

  return (
    <div>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        {sidebarApps.map((app, index) => {
          return (
            <li key={index}>
              <Link href={`/${app.slug}`}>
                <a>{app.displayName}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
