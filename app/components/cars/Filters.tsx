"use client";
import { useContext, useEffect, useState, useId } from "react";


import Arrow1 from "./Arroz1";
import Arrow2 from "./Arrow2";
import { FiltersContext } from "@/app/context/FiltersContext";
import { CarsContext } from "@/app/context/CarsContext";
import Products from "./Products";


const images = [
  { id: "1", src: "/logo-chevrolet.png", alt: "Chevrolet" },
  { id: "2", src: "./logoblack.png", alt: "all" },
  { id: "3", src: "./logo-volks.png", alt: "Volkswagen" },
  { id: "4", src: "./Logo-ford.png", alt: "Ford" },
  { id: "5", src: "./Logo-honda.png", alt: "Honda" },
  { id: "6", src: "./logo-peugeot.png", alt: "Peugeot" },
  { id: "7", src: "./logo-renault.png", alt: "Renault" },
  { id: "8", src: "./citroen.png", alt: "Citroen" },
  { id: "9", src: "./logo-toyota.png", alt: "Toyota" },
  { id: "10", src: "./logo-nissan.png", alt: "Nissan" },
];

export default function ProductsFilters() {
  const {getCars, cars, setCars} = useContext(CarsContext);
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
      año: 'all',
      combustible: 'all',
      minKm: 0, 
      minPrice: 9000000,
    })
    setCurrentIndex(1);
  }

  const filteredCars = filterProducts(cars);
  console.log(filteredCars)
  return (
    <section className="p-4 flex items-start md:w-full flex-col md:flex-row h-full bg-white justify-center relative">
      <div className="flex flex-col items-center justify-center relative md:w-[500px] w-full">
        
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
            <option value="Auto"  >Auto</option>
          </select>
          <p className="font-bold">Año</p>
          <select value={filters.año} className="w-full" id="año" name='año' onChange={handleChangeFilters}>
            <option value="all">Ver todos</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2017">2017</option>
          </select>
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
              value={minPrice}
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
      </div>
        { <Products products={filteredCars} />}
    </section>
  );
}
