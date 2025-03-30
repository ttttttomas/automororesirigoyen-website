import React from 'react'
import Link from 'next/link'

export default function OurCars() {
  return (
    <section className='text-black flex flex-col'>
        <h2 className='text-center my-8 font-bold text-3xl'>Nuestros vehiculos</h2>
        <ul className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] place-content-center md:gap-32 gap-20 mx-20'>
            <Link href="/" className='bg-white py-5 hover:scale-105 rounded-2xl transition-all group cursor-pointer text-black shadow-black/30 shadow-xl'>
                <p className='font-bold text-xl px-5 pt-5'>Ford</p>
                <small className='p-5 text-md font-semibold'>Focus</small>
                <img className='mt-5 mb-2' width="100%" src="bg-home2.png" alt="" />
                <div className="flex justify-between mx-2 items-center">
                    <ul className='w-1/2 font-semibold'>
                    <li>100.000 kilometros</li>
                    <li>2010</li>
                    <li>Nafta</li>
                    <li className='font-extrabold'>$10.000.000</li>
                    </ul>
                    <img src='./logoblack.png' className='size-32' />
                </div>
                <div className='flex mx-20 justfy-center items-center'>
                    <svg width="" className='bg-[#595959] transition-all duration-500 group-hover:bg-red-500 rounded-3xl' height="5" viewBox="0 0 302 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="296.162" y1="5.56396" x2="5.35129" y2="5.56396" stroke="" strokeWidth="7" strokeLinecap="round"/>
                    </svg>
                </div>
            </Link>
            <Link href="/" className='bg-white py-5 hover:scale-105 rounded-2xl transition-all group cursor-pointer text-black shadow-black/30 shadow-xl'>
                <p className='font-bold text-xl px-5 pt-5'>Ford</p>
                <small className='p-5 text-md font-semibold'>Focus</small>
                <img className='mt-5 mb-2' width="100%" src="bg-home2.png" alt="" />
                <div className="flex justify-between mx-2 items-center">
                    <ul className='w-1/2 font-semibold'>
                    <li>100.000 kilometros</li>
                    <li>2010</li>
                    <li>Nafta</li>
                    <li className='font-extrabold'>$10.000.000</li>
                    </ul>
                    <img src='./logoblack.png' className='size-32' />
                </div>
                <div className='flex mx-20 justfy-center items-center'>
                    <svg width="" className='bg-[#595959] transition-all duration-500 group-hover:bg-red-500 rounded-3xl' height="5" viewBox="0 0 302 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="296.162" y1="5.56396" x2="5.35129" y2="5.56396" stroke="" strokeWidth="7" strokeLinecap="round"/>
                    </svg>
                </div>
            </Link><Link href="/" className='bg-white py-5 hover:scale-105 rounded-2xl transition-all group cursor-pointer text-black shadow-black/30 shadow-xl'>
                <p className='font-bold text-xl px-5 pt-5'>Ford</p>
                <small className='p-5 text-md font-semibold'>Focus</small>
                <img className='mt-5 mb-2' width="100%" src="bg-home2.png" alt="" />
                <div className="flex justify-between mx-2 items-center">
                    <ul className='w-1/2 font-semibold'>
                    <li>100.000 kilometros</li>
                    <li>2010</li>
                    <li>Nafta</li>
                    <li className='font-extrabold'>$10.000.000</li>
                    </ul>
                    <img src='./logoblack.png' className='size-32' />
                </div>
                <div className='flex mx-20 justfy-center items-center'>
                    <svg width="" className='bg-[#595959] transition-all duration-500 group-hover:bg-red-500 rounded-3xl' height="5" viewBox="0 0 302 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="296.162" y1="5.56396" x2="5.35129" y2="5.56396" stroke="" strokeWidth="7" strokeLinecap="round"/>
                    </svg>
                </div>
            </Link><Link href="/" className='bg-white py-5 hover:scale-105 rounded-2xl transition-all group cursor-pointer text-black shadow-black/30 shadow-xl'>
                <p className='font-bold text-xl px-5 pt-5'>Ford</p>
                <small className='p-5 text-md font-semibold'>Focus</small>
                <img className='mt-5 mb-2' width="100%" src="bg-home2.png" alt="" />
                <div className="flex justify-between mx-2 items-center">
                    <ul className='w-1/2 font-semibold'>
                    <li>100.000 kilometros</li>
                    <li>2010</li>
                    <li>Nafta</li>
                    <li className='font-extrabold'>$10.000.000</li>
                    </ul>
                    <img src='./logoblack.png' className='size-32' />
                </div>
                <div className='flex mx-20 justfy-center items-center'>
                    <svg width="" className='bg-[#595959] transition-all duration-500 group-hover:bg-red-500 rounded-3xl' height="5" viewBox="0 0 302 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="296.162" y1="5.56396" x2="5.35129" y2="5.56396" stroke="" strokeWidth="7" strokeLinecap="round"/>
                    </svg>
                </div>
            </Link>
        </ul>
        <Link className='font-bold md:text-end text-center px-10 mt-5 underline' href="/cars">Ver todos</Link >
    </section>
  )
}
