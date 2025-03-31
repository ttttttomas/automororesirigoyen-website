
import Lupa from './icons/Lupa'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='z-10 fixed w-full flex justify-center md:justify-between px-10 backdrop-blur-sm'>
        <img className='my-auto' width={80} src='./logoblack.png' />
        <ul className='md:flex hidden items-center gap-8 text-black font-bold'>
            <Link href="/">Inicio</Link>
            <Link href="/cars">Comprar</Link>
            <Link href="/contact">Vender</Link>
            <Link href="/about-us">Nosotros</Link>
            <Link href="/contact">Contacto</Link>
            <Lupa />
        </ul>
    </header>
  )
}
