// import extractMdxMeta from 'extract-mdx-metadata'
import { importMDX } from 'mdx.macro'
// import raw from 'raw.macro'
import React, { lazy, Suspense } from 'react'
import './App.css'

const Content = lazy(() => importMDX('./docs/index.mdx'))

function App() {

  // useEffect(() => {
  //   async function fetchData() {
  //     const document = raw('./docs/index.mdx')
  //     console.log(document)
  //     const meta = await extractMdxMeta(document)
 
  //     console.log('meta', meta)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div>
      <h1>Dev Hub</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  )
}

export default App
