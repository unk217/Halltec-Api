import React from 'react'
import { Li } from './UI'
import { Link } from 'react-router-dom'

const NavBar = ()=> {
  return (
    <nav className='p-3 bg-cyan-950'>
        <ul className='flex justify-between space-x-8 w-10'>
            <Li><Link to="/token">Auth</Link></Li>
            <Li><Link to="/addinv">crear factura</Link></Li>
            <Li><Link to="/invoices">Facturas</Link></Li>
            <Li><Link to="/municipalities">Municipios</Link></Li>
        </ul>
    </nav>
  )
}

export default NavBar
