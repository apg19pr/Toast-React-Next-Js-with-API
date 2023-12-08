"use client" // must use 
import React, { createContext } from 'react'

export const MyContext = createContext();

function Context({children}) {
  const userId = "UserId from context.js"
  return (
    <div>
      <MyContext.Provider value={userId}>
      {children}
      </MyContext.Provider>
    </div>
  )
}

export default Context