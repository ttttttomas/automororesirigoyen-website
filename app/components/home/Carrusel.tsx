'use client'
import { useState } from "react";
import Whatsapp from '../icons/Whatsapp'
import Instagram from '../icons/Instagram'

const images = [
  "/bg-home2.png",
  "/bg-home3.png"
];

export default function Carrusel() {
  const [current, setCurrent] = useState(0)
  // setTimeout(() => {
  //   setCurrent(prevstate => prevstate + 1)
  //   if(current === 2){
  //     setCurrent(0)
  //   }
    
  //   console.log(current)
  // }, 3000);

  return (
    <section className="relative w-[95%] md:h-[700px] mx-auto rounded-lg">
        <img
          src={images[current]}
          alt="hola"
          className="w-full h-full object-cover rounded-3xl opacity-80"
        />
        <div className="absolute inset-0 flex justify-between flex-col items-start p-6">
          <h1 className=" text-white drop-shadow-lg shadow-black md:text-3xl font-extrabold">¡Bienvenidos a Automotores Yrigoyen!</h1>
          <ul className="absolute z-10 bottom-15 flex gap-5">
            <Whatsapp/>
            <Instagram />  
          </ul>
          <div className="flex justify-center absolute bottom-5 text-white gap-10 right-0 left-0">
            <p className="cursor-pointer hover:scale-120 transition-all" onClick={() => setCurrent(0)}>O</p>
            <p className="cursor-pointer hover:scale-120 transition-all" onClick={() => setCurrent(1)}>O</p>
          </div>
        </div>
    </section>
  );
}
