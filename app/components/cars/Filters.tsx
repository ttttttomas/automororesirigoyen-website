"use client";
import { useContext, useEffect, useState, useId } from "react";


import Arrow1 from "./Arroz1";
import Arrow2 from "./Arrow2";
import { FiltersContext } from "@/app/context/FiltersContext";
// import { CarsContext } from "@/app/context/CarsContext";
import Products from "./Products";

interface Cars {
  id: number;
  name: string;
  category: string;
  año: number;
  combustible: string;
  precio: number;
  km: number;
  tipo: string;
}

const cars: Cars[] = [
  { id: 1, name: "Civic", category: "honda",año:2011 ,combustible:"Nafta/GNC" , km:2 ,tipo:"Auto", precio: 1203210 },
  { id: 2, name: "Accord", category: "honda",año:2013 ,combustible:"Diesel" , km:123 ,tipo:"Auto", precio: 5243 },
  { id: 3, name: "Mustang", category: "ford",año:2010 ,combustible:"Nafta/GNC" , km:231321 ,tipo:"camioneta", precio: 234 },
  { id: 4, name: "Fiesta", category: "ford",año:2010 ,combustible:"Diesel" , km:35665 ,tipo:"Auto", precio: 234243 },
  { id: 5, name: "Camaro", category: "volkswagen",año:2010 ,combustible:"Nafta/GNC" , km:77756 ,tipo:"Auto", precio: 1203210 },
  // { id: 6, name: "Corvette", category: "automotores",año:2018 , km:345 ,tipo:"Camioneta", precio: 8796 },
  { id: 7, name: "Civic", category: "peugeot",año:2012 ,combustible:"Diesel" , km:4343 ,tipo:"Auto", precio: 7869 },
  { id: 8, name: "Citroen", category: "citroen",año:2012 ,combustible:"Nafta" , km:234 ,tipo:"Auto", precio: 46546 },
  { id: 9, name: "Camry", category: "renault",año:2010 ,combustible:"Nafta/GNC" , km:11 ,tipo:"Camioneta", precio: 23 },
  { id: 10, name: "Corvette", category: "renault",año:2013 ,combustible:"Nafta" , km:63 ,tipo:"Auto", precio: 5467 },
  { id: 11, name: "Civic", category: "peugeot",año:2010 ,combustible:"Nafta" , km:5748 ,tipo:"Camioneta", precio: 6789 },
  { id: 12, name: "Camry", category: "chevrolet",año:2016 ,combustible:"Nafta" , km:4588 ,tipo:"Auto", precio: 2345 },
  { id: 13, name: "Civic", category: "chevrolet",año:2018 ,combustible:"Nafta/GNC" , km:435534 ,tipo:"Auto", precio: 96789 },
  { id: 14, name: "Camry", category: "peugeot",año:2010 ,combustible:"Nafta" , km:345543 ,tipo:"Camioneta", precio: 4576765 },
  { id: 15, name: "Camry", category: "toyota",año:2010 ,combustible:"Diesel" , km:345543 ,tipo:"Camioneta", precio: 4576765 },
  { id: 16, name: "Camry", category: "nissan",año:2010 ,combustible:"Diesel" , km:345543 ,tipo:"Camioneta", precio: 4576765 },
]

const images = [
  { id: "1", src: "/logo-chevrolet.png", alt: "chevrolet" },
  { id: "2", src: "./logoblack.png", alt: "all" },
  { id: "3", src: "./logo-volks.png", alt: "volkswagen" },
  { id: "4", src: "./Logo-ford.png", alt: "ford" },
  { id: "5", src: "./Logo-honda.png", alt: "honda" },
  { id: "6", src: "./logo-peugeot.png", alt: "peugeot" },
  { id: "7", src: "./logo-renault.png", alt: "renault" },
  { id: "8", src: "./citroen.png", alt: "citroen" },
  { id: "9", src: "./logo-toyota.png", alt: "toyota" },
  { id: "10", src: "./logo-nissan.png", alt: "nissan" },
];

