import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        modeloYear: '',
        modelo: '',
        email: '',
        detalles: '',
        marca: '',
        nombreCompleto: '',
        telefono: ''
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
        // Lógica para enviar los datos
      };
  return (
    <section className="flex w-full text-white items-center py-5 justify-center rounded-xl" 
         style={{
           backgroundImage: "url('./bg-form2.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      {/* Contenedor del formulario con fondo negro semitransparente */}
      <div className="md:w-[700px] w-full bg-opacity-70 md:bg-black/40 backdrop-blur-md md:backdrop-blur-xl rounded-xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Contactanos</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Grupo de campos */}
          <div>
            <div className='flex flex-col gap-2'>
              <label className="block text-sm font-medium text-white mb-1">Nombre y apellido</label>
              <input
                type="text"
                name="modeloYear"
                value={formData.modeloYear}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nombre y apellido"
              />
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Direccionfalsa123@gmail.com"
              />
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Telefono</label>
              <input
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Telefono"
              />
            </div>

            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Motivo</label>
              <input
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Motivo"
              />
            </div>

            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Breve descripción</label>
              <textarea
                name="detalles"
                value={formData.detalles}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Quiero cambiar o vender mi auto"
                rows= {3}
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
