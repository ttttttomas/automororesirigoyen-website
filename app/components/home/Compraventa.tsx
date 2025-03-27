import Link from 'next/link'
import React from 'react'

export default function Compraventa() {
  return (
          <section className="flex md:flex-row flex-col my-10 mx-5 to-gray-600 text-white">
            {/* Sección de compra */}
            <Link href="/" className="md:w-1/2 rounded-t-2xl md:rounded-l-2xl font-bold group p-8 text-white/40 hover:text-white transition-all duration-700 bg-red-900 flex flex-col justify-between">
              <h2 className="text-2xl font-bold">Encuentra el Auto Ideal para Ti</h2>
              <p className="mt-4 text-sm">
                Explora nuestro vehículos y acércate a conocer el vehículo que te interesa en nuestras agencias, sin compromiso.
              </p>
              <div className="relative flex items-start">
                <img src="/auto1.png" alt="Auto compra" className="rounded-lg opacity-20 group-hover:opacity-80 duration-500" />
              </div>
            </Link>
            
            {/* Sección de venta */}
            <Link href="/" className="md:w-1/2 rounded-b-2xl md:rounded-r-2xl font-bold group p-8 text-white/40 hover:text-white transition-all duration-700 bg-black flex flex-col justify-between">
              <h2 className="text-2xl font-bold">¿Te Interesa Vender tu Auto?</h2>
              <p className="mt-20 text-sm">
                Déjanos acompañarte en la venta de tu vehículo y recibe el apoyo necesario para que el proceso sea seguro y sencillo.
              </p>
              <div className="relative flex items-start">
                <img src="auto2.png" alt="Auto venta" className="rounded-lg opacity-40 group-hover:opacity-80 duration-500" />
              </div>
            </Link>
          </section>
        );
      }

