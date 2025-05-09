'use client'
import { useContext, useEffect,useState } from 'react'
import { CarsContext } from '@/app/context/CarsContext'
import Link from 'next/link'
import Card from '../Card'

export default function OurCars() {
  const { getCars } = useContext(CarsContext)
  const [cars, setCars] = useState([])
  useEffect(() => {
    const loadCars = async () => {
      const initialCars = await getCars()
      const carsFiltered = initialCars.filter(car => car.anio >= 2012 )
      setCars(carsFiltered)
    }
    loadCars()
  }, [])
  return (
    <section className='text-black flex flex-col'>
        <h2 className='text-center my-8 font-bold text-3xl'>Nuestros vehiculos</h2>
        <ul className='md:grid flex flex-col items-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:place-items-center md:gap-32 gap-20 mx-20'>
          {cars.slice(5,9).map((car) => (
            <Card key={car.ID} car={car} />
          ))} 
        </ul>
        <Link className='font-bold md:text-end text-center px-10 text-2xl mt-5 underline' href="/cars">Ver todos</Link>
    </section>
  )
}
