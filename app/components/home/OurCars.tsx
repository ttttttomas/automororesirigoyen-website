import React from 'react'
import Logo from '../icons/Logo'

export default function OurCars() {
  return (
    <section className='text-black'>
        <h2 className='text-center my-8 font-bold text-3xl'>Nuestros vehiculos</h2>
        <ul className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] place-content-center gap-32 mx-20'>
            <li className='bg-white text-black'>
                <p>Ford</p>
                <small>Focus</small>
                <img width="100%" src="bg-home2.png" alt="" />
                <div className="flex">
                <ul className='w-1/2'>
                    <li>100.000 kilometros</li>
                    <li>2010</li>
                    <li>Nafta</li>
                    <li>$10.000.000</li>
                </ul>
                <Logo w="w-1/2" />
                </div>
            </li>
            <li className='bg-white text-black'>
                <p>Ford</p>
                <small>Focus</small>
                <img width="100%" src="bg-home2.png" alt="" />
                <div className="flex">
                <ul className='w-1/2'>
                    <li>100.000 kilometros</li>
                    <li>2010</li>
                    <li>Nafta</li>
                    <li>$10.000.000</li>
                </ul>
                <Logo w="w-1/2" />
                </div>
            </li>
            <li className='bg-white text-black'>
                <p>Ford</p>
                <small>Focus</small>
                <img width="100%" src="bg-home2.png" alt="" />
                <div className="flex">
                <ul className='w-1/2'>
                    <li>100.000 kilometros</li>
                    <li>2010</li>
                    <li>Nafta</li>
                    <li>$10.000.000</li>
                </ul>
                <Logo w="w-1/2" />
                </div>
            </li>
            <li className='bg-white text-black'>
                <p>Ford</p>
                <small>Focus</small>
                <img width="100%" src="bg-home2.png" alt="" />
                <div className="flex">
                <ul className='w-1/2'>
                    <li>100.000 kilometros</li>
                    <li>2010</li>
                    <li>Nafta</li>
                    <li>$10.000.000</li>
                </ul>
                <Logo w="w-1/2" />
                </div>
            </li>
        </ul>
    </section>
  )
}