export default function ProductsFilters() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [minKm, setMinKm] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const minKmId = useId();
  const minPriceId = useId(); 

  console.log(minKm, minPrice);
  

  const {filters, filterProducts, setFilters} = useContext(FiltersContext);
  // const {getCars, cars} = useContext(CarsContext);

  useEffect(() => {
  handleCategoryChange(images[currentIndex].alt);
  console.log(filteredCars)
}, [currentIndex]);

  const handleChangeMinKm = (e) => {
    setMinKm(e.target.value);
    handleChangeFilters(e)
  };

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
    handleChangeFilters(e)
  };

  
  const handleChangeFilters = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleCategoryChange = (newCategory) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      categoria: newCategory,
    }));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const handleClick = () => {
    setFilters({
      categoria: 'all',
      tipo: 'all',
      año: 'all',
      combustible: 'all',
      minKm: '0', 
      minPrice: '0',
    })
    setCurrentIndex(1);
  }

  const filteredCars = filterProducts(cars);

  return (
    <section className="p-4 flex items-start md:w-full flex-col md:flex-row h-full bg-white justify-center relative">
      <div className="flex flex-col items-center justify-center relative md:w-1/4 w-full">
        
        <div className="mx-4 flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-4 text-white z-10">
            <Arrow1 />
          </button>
          <div className="flex mx-10 justify-center transition-all duration-300 items-center overflow-hidden">
            {images.map((image, index) => {
              let position = "hidden";
              if (index === currentIndex) position = "scale-90 opacity-100";
              if (index === (currentIndex - 1 + images.length) % images.length)
                position = "scale-50 opacity-50";
              if (index === (currentIndex + 1) % images.length)
                position = "scale-50 opacity-50";

              return (
                <div
                  key={index}
                  className={`transition-transform duration-500 ease-in-out flex justify-center items-center ${position}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="md:min-w-10 md:max-w-24 max-w-14 min-w-8"
                  />
                </div>
              );
            })}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-4 text-white z-10">
            <Arrow2 />
          </button>
        </div>

        <div className="flex gap-2 flex-col items-start justify-center">
          <p className="font-bold">Tipo de vehiculo</p>
          <select className="w-full text-black" name="tipo" id="tipo" onChange={handleChangeFilters}>
            <option value="all">Ver todos</option>
            <option value="Camioneta">Camioneta</option>
            <option value="Auto">Auto</option>
          </select>
          <p className="font-bold">Año</p>
          <select className="w-full" id="año" name='año' onChange={handleChangeFilters}>
            <option value="all">Ver todos</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
          </select>
          <p className="font-bold">Combustible</p>
          <select className="w-full text-black" name="combustible" id="combustible" onChange={handleChangeFilters}>
            <option value="all">Ver todos</option>
            <option value="Nafta">Nafta</option>
            <option value="Nafta/GNC">Nafta/GNC</option>
            <option value="Diesel">Diesel</option>
          </select>
          <p className="font-bold">Kilometraje</p>
          <div className="flex gap-2">
            <p className="flex ">Minimo:</p>
            <input
              value={filters.minKm}
              id={minKmId}
              min='0'
              max='3000'
              name='minKm' 
              onChange={(handleChangeMinKm)}
              className="w-1/2 border-black/30 border px-2 rounded-md"
              placeholder="Min"
              type="range"
            />
           {filters.minKm}Km
          </div>
          <p className="font-bold">Precio</p>
          <div className="flex justify-between gap-2">
          <p className="flex ">Minimo:</p>
              <input
              value={filters.minPrice}
              id={minPriceId}
              min='0'
              max='20000'
              name='minPrice'
              onChange={(handleChangeMinPrice)}
              className="w-1/2 border-black/30 border px-2 rounded-md"
              placeholder="Min"
              type="range"
              />
              ${filters.minPrice}
          </div>
        </div>
        <button onClick={handleClick} className="my-5 bg-red-500 text-white font-bold px-10 rounded-xl cursor-pointer py-2">Limpiar filtros</button>
      </div>
        { <Products products={filteredCars} />}
        {/* <footer className="absolute top-[-90px] left-0 right-0 text-center">
          {
            JSON.stringify(filters,null,2)
          }
        </footer> */}
    </section>
  );
}
