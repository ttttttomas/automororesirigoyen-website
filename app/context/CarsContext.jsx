'use client'
import { createContext,useState } from "react"
import axios from 'axios'
export const CarsContext = createContext()

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([])

  const getCars = async () => {
    return await axios.get('https://backend-automotoresy-production.up.railway.app/cars')
      .then(response => setCars(response.data))      
  }

  return (
    <CarsContext.Provider value={{ cars, setCars, getCars }}>
      {children}
    </CarsContext.Provider>
  )
}
