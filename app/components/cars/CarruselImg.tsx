'use client'

import { useState } from "react";
import Arrow1 from "./Arroz1";
import Arrow2 from "./Arrow2";

const images = [
    { src: "/logo-toyota.png", alt: "Toyota" },
    { src: "/logo-volks.png", alt: "Volkswagen" },
    { src: "/logo-renault.png", alt: "Renault" },
    { src: "/Logo-ford.png", alt: "Ford" },
  ];

export default function CarruselImg() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
    const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  
    const handleSelect = (index) => {
        setIndex(index);
      };

  return (
    <div className="flex flex-col w-full md:md:w-[700px] justify-between md:justify-center items-center">
        <div className="flex w-full px-5 items-center justify-between">
            <button  onClick={prevSlide}>
              <Arrow1 />
            </button>
              <img className="w-[180px] md:w-[400px]" src={images[index].src} alt={`Imagen ${index}`} />
            <button onClick={nextSlide} >
              <Arrow2/>
            </button>
        </div>
        <div className="flex justify-center items-center">
            
        <div className="md:flex grid grid-cols-2 my-10 items-center gap-6">
        <img
            onClick={() => handleSelect(index)}
            src={images[0].src}
            className="md:w-20 w-16 opacity-50 transition-all duration-300"
          />
          {/* Left */}
          <img
            onClick={() => handleSelect(index)}
            src={images[1].src}
            className="md:w-20 w-16 opacity-50 transition-all duration-300"
          />
          {/* Center (Main) */}
          <img
            onClick={() => handleSelect(index)}
            src={images[2].src}
            className="md:w-20 w-16 opacity-50 transition-all duration-300"
          />
          {/* Right */}
          <img
            onClick={() => handleSelect(index)}
            src={images[3].src}
            className="md:w-20 w-16 opacity-50 transition-all duration-300"
          />
        </div>
        </div>
    </div>
  )
}

