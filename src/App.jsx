import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Services from './Pages/Services'

function App() {
  return (
    <>
    
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Projects' element={<Projects/>}/>
  <Route path='/Services' element={<Services/>}/>
</Routes>

    </>
  )
}

export default App