"use client"

import React, { useContext } from 'react'
import Navbar from './Navbar'
import { MyContext } from '@/Helper/Context'

function Header(props) {
  const ContextData = useContext(MyContext)
  return (
    <div className='bg-red-300 p-4 text-black'>

      <header>
        <span>Header.js</span>
      <span>{props.num}</span>

        <Navbar num={props.num} />
        <h2>{ContextData} from header </h2>
      </header>
    </div>
  )
}

export default Header