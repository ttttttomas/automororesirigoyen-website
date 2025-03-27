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
    <section className="relative w-[90%] h-full mx-auto rounded-lg">
      <div className="w-full md:h-[850px]">
        <img
          src={images[current]}
          alt="hola"
          className="w-full h-full object-cover rounded-3xl opacity-80"
        />
        <div className="absolute inset-0 flex justify-between flex-col items-start p-6">
          <h1 className="pt-18 text-white text-3xl font-extrabold">¡Bienvenidos a Automotores Yrigoyen!</h1>
        <div className="flex justify-between gap-[650px]">
          <ul className="flex gap-5">
            <Whatsapp/>
            <Instagram />  
          </ul>
          <div className="flex gap-10 text-white items-end">
            <p className="cursor-pointer hover:scale-120 transition-all" onClick={() => setCurrent(0)}>O</p>
            <p className="cursor-pointer hover:scale-120 transition-all" onClick={() => setCurrent(1)}>O</p>
          </div>
        </div>
        </div>
        </div>
    </section>
  );
}
