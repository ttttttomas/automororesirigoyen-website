'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"


export default function Headermobile() {

    const path = usePathname()
    
  return (
    <header className="fixed bg-white w-full bottom-0 flex h-18 justify-between px-3 md:hidden z-10">
        <Link href="/" className='flex flex-col items-center justify-center gap-2'>
            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.875 7.62496L9.5 0.916626L18.125 7.62496V18.1666C18.125 18.675 17.9231 19.1625 17.5636 19.5219C17.2042 19.8814 16.7167 20.0833 16.2083 20.0833H2.79167C2.28334 20.0833 1.79582 19.8814 1.43638 19.5219C1.07693 19.1625 0.875 18.675 0.875 18.1666V7.62496Z" stroke={path === "/" ? "#920A0A" : "#898989"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className='text-xs font-bold'>Inicio</p>
        </Link>
        <Link href="/cars" className='flex flex-col items-center justify-center gap-2'>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.625 5.5H17.375L16.5 19H2.5L1.625 5.5Z" stroke={path === "/cars" ? "#920A0A" : "#898989"} strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M6 7.5V1H13V7.5" stroke={path === "/cars" ? "#920A0A" : "#898989"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 15H13" stroke={path === "/cars" ? "#920A0A" : "#898989"} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className='text-xs font-bold'>Comprar</p>
        </Link>
        <Link href="/sell" className='flex flex-col items-center justify-center gap-2'>
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7998 1V23" stroke={path === "/sell" ? "#920A0A" : "#898989"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.2999 5H8.5499C7.71447 5 6.91326 5.36875 6.32252 6.02513C5.73178 6.6815 5.3999 7.57174 5.3999 8.5C5.3999 9.42826 5.73178 10.3185 6.32252 10.9749C6.91326 11.6313 7.71447 12 8.5499 12H13.0499C13.8853 12 14.6865 12.3688 15.2773 13.0251C15.868 13.6815 16.1999 14.5717 16.1999 15.5C16.1999 16.4283 15.868 17.3185 15.2773 17.9749C14.6865 18.6313 13.8853 19 13.0499 19H5.3999" stroke={path === "/sell" ? "#920A0A" : "#898989"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className='text-xs font-bold'>Vender</p>
        </Link>
        <Link href="/about-us" className='flex flex-col items-center justify-center gap-2'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_875_1053)">
            <path d="M10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13Z" stroke={path === "/about-us" ? "#920A0A" : "#898989"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 21V20C8 19.4696 8.21071 18.9609 8.58579 18.5858C8.96086 18.2107 9.46957 18 10 18H14C14.5304 18 15.0391 18.2107 15.4142 18.5858C15.7893 18.9609 16 19.4696 16 20V21" stroke={path === "/about-us" ? "#920A0A" : "#898989"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 5C15 5.53043 15.2107 6.03914 15.5858 6.41421C15.9609 6.78929 16.4696 7 17 7C17.5304 7 18.0391 6.78929 18.4142 6.41421C18.7893 6.03914 19 5.53043 19 5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3C16.4696 3 15.9609 3.21071 15.5858 3.58579C15.2107 3.96086 15 4.46957 15 5Z" stroke={path === "/about-us" ? "#920A0A" : "#898989"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 10H19C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12V13" stroke={path === "/about-us" ? "#920A0A" : "#898989"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 5C5 5.53043 5.21071 6.03914 5.58579 6.41421C5.96086 6.78929 6.46957 7 7 7C7.53043 7 8.03914 6.78929 8.41421 6.41421C8.78929 6.03914 9 5.53043 9 5C9 4.46957 8.78929 3.96086 8.41421 3.58579C8.03914 3.21071 7.53043 3 7 3C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5Z" stroke={path === "/about-us" ? "#920A0A" : "#898989"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 13V12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10H7" stroke={path === "/about-us" ? "#920A0A" : "#898989"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_875_1053">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>
            <p className='text-xs font-bold'>Nosotros</p>
        </Link>
    </header>
  )
}
