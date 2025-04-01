
import Lupa from './icons/Lupa'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='z-10 fixed w-full flex justify-center md:justify-between px-10 backdrop-blur-sm'>
      <Link href="/">
        <img width={80} src='./logoblack.png' />
      </Link>
        <ul className='md:flex hidden items-center gap-8 text-black font-bold'>
            <Link className='hover:scale-110 transition-all duration-200' href="/">Inicio</Link>
            <Link className='hover:scale-110 transition-all duration-200' href="/cars">Comprar</Link>
            <Link className='hover:scale-110 transition-all duration-200' href="/financing">Financiación</Link>
            <Link className='hover:scale-110 transition-all duration-200' href="/about-us">Nosotros</Link>
            <Link className='hover:scale-110 transition-all duration-200' href="/contact">Contacto</Link>
            <Lupa />
        </ul>
    </header>
  )
}
