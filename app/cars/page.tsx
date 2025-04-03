'use client'
import Filters from "../components/cars/Filters";

import { FiltersProvider } from "../context/FiltersContext";
  import ProcessCompra from "../components/home/ProcessCompra";


export default function CarsPage() {
  return (
    <FiltersProvider>
    <section className="md:pt-18 h-full flex flex-col-reverse md:flex-col">
    <section className='text-black'>
        <div className='flex justify-center items-center gap-5'>
        <h2 className='text-center my-8 font-bold text-3xl'>Nuestros proceso en Compras</h2>
        </div>
        <ProcessCompra />
    </section>
        <div className="flex flex-col my-20 lg:flex-row xl:items-start">
        <Filters />
        </div>
    </section>
    </FiltersProvider>
  )
}
