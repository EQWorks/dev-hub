import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

import Context from '../utils/context'

const StyledAppBarTitle = withStyles((theme) => {
  return {
    root: {
      padding: `0 0 0 ${theme.spacing(1)}px`,
    },
  }
})(Typography)

export default function Sidebar() {
  const appContext = useContext(Context)
  const router = useRouter()

  const appName =
    router.pathname !== '/' ? router.pathname.split('/')[1] : false

  const getFileTitle = (file) => {
    if (file.data) {
      return file.data.linkTitle ? file.data.linkTitle : file.data.title
    } else {
      return getFormattedFilename(file.fileName ? file.fileName : file.pathName)
    }
  }

  const getFormattedFilename = (fileName) => {
    return fileName.split('/').pop().replace(/\.[^/.]+$/, '').
      replace(/-/g, ' ').replace(/(?: |\b)(\w)/g, function(key) { return key.toUpperCase()})
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
      <nav>
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <StyledAppBarTitle component="p" variant='h6'>EQ Dev Hub</StyledAppBarTitle>
          </Toolbar>
        </AppBar>
        <Link href='/'>
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
      </nav>
    )
  }

  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <div>{renderDirectoryContents(router.pathname, appContext.pages.apps[appName])}</div>
    </nav>
  )
}
