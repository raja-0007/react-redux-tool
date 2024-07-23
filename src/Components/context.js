import { createContext, useContext, useState } from "react";
const context = createContext()
import React from 'react'

function contextProvider({children}) {
    const [count, setCount] = useState(0)

  return (
    <context.Provider value={{count, setCount}}>{children}</context.Provider>
  )
}

export default contextProvider
export const useContextCount = ()=> useContext(context)