"use client";
import { useEffect, useState } from "react";


import Arrow1 from "./Arroz1";
import Arrow2 from "./Arrow2";
// import { FiltersContext } from "@/app/context/FiltersContext";

interface Image {
  id: string;
  src: string;
  alt: string;
  contrast?: string;
}

const images: Image[] = [
  { id: "1", src: "/logo-chevrolet.png", alt: "chevrolet" },
  { id: "2", src: "./logoblack.png", alt: "automotores" },
  { id: "3", src: "./logo-volks.png", alt: "volkswagen" },
  { id: "4", src: "./logo-ford.png", alt: "ford" },
  { id: "5", src: "./logo-honda.png", alt: "honda" },
  { id: "6", src: "./logo-peugeot.png", alt: "peugeot" },
  { id: "7", src: "./logo-renault.png", alt: "renault" },
  { id: "8", src: "./citroen.png", alt: "citroen" },
];

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
  { id: 13, name: "Civic", category: "chevrolet",año:2018 , km:435534 ,tipo:"Auto", precio: 96789 },
  { id: 14, name: "Camry", category: "peugeot",año:2010 , km:345543 ,tipo:"Camioneta", precio: 4576765 },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState(
    {   tipo: '', 
        año: '', 
        minKm: '', 
        maxKm: '', 
        minPrice: '', 
        maxPrice: '' 
    });


  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const activeCategory = images[currentIndex].alt;
    let filtered = cars.filter(car => car.category === activeCategory);
    
    if (filters.tipo) {filtered = filtered.filter(car => car.tipo === filters.año)};
    if (filters.año) {filtered = filtered.filter(car => car.año === Number(filters.año))};
    if (filters.minKm) {filtered = filtered.filter(car => car.km >= Number(filters.minKm))};
    if (filters.maxKm) {filtered = filtered.filter(car => car.km <= Number(filters.maxKm))};
    if (filters.minPrice) {filtered = filtered.filter(car => car.precio >= Number(filters.minPrice))};
    if (filters.maxPrice) {filtered = filtered.filter(car => car.precio <= Number(filters.maxPrice))};

    setFilteredCars(filtered);
    console.log(filtered);
    
  }, [currentIndex, filters]);

  return (
    <section className="p-4 flex items-start xl:w-1/4 w-full h-full bg-white justify-center relative">
      <div className="flex flex-col items-center justify-center relative">
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
          <select className="w-full text-black" name="" id="" onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}>
            <option value="all">Ver todos</option>
            <option value="Camioneta">Camioneta</option>
            <option value="Auto">Auto</option>
          </select>
          <p className="font-bold">Año</p>
          <select name="" className="w-full" id="" onChange={(e) => setFilters({ ...filters, año: e.target.value })}>
            <option value="all">Ver todos</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
          </select>
          <p className="font-bold">Modelo</p>

          <p className="font-bold">Kilometraje</p>
          <div className="flex gap-2">
            <input 
              onChange={(e) => setFilters({ ...filters, minKm: e.target.value })}
              className="w-1/2 border-black/30 border px-2 rounded-md"
              placeholder="Min"
              type="text"
            />
            <input
              onChange={(e) => setFilters({ ...filters, maxKm: e.target.value })}
              className="w-1/2 border-black/30 border px-2 rounded-md"
              placeholder="Max"
              type="text"
            />
          </div>
          <p className="font-bold">Precio</p>
          <div className="flex gap-2">
            <input
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              className="w-1/2 border-black/30 border px-2 rounded-md"
              placeholder="Min"
              type="text"
            />
            <input
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              className="w-1/2 border-black/30 border px-2 rounded-md"
              placeholder="Max"
              type="text"
            />
          </div>
        </div>
      </div>
      <p>{filteredCars.length}</p>

      {/* <div className="mt-4 w-3/4 text-black">
      <ul>
          {filteredCars.map(car => (
            <li key={car.id} className='flex justify-center items-center gap-5 flex-col'>{car.name} - {car.año} - {car.km}km - ${car.precio}</li>
          ))}
        </ul>
      </div> */}
    </section>
  );
}
