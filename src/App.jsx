import React from 'react'
import Nav from './components/reusable/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import { Routes, Route, useLocation } from "react-router"
import Overlay from './components/reusable/Overlay'

const App = () => {
  return (
    <>
      <Overlay />
      

      <Routes>
        <Route path='/1'>
          <Route index element={<><Nav base='/1'/><Home /></>} />
          <Route path="about" element={<><Nav base='/1'/><About /></>} />
          <Route path="contact" element={<><Nav base='/1'/><Contact /></>} />
        </Route>
        <Route path='/2'>
          <Route index element={<><Nav base='/2'/><Home /></>} />
          <Route path="about" element={<><Nav base='/2'/><About /></>} />
          <Route path="contact" element={<><Nav base='/2'/><Contact /></>} />
        </Route>
        <Route path='/3'>
          <Route index element={<><Nav base='/3'/><Home /></>} />
          <Route path="about" element={<><Nav base='/3'/><About /></>} />
          <Route path="contact" element={<><Nav base='/3'/><Contact /></>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
