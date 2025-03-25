import Lupa from './icons/Lupa'
import Logo from './icons/Logo'

export default function Header() {
  return (
    <header className='z-10 fixed w-full flex justify-between px-10 py-3'>
        <Logo w={90} />
        <ul className='flex items-center gap-8 text-white font-bold'>
            <li>Inicio</li>
            <li>Comprar</li>
            <li>Vender</li>
            <li>Nosotros</li>
            <li>Contacto</li>
            <Lupa />
        </ul>
    </header>
  )
}
