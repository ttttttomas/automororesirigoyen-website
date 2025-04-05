import {useState} from 'react'
import Link from 'next/link'

type Car = {
    id: number,
    name: string,
    model: string,
    year: number
}

export default function ListCars({onChange}) {
    const [cars] = useState<Car[]>([{
        id: 1,
        name: "Toyota",
        model: "Corolla",
        year: 2012
    },
    {
        id: 2,
        name: "Toyota",
        model: "Corolla",
        year: 2012
    }])

    const redirectCar = () => {
        onChange()
    }
  return (
    <section className='absolute bg-white shadow-lg z-50 shadow-black/40 text-red-500 top-17 w-full md:w-[400px] right-0'>
        <div className='flex flex-col items-center'>
          <input placeholder='¿Que vehiculo estás buscando?' className='px-5 w-full text-black md:text-base text-sm my-2 font-bold' type="text" />
          <ul className='flex flex-col w-full gap-2'>
            {cars.length == 0 && <p className='text-center my-2 font-bold'>Cars not found</p>}
            {cars.map((car: Car) => (
              <Link key={car.id} href={`/cars/${car.id}`} onClick={redirectCar} className='flex items-center justify-around gap-2'>
              <img src="./logo-toyota.png" className='w-18' alt="logo toyota" />
              <div className='flex flex-col items-start'>
                <div className='flex items-center gap-1'>
                  <p className='font-semibold'>{car.name}</p>
                  <p className='font-semibold'>{car.model}</p>
                </div>
                <small className='text-center mx-auto'>{car.year}</small>
              </div>
            </Link>
            ))}
          </ul>
        </div>
      </section>
  )
}
