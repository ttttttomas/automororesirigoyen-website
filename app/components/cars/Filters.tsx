"use client";
import { useContext, useEffect, useState, useId } from "react";

import Arrow1 from "./Arroz1";
import Arrow2 from "./Arrow2";
import { FiltersContext } from "@/app/context/FiltersContext";
import { CarsContext } from "@/app/context/CarsContext";
import Products from "./Products";
import Loading from "../Loading";

const images = [
  { id: "1", src: "/logo-chevrolet.png", alt: "Chevrolet" },
  { id: "2", src: "./logoblack.png", alt: "all" },
  { id: "4", src: "./Logo-ford.png", alt: "Ford" },
  { id: "11", src: "/logo-fiat.png", alt:"Fiat"},
  { id: "6", src: "./logo-peugeot.png", alt: "Peugeot" },
  { id: "8", src: "./citroen.png", alt: "Citroen" },
  { id: "7", src: "./logo-renault.png", alt: "Renault" },
  { id: "9", src: "./logo-toyota.png", alt: "Toyota" },
  { id: "3", src: "./logo-volks.png", alt: "Volkswagen" },
  { id: "5", src: "./Logo-honda.png", alt: "Honda" },
  { id: "10", src: "./logo-nissan.png", alt: "Nissan" },
  { id: "12", src: "/logo-hyundai.png", alt:"Hyundai"},

];

export default function ProductsFilters() {
  const {getCars, cars, setCars} = useContext(CarsContext);
  const [loading, setLoading] = useState(true)
  const {filters, filterProducts, setFilters} = useContext(FiltersContext);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [minKm, setMinKm] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  
  const minKmId = useId();
  const minPriceId = useId(); 

useEffect(() => {
  const loadCars = async () => {
    const response = await getCars();
    console.log(response);
    setCars(response);
    setLoading(false)
  };
  loadCars();
}, []);

  useEffect(() => {
  handleCategoryChange(images[currentIndex].alt);
  console.log(filteredCars)
  console.log(images[currentIndex].alt)
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
      minAño: 2010,
      maxAño: 2025,
      combustible: 'all',
      minKm: 0, 
      minPrice: 9000000,
    })
    setCurrentIndex(1);
  }

  const filteredCars = filterProducts(cars);
  return (
    <section className="p-4 flex items-start md:w-full flex-col md:flex-row h-full bg-white justify-between relative">
      <div className="flex flex-col items-center justify-center relative md:w-[400px] w-full">
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
          <select value={filters.tipo} className="w-full text-black" name="tipo" id="tipo" onChange={handleChangeFilters}>
            <option value="all">Ver todos</option>
            <option value="Camioneta">Camioneta</option>
            <option value="Auto">Auto</option>
          </select>

          <p className="font-bold">Año</p>
          <div className="flex gap-5 flex-col md:flex-row mx-auto justify-between">
            <input max={2025} min={2011} value={filters.minAño} name="minAño" onChange={handleChangeFilters} placeholder="Año minimo" className="md:w-32 w-full px-1 text-sm py-1 border-gray-500 border" type="number" />
            <input min={2011} max={2025} value={filters.maxAño} name="maxAño" onChange={handleChangeFilters} placeholder="Año Maximo" className="md:w-32 w-full px-1 text-sm py-1 border-gray-500 border" type="number" />
          </div>

          <p className="font-bold">Combustible</p>
          <select  value={filters.combustible} className="w-full text-black" name="combustible" id="combustible" onChange={handleChangeFilters}>
            <option value="all">Ver todos</option>
            <option value="Nafta">Nafta</option>
            <option value="Nafta/GNC">Nafta/GNC</option>
            <option value="Diesel">Diesel</option>
          </select>

          <p className="font-bold">Kilometraje</p>
          <div className="flex gap-2">
            <p className="flex ">Minimo:</p>
            <input
              value={minKm}
              id={minKmId}
              min='0'
              max='130000'
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
              min='9000000'
              max='16800000'
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
        <p className="text-white hidden">{minPrice}</p>
      </div>
        {loading ? <Loading /> : <Products products={filteredCars} />}
    </section>
  );
}
