import Filters from "../components/cars/Filters";
import Products from "../components/cars/Products";


import { FiltersProvider } from "../context/FiltersContext";
  import ProcessCompra from "../components/home/ProcessCompra";

const cars = [
    { id: 1, name: "Civic", category: "honda",año:2011 , km:2 ,tipo:"Auto", precio: 1203210 },
  { id: 2, name: "Accord", category: "honda",año:2013 , km:123 ,tipo:"Auto", precio: 5243 },
  { id: 3, name: "Mustang", category: "ford",año:2010 , km:231321 ,tipo:"Camioneta", precio: 234 },
  { id: 4, name: "Fiesta", category: "ford",año:2010 , km:35665 ,tipo:"Auto", precio: 234243 },
  { id: 5, name: "Camaro", category: "volkswagen",año:2010 , km:77756 ,tipo:"Auto", precio: 1203210 },
  { id: 6, name: "Corvette", category: "automotores",año:2018 , km:345 ,tipo:"Camioneta", precio: 8796 },
  { id: 7, name: "Civic", category: "peugeot",año:2012 , km:4343 ,tipo:"Auto", precio: 7869 },
  { id: 8, name: "Citroen", category: "citroen",año:2012 , km:234 ,tipo:"Auto", precio: 46546 },
  { id: 9, name: "Camry", category: "renault",año:2010 , km:11 ,tipo:"Camioneta", precio: 23 },
  { id: 10, name: "Corvette", category: "renault",año:2013 , km:63 ,tipo:"Auto", precio: 5467 },
  { id: 11, name: "Civic", category: "peugeot",año:2010 , km:5748 ,tipo:"Camioneta", precio: 6789 },
  { id: 12, name: "Camry", category: "chevrolet",año:2016 , km:4588 ,tipo:"Auto", precio: 2345 },

]

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
        <Products products={cars}/>
        </div>
    </section>
    </FiltersProvider>
  )
}
