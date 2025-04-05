'use client'
import { createContext,useState } from "react"
import {useRouter} from "next/navigation"
import axios from 'axios'
export const CarsContext = createContext()

export const CarsProvider = ({ children }) => {

  const baseURL = 'https://backend-automotoresy-production.up.railway.app'
  // const [cars, setCars] = useState([])

  const getCars = async () => {
     const response = await axios.get(`${baseURL}/cars`)
     return response.data
  }

  return (
    <CarsContext.Provider value={{getCars }}>
      {children}
    </CarsContext.Provider>
  )
}
