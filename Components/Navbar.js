"use client"
import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'
function Navbar(props) {
  const contextData = useContext(MyContext)
  return (
    <div className='p-4 m-2 bg-green-200 text-black'>
      <span>Navbar.js</span>
      <span>{props.num}</span>
      <span>{contextData} from Nabvar.js</span>

    </div>
  )
}

export default Navbar