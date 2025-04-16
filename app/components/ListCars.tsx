import {useContext, useState, useEffect} from 'react'
import Link from 'next/link'
import { CarsContext } from '../context/CarsContext'
import Loading from './Loading'

type Car = {
    ID: number,
    marca: string,
    modelo: string,
    anio: number,
    imagen1: string,
}

export default function ListCars({onChange}) {
    const [cars, setCars] = useState<Car[]>([])
    const {getCars} = useContext(CarsContext)
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [filteredCars, setFilteredCars] = useState(cars)

    const filtered = cars.filter((car: Car) => car.marca.toLowerCase().includes(search.toLowerCase())
    || car.modelo.toLowerCase().includes(search.toLowerCase()))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      setFilteredCars(filtered)
    }

    useEffect(() => {
      const loadCars = async () => {
        const response = await getCars();
        setCars(response)
        setLoading(false)
        setFilteredCars(response)
      }
      loadCars()
    }, [])

    const redirectCar = () => {
        onChange()
    }

    console.log(filteredCars)

  return (
    <section className='absolute bg-white shadow-lg z-50 shadow-black/40 text-red-500 top-17 w-full md:w-[400px] right-0'>
        <div className='flex flex-col justify-between items-center'>
          {loading ? 
          <div className='my-2'>
            <Loading /> 
          </div> : 
          <>
          <input onChange={handleChange} placeholder='¿Que vehiculo estás buscando?' className='px-5 w-full text-black md:text-base text-sm my-2 font-bold' type="text" />
          <ul className='flex flex-col justify-between items-center md:items-start w-full gap-2 h-40 overflow-y-scroll'>
            {filteredCars.map((car: Car) => (
              <Link key={car.ID} href={`/cars/${car.ID}`} onClick={redirectCar} className='flex items-center justify-around gap-2'>
              <img src={car.imagen1} className='w-18 pl-2' alt="logo toyota" />
              <div className='flex flex-col pl-10'>
                <div className='flex flex-col md:flex-row items-center gap-1'>
                  <p className='font-semibold text-xs md:text-lg'>{car.marca}</p>
                  <p className='font-semibold text-xs md:text-lg'>{car.modelo}</p>
                </div>
                <small className='text-center mx-auto'>{car.anio}</small>
              </div>
            </Link>
            ))}
          </ul>
          </>
          }
          {filteredCars.length === 0 && !loading && 
          <div className='flex justify-center items-center'>
            <p className=' text-red-500 text-start font-bold'>
              No hay resultados
            </p>
          </div>}  
        </div>
      </section>
  )
}
