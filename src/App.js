import React from 'react'
import Pazination from './components/Pazination'
import Search from './components/Search'
import Storige from './components/Storige'

const App = () => {
  return (
    <>
      <div>
        Welcome to newsweb
        <Search/>
        <Pazination/>
        <Storige/>
      </div>
    </>
  )
}

export default App