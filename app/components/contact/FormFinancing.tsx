'use client'
import { useState, useRef, useContext } from "react";
import { CarsContext } from "@/app/context/CarsContext";
// import {usePathname} from "next/navigation";

export default function Form() {

  const {formFinancing} = useContext(CarsContext);
  const priceCarRef = useRef(null);
  const marcaCarRef = useRef(null);
  const modeloCarRef = useRef(null);
    const [formData, setFormData] = useState({
        nombre_apellido: '',
        telefono: '',
        mail: '',
        cuit: '',
        estado_tributario: '',
        estado_civil: '',
        modelo_car: '',
        marca_car: '',
        price_car: 0,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const price = priceCarRef.current.textContent;
        const marca = marcaCarRef.current.textContent;
        const modelo = modeloCarRef.current.textContent;
        const newForm = {
          ...formData,
          price_car: price,
          marca_car: marca,
          modelo_car: modelo
        }
        // Lógica para enviar los datos
        formFinancing(newForm);
        if (formFinancing) {
          console.log('Formulario enviado:', newForm);
        }
      };
  return (
    <section className="flex w-full text-white items-center py-5 justify-center" 
         style={{
           backgroundImage: "url('/bg-form.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      {/* Contenedor del formulario con fondo negro semitransparente */}
      <div className="md:w-[700px] w-full bg-opacity-70 bg-black/40 backdrop-blur-xl rounded-xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-start mb-6 text-white">Financiamiento de:</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Grupo de campos */}
          <div className="rounded-xl flex justify-center bg-white text-black w-max mx-auto">
            <img src="./bg-home2.png" className="rounded-l-xl" width={150} alt="" />
            <div className="flex flex-col justify-center items-center mx-3">
              <small ref={marcaCarRef} className="text-start font-medium">Fiat</small>
              <small ref={modeloCarRef} className="text-start font-medium">Cronos 6.2 2010</small>
              <b ref={priceCarRef}>Precio contado $32.000.000</b>
            </div>
          </div>
          <div>
            <div className='flex flex-col my-2 gap-2'>
              <label className="block text-sm font-medium text-white mb-1">Nombre y apellido</label>
              <input
                type="text"
                name="nombre_apellido"
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nombre y apellido"
              />
            </div>
            <div className='flex flex-col my-2 gap-2'>
              <label className="block text-sm font-medium text-white mb-1">Telefono</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Telefono"
              />
            </div>
            
            <div className='flex flex-col gap-2 my-2'>
              <label className="block text-sm font-medium text-white mb-1">Mail</label>
              <input
                type="email"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Direccionfalsa123@gmail.com"
              />
            </div>

            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Cuit</label>
              <input
                type="text"
                name="cuit"
                value={formData.cuit}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="CUIT"
              />
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Estado civil</label>
              <input
                type="text"
                name="estado_civil"
                value={formData.estado_civil}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Estado civil"
              />
            </div>

            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Estado Tributario</label>
              <input
                type="text"
                name="estado_tributario"
                value={formData.estado_tributario}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Estado tributario"
              />
            </div>
            
          </div>
          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full font-bold mt-7 bg-red-500 hover:bg-red-800 cursor-pointer py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
