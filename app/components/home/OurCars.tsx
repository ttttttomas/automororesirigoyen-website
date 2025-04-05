import React from 'react'
import Link from 'next/link'
import Card from '../Card'

export default function OurCars() {
  return (
    <section className='text-black flex flex-col'>
        <h2 className='text-center my-8 font-bold text-3xl'>Nuestros vehiculos</h2>
        <ul className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] place-content-center md:gap-32 gap-20 mx-20'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ul>
        <Link className='font-bold md:text-end text-center px-10 text-2xl mt-5 underline' href="/cars">Ver todos</Link >
    </section>
  )
}
