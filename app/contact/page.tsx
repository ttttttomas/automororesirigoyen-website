'use client'
import { useState } from 'react';
import Sales from '../components/contact/Sales';
import Form from '../components/contact/Form';

export default function ContactPage () {
    const [activeTab, setActiveTab] = useState('vender');

    return (
        <section className='pt-18 w-full'>
      <div className="">
        {/* Contenedor de las pestañas */}
        <div className="flex border-t-2 border-red-500">
          {/* Pestaña "Vende tu auto" */}
          <button
            className={`py-2 px-4 w-1/2 font-bold cursor-pointer focus:outline-none ${
                activeTab === 'vender'
                ? 'border-b-2 border-red-500 text-red-600'
                : 'text-gray-500 hover:text-gray-700 border-b-2 border-white'
            }`}
            onClick={() => setActiveTab('vender')}
            >
            Vende tu auto
          </button>
          
          {/* Pestaña "Contáctanos" */}
          <button
            className={`py-2 px-4 w-1/2 font-bold cursor-pointer focus:outline-none ${
                activeTab === 'contacto'
                ? 'border-b-2 border-red-500 text-red-600'
                : 'text-gray-500 hover:text-gray-700 border-b-2 border-white'
            }`}
            onClick={() => setActiveTab('contacto')}
            >
            Contáctanos
          </button>
        </div>
  
        {/* Contenido de las pestañas */}
        <div className="p-4">
          {activeTab === 'vender' ? (
              <Sales />
            ) : (
              <Form />
            )}
        </div>
      </div>
    </section>
    );
};