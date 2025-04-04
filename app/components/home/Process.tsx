'use client'
import {useState} from 'react'
import ProcessCompra from './ProcessCompra'
import ProcessVenta from './ProcessVenta'

export default function Process() {
  const [selectedOption, setSelectedOption] = useState("Compras");

  return (
    <section className='text-black flex flex-col justify-center items-center'>
        <div className='flex justify-center gap-2 items-center'>
        <h2 className='my-8 font-bold text-2xl md:text-3xl'>Nuestros proceso en:</h2>
        <select onChange={(e) => setSelectedOption(e.target.value)} className='md:text-2xl font-bold'>
            <option className='text-black' value="Compras">Compras</option>
            <option className='text-black' value="Ventas">Ventas</option>
        </select>
        </div>
        {selectedOption === "Ventas" && <ProcessVenta />}
        {selectedOption === "Compras" && <ProcessCompra/>}
    </section>
  )
}
