'use client'
import { useState } from "react";
import Whatsapp from '../icons/Whatsapp'
import Instagram from '../icons/Instagram'

const images = [
  "/bg-home.jpeg",
  "/bg-home2.jpeg",
  "/bg-home3.jpeg"
];

export default function Carrusel() {
  const [current, setCurrent] = useState(0)

  // setTimeout(() => {
  //   setCurrent(prevstate => prevstate + 1)    
  // }, 3000);

  return (
    <section className="relative w-[90%] md:h-[700px] mx-auto">
        <img
          src={images[current]}
          alt={`Imagen ${current}`}
          className="w-full h-[400px] md:h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-between flex-col items-start p-6">
          <h1 className=" text-white drop-shadow-lg shadow-black md:text-3xl font-extrabold">¡Bienvenidos a Automotores Yrigoyen!</h1>
          <ul className="absolute  bottom-15 flex gap-5">
            <Whatsapp/>
            <Instagram />  
          </ul>
          <div className="flex justify-center absolute bottom-5 text-white gap-10 right-0 left-0">
            <p className="cursor-pointer hover:scale-120 transition-all" onClick={() => setCurrent(0)}>O</p>
            <p className="cursor-pointer hover:scale-120 transition-all" onClick={() => setCurrent(1)}>O</p>
            <p className="cursor-pointer hover:scale-120 transition-all" onClick={() => setCurrent(2)}>O</p>
          </div>
        </div>
    </section>
  );
}
