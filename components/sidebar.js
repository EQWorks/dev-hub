import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

import Context from '../utils/context'

export default function Sidebar() {
  const appContext = useContext(Context)
  const router = useRouter()

  const appName = router.pathname.split('/')[1]
  console.log(appContext.pages.directories)

  const getLink = (prevDir, file) => {
    return (
      <li>
        <a href={`${prevDir}${file.fileName}`}>{file.data ? file.data.title : file.fileName}</a>
      </li>
    )
  }

  const getDirectory = (prevDir = '/', directory, data) => {
    // console.log('getDirectory', prevDir, directory, data)
    return (
      <li>
        <details>
          {getLinks(`${prevDir}${directory}/`, data)}
        </details>
      </li>
    )
  }

  const getLinks = (prevDir = '/', data) => {
    // console.log('getLinks', prevDir, data)
    return (
      <>
        {data.files && data.files.map(f => getLink(prevDir, f))}
        {data.directories && Object.keys(data.directories).map(key => getDirectory(prevDir, key, data.directories[key]))}
      </>
    )
  }
	
  return (
    <div>
      <h1>Links for app {appName}</h1>
      <p>SCENARIO B</p>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        {getLinks(`/${appName}/`, appContext.pages.directories[appName], -1)}
      </ul>
    </div>
  )
}
