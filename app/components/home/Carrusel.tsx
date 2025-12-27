'use client'
// import { useState } from "react";

// const images = [
//   "/bg-home.webp",
//   "/bg-home2.webp",
//   "/bg-home3.webp"
// ];

export default function Carrusel() {
  // const [current, setCurrent] = useState(0)

  // const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  // setTimeout(() => {
  //   nextSlide()
  // }, 3000);  

  return (
    <section className="relative w-full md:h-200 mx-auto">
        {/* <img
          loading="lazy"
          src={images[current]}
          alt={`Imagen ${current}`}
          className="w-full h-[400px] md:h-full object-cover rounded-2xl"
        /> */}
        <img className="w-full object-cover max-h-200" src="/img.jpg" alt="img" />
        {/* <div className="w-full md:h-full hero object-center rounded-2xl" /> */}
        <div className="absolute inset-0 flex justify-between flex-col items-start p-6">
          <h1 className=" text-white drop-shadow-lg shadow-black md:text-3xl text-md text-nowrap mt-26 md:mt-0 font-extrabold">¡Bienvenidos a Automotores Yrigoyen!</h1>
        </div>
    </section>
  );
}
