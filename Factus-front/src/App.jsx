import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth'
import Municipalities from './components/Municipalities';
import NavBar from './components/NavBar';
import Invoices from './components/Pages/Invoices';
import CreateInvoice from './components/Pages/CreateInvoice';

function App() {
  return (

    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path= '/invoices' element={<Invoices/>}/>
      <Route path='/token' element={<Auth/>}/>
      <Route path='/municipalities' element={<Municipalities/>}/>
      <Route path='/addinv' element={<CreateInvoice/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
