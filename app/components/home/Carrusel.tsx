'use client'
import { useState } from "react";
import Logo from "../icons/Logo";
import Arrow from "../icons/Arrow";


const images = [
  "/bg-home.png", // Reemplazar con rutas reales de imágenes
  "/bg-home2.png",
];

export default function Carrusel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
};
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full h-[1000px] bg-black rounded-lg overflow-hidden">
      <div>
        <img
          src={images[current]}
          alt="Auto"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="pt-20 absolute inset-0 bg-opacity-50 flex flex-col items-start p-6">
          <h1 className="text-white text-xl font-bold">¡Bienvenidos a Automotores Yrigoyen!</h1>
        </div>
      <div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full">
        <Arrow />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full">
        <Arrow />
      </button>
      </div>
      </div>
      <div className="absolute bottom-4 left-6 flex space-x-4">
        <a href="https://wa.me/xxxxxxxxxxx" className="text-green-500 text-2xl">
          <Logo w={24}/>
        </a>
        <a href="https://instagram.com/xxxxxxxxxxx" className="text-pink-500 text-2xl">
          <Logo w={24}/>
        </a>
      </div>
    </section>
  );
}
