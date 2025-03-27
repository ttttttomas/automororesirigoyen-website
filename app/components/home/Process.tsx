'use client'
import {useState} from 'react'
import Process1 from '../icons/Process1'
import Process2 from '../icons/Process2'
import Process3 from '../icons/Process3'
import Process4 from '../icons/Process4'

import Link from 'next/link'

export default function Process() {
const [option] = useState({
    option1: "Ventas",
    option2: "Compras"
})



  return (
    <section className='text-black'>
        <div className='flex justify-center items-center gap-5'>
        <h2 className='text-center my-8 font-bold text-3xl'>Nuestros proceso en:</h2>
        <select className='text-2xl font-bold'>
            <option className='text-black' value="Ventas">{option.option1}</option>
            <option className='text-black' value="Compras">{option.option2}</option>
        </select>
        </div>
        <section className='flex justify-center gap-0.5 w-full items-center'>
          <div className='bg-process justify-evenly py-5 h-[400px] text-white gap-10 px-6 flex flex-col w-[300px]'>
            <Process1 />
            <p className='text-2xl font-bold'>Visita nuestra agencia</p>
            <small>Visita nuestra agencia y recibí asesoramiento por parte de nuestros vendedores especializados.
            </small>
            <Link className='border w-max px-7 py-1 rounded-md font-bold' href="/">Ver más</Link>
          </div>
          <div className='bg-black justify-evenly py-5 h-[400px] text-white gap-10 px-6 flex flex-col w-[300px]'>
            <Process2 />
            <p className='text-2xl font-bold'>Consulta planes de financiamiento</p>
            <small>Ofrecemos varios planes de financiamiento para que puedas acceder al vehículo que deseas de la forma más rápida y sencilla.
            </small>
            <Link className='border w-max px-7 py-1 rounded-md font-bold' href="/">Ver más</Link>
          </div>
          <div className='bg-process justify-evenly py-5 h-[400px] text-white gap-10 px-6 flex flex-col w-[300px]'>
            <Process3 />
            <p className='text-2xl font-bold'>Asegura tu Compra</p>
            <small>Si te interesa, realiza una reserva y nosotros nos ocupamos de todo lo demás para que la adquisición sea fácil y segura.
            </small>
            <Link className='border w-max px-7 py-1 rounded-md font-bold' href="/">Ver más</Link>
          </div>
          <div className='bg-black justify-evenly py-5 h-[400px] pt-2 text-white gap-10 px-6 flex flex-col w-[300px]'>
            <Process4 />
            <p className='text-2xl font-bold'>Completá tu compra</p>
            <small>Cuando los documentos estén en orden y la transacción finalizada, podrás recoger tu vehículo en nuestra agencia, listo para ti.
            </small>
            <Link className='border w-max px-7 py-1 rounded-md font-bold' href="/">Ver más</Link>
          </div>
        </section>
    </section>
  )
}
