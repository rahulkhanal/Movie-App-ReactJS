import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Watch from './watch';
import HomePage from './Homepage';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/watch' element={<Watch />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
