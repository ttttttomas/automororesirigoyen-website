'use client'
import { useContext, useState } from 'react';
import { CarsContext } from '@/app/context/CarsContext';

const CotizaAutoForm = () => {
  const {formSellCar} = useContext(CarsContext);
  const [formData, setFormData] = useState({
    year_model: '',
    marca: '',
    modelo: '',
    nombre_apellido: '',
    mail: '',
    telefono: '',
    imagen: '',
    detalles: ''
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
    console.log('Formulario enviado:', formData);
    formSellCar(formData);
  };

  return (
    <section className="flex w-[100%] text-black items-center justify-center p-4 rounded-xl" 
         style={{
           backgroundImage: "url('./bg-form.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      {/* Contenedor del formulario con fondo negro semitransparente */}
      <div className="md:w-[700px] w-full bg-opacity-70 bg-black/40 backdrop-blur-xl rounded-xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Cotiza tu auto</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Grupo de campos */}
          <div className="text-black">
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Año del modelo</label>
              <input
                type="text"
                name="year_model"
                value={formData.year_model}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Año del modelo"
              />
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Modelo</label>
              <input
                type="text"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Onix"
              />
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Marca</label>
              <input
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Marca"
              />
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
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
              <label className="block text-sm font-medium text-white mb-1">Detalles</label>
              <textarea
                name="detalles"
                value={formData.detalles}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Quiero cambiar o vender mi auto"
                rows= {3}
              />
            </div>

            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Imagen</label>
              <input
                type='file'
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-black bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Nombre y apellido</label>
              <input
                type="text"
                name="nombre_apellido"
                value={formData.nombre_apellido}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Germán visintainer"
              />
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: 12345678"
              />
            </div>
          </div>
          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full mt-7 text-white font-bold bg-red-500 hover:bg-red-800 cursor-pointer py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default CotizaAutoForm;