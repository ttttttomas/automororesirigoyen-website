import { useState } from "react";
import Arrow2 from "./Arrow2";
import Arroz1 from "./Arroz1";

export default function CarruselImg({ product }) {
  const [index, setIndex] = useState(0);
  const images = [
    product.imagen1,
    product.imagen2,
    product.imagen3,
    product.imagen4,
  ]
  
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const handleSelect = (index) => {
    setIndex(index);
  };

  return (
    <div className="flex flex-col w-full md:w-[700px] justify-between md:justify-center items-center">
      <div className="flex w-full px-5 items-center justify-between">
        <button className="bg-gray-200 p-2 rounded-xl" onClick={prevSlide}>
          <Arroz1 />
        </button>
        <div className="w-[180px] flex items-center justify-center md:w-[400px]">
            <img
            className="object-contain"
            src={images[index]}
            alt={`Imagen ${index}`}
            />
          </div>
        <button className="bg-gray-200 p-2 rounded-xl" onClick={nextSlide}>
          <Arrow2 />
        </button>
      </div>

      <div className="flex justify-center items-center">
        <div className="md:flex grid grid-cols-2 my-10 items-center gap-6">
          <img
            onClick={() => handleSelect(0)}
            src={images[0]}
            className="md:w-20 hover:opacity-100 cursor-pointer w-16 opacity-50 transition-all duration-300"
          />
          {/* Left */}
          <img
            onClick={() => handleSelect(1)}
            src={images[1]}
            className="md:w-20 hover:opacity-100 cursor-pointer w-16 opacity-50 transition-all duration-300"
          />
          {/* Center (Main) */}
          <img
            onClick={() => handleSelect(2)}
            src={images[2]}
            className="md:w-20 hover:opacity-100 cursor-pointer w-16 opacity-50 transition-all duration-300"
          />
          {/* Right */}
          <img
            onClick={() => handleSelect(3)}
            src={images[3]}
            className="md:w-20 hover:opacity-100 cursor-pointer w-16 opacity-50 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
