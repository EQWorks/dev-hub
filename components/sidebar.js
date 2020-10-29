import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

import Context from '../utils/context'

export default function Sidebar() {
  const appContext = useContext(Context)
  const router = useRouter()

  const appName = (router.pathname !== '/') ? `/${router.pathname.split('/')[1]}/` : false
  // console.log(appName)
  // console.log(appContext.pages)

  if (!appName) {
    return (
      <div>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          {appContext.pages.map((project, index) => {
            // search for file with shorted path, which means it is the index file for that project
            const indexFile = project.filter(v => !Array.isArray(v))
              .reduce((a, v) => a && a.path.length <= v.path.length ? a : v, '')
            return (
              <li key={index}>
                <Link href={indexFile.path}>
                  <a>{indexFile.fileData.data.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
      </ul>
    </div>
  )
}
