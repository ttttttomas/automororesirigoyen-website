'use client'
import { createContext,useState } from "react"
import axios from 'axios'


export const CarsContext = createContext()

export const CarsProvider = ({ children }) => {

  const baseURL = 'https://automotoresyrigoyen.com/api'
  const [cars, setCars] = useState([])

  const getCars = async () => {
     const response = await axios.get(`${baseURL}/cars`)
     return response.data
  }
  const getCarbyId = async (id) => {
    const response = await axios.get(`${baseURL}/cars/${id}`)
    return response.data
  }
  const formSellCar = async (car) => {
    const response = await axios.post(`${baseURL}/sell_car`, car)
    return response.data
  }

  const formFinancing = async (car) => {
    const response = await axios.post(`${baseURL}/financial`, car)
    return response.data
  }

  return (
    <CarsContext.Provider value={{
      getCars, 
      getCarbyId, 
      formFinancing, 
      formSellCar,
      cars,
      setCars
      }}>
      {children}
    </CarsContext.Provider>
  )
}
