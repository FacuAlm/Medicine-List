import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {

  const location = useLocation()
  const urlActual= location.pathname
  return (
    <>
     <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Medicine <span className="text-indigo-600"> List Web</span></h1>

     <nav className="flex">
     <Link
     className={`${urlActual === '/'? 'text-orange-600' : 'text-indigo-700'} font-bold text-indigo-700 mx-5 my-3 hover:text-orange-600 `} 
     to='/'>Personal de Laboratorio
     </Link>
       <Link  
       className={`${urlActual === '/Farmacia'? 'text-orange-600' : 'text-indigo-700'} font-bold text-indigo-700 mx-5 my-3 hover:text-orange-600 `} 
       to='/Farmacia'>Farmacia
       </Link>


     </nav>
    </>
   
  )
}
