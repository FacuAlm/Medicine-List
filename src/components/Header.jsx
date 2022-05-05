import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Header = () => {

  const location = useLocation()
  
  const urlActual=location.pathname
  return (
    <>
     <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Medicine <span className="text-indigo-600"> List Web</span></h1>

     <nav className="flex">
     <NavLink 
    className={ ({ isActive }) => `${ isActive ? 'text-orange-600' : 'text-indigo-700'} font-bold block my-3 mx-5 hover:text-orange-600`}
    to="/"
>Personal de Laboratorio
</NavLink>
       
       <NavLink  
      className={ ({ isActive }) => `${ isActive ? 'text-orange-600' : 'text-indigo-700'} font-bold block my-3 mx-5 hover:text-orange-600`} 
       to='/farmacia'>Farmacia
       </NavLink>


     </nav>
    </>
   
  )
}
