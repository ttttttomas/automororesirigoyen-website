'use client'
import {useState} from 'react'
import ProcessCompra from './ProcessCompra'
import ProcessVenta from './ProcessVenta'

export default function Process() {
  const [selectedOption, setSelectedOption] = useState("Compras");

  return (
    <section className='text-black'>
        <div className='flex justify-center items-center gap-5'>
        <h2 className='text-center my-8 font-bold text-3xl'>Nuestros proceso en:</h2>
        <select onChange={(e) => setSelectedOption(e.target.value)} className='text-2xl font-bold'>
            <option className='text-black' value="Compras">Compras</option>
            <option className='text-black' value="Ventas">Ventas</option>
        </select>
        </div>
        {selectedOption === "Ventas" && <ProcessVenta />}
        {selectedOption === "Compras" && <ProcessCompra/>}
    </section>
  )
}
