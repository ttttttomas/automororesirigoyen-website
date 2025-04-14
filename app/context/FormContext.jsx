'use client'
import { createContext, useState, useContext } from 'react'

const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
  const [carFromForm, setCarFromForm] = useState(null)

  return (
    <FormContext.Provider value={{ carFromForm, setCarFromForm }}>
      {children}
    </FormContext.Provider>
  )
}

// Custom hook para consumir 
export const useCarForm = () => useContext(FormContext)