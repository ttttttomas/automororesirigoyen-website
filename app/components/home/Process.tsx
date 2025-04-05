'use client'
import {useState} from 'react'
import ProcessCompra from './ProcessCompra'
import ProcessVenta from './ProcessVenta'

export default function Process() {
  const [selectedOption, setSelectedOption] = useState("Compras");

  return (
    <section className='text-black flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center md:gap-2 items-center'>
        <h2 className='md:my-8 mt-8 mb-3 font-bold text-xl md:text-3xl'>Nuestros proceso en:</h2>
        <select onChange={(e) => setSelectedOption(e.target.value)} className='md:text-2xl flex font-bold text-start bg-gray-200 p-2 rounded-lg'>
            <option className='text-black' value="Compras">Compras</option>
            <option className='text-black' value="Ventas">Ventas</option>
        </select>
        </div>
        {selectedOption === "Ventas" && <ProcessVenta />}
        {selectedOption === "Compras" && <ProcessCompra/>}
    </section>
  )
}
