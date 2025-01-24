import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth'
import Municipalities from './components/Municipalities';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path= '/mun' element={<Municipalities/>}/>
      <Route path='token' element={<Auth/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
