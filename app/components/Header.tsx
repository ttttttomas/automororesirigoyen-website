'use client'
import { useState } from 'react'
import Lupa from './icons/Lupa'
import Link from 'next/link'
import ListCars from './ListCars'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  
  return (
    <header className='z-10 fixed w-full flex justify-around md:justify-between px-10 backdrop-blur-sm'>
      <Link href="/">
        <img width={80} src='/logoblack.png' />
      </Link>
      <div className='flex items-center gap-8'>
        <ul className='md:flex hidden items-center gap-8 text-black font-bold'>
            <Link className='hover:scale-110 transition-all duration-200 backdrop-blur-3xl px-3 py-1 rounded-xl' href="/">Inicio</Link>
            <Link className='hover:scale-110 transition-all duration-200 backdrop-blur-3xl px-3 py-1 rounded-xl' href="/cars">Comprar</Link>
            <Link className='hover:scale-110 transition-all duration-200 backdrop-blur-3xl px-3 py-1 rounded-xl' href="/sell">Vender</Link>
            <Link className='hover:scale-110 transition-all duration-200 backdrop-blur-3xl px-3 py-1 rounded-xl' href="/about-us">Nosotros</Link>
            <Link className='hover:scale-110 transition-all duration-200 backdrop-blur-3xl px-3 py-1 rounded-xl' href="/contact">Contacto</Link>
        </ul>
        <Lupa onClick={toggleMenu}/>
      </div>
      {isOpen && <ListCars onChange={toggleMenu}/>}
    </header>
  )
}
