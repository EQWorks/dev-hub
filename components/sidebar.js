import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

import Context from '../utils/context'

export default function Sidebar() {
  const appContext = useContext(Context)
  const router = useRouter()

  const appName =
    router.pathname !== '/' ? router.pathname.split('/')[1] : false

  const getFileTitle = (file) => {
    if (file.data) {
      return file.data.linkTitle ? file.data.linkTitle : file.data.title
    } else {
      return file.fileName
    }
  }
  const getFilePath = (path, fileName) => {
    return `${path}/${fileName === 'index.mdx' ? '' : fileName.replace(/\.[^/.]+$/, '')}`
  }
  const renderFile = (path, file) => {
    return <li key={file.fileName}><a href={getFilePath(path, file.fileName)}>{getFileTitle(file)}</a></li>
  }
  const mdxOnly = (file) => {
    const re = /(?:\.([^.]+))?$/
    return re.exec(file.fileName)[1].toLowerCase() === 'mdx'
  }
  const getArrow = (isOpen) => {
    return isOpen ? '--Down--' : '--Up--'
  }
  const isOpen = (currentPath, directory) => {
    if (currentPath === directory.pathName) return true
    const directoryTokens = directory.pathName.split('/').filter(i => i.length)
    const currentPathTokens = currentPath.split('/').filter(i => i.length)
    return directoryTokens.every((t, i) => currentPathTokens[i] === t)
  }
  const renderDirectory = (currentPath, directory) => {
    const opened = isOpen(currentPath, directory)
    return <li key={directory.pathName}>
      {(<p><a href={directory.pathName}>{getFileTitle(directory)} {getArrow(opened)}</a></p>)}
      {opened && renderDirectoryContents(currentPath, directory)}
    </li>
  }
  const renderDirectoryContents = (currentPath, directory) => {
    return <ul>
      {directory.files &&
          directory.files
            .filter((f) => mdxOnly(f))
            .map((f) => renderFile(directory.pathName, f))}
      {directory.directories &&
          Object.keys(directory.directories).map((key) =>
            renderDirectory(currentPath, directory.directories[key]),
          )}
    </ul>
  }

  if (!appName) {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <div>
          {Object.keys(appContext.pages.apps).map((key, index) => {
            return (
              <li key={index}>
                <Link href={`/${key}`}>
                  <a>{appContext.pages.apps[key].data.title}</a>
                </Link>
              </li>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <ul>{renderDirectory(router.pathname, appContext.pages.apps[appName])}</ul>
    </div>
  )
}
