import React, { useContext } from 'react'

import Sidebar from '../components/sidebar'
import Context from '../utils/context'

export default function Index() {
  const appContext = useContext(Context)
  console.log('index', appContext)

  return (
    <div>
      {appContext && (
        <Sidebar apps={appContext.sidebarData} />
      )}
      <h1>Dev Hub Index</h1>
    </div>
  )
}

