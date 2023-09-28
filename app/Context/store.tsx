'use client'

import {
  createContext,
  useContext,
  SetStateAction,
  useState,
  Dispatch,
} from 'react'

interface ContextProps {
  isAdmin: boolean
  setIsAdmin: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
  isAdmin: false,
  setIsAdmin: () => true,
})

export const GlobalContextProvider = ({ children }: any) => {
  const [isAdmin, setIsAdmin] = useState(true)
  return (
    <GlobalContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
