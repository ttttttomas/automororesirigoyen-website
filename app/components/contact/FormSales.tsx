'use client'
import { useContext, useState } from 'react';
import { CarsContext } from '@/app/context/CarsContext';
import {toast, Toaster} from 'sonner'
import { useRouter } from 'next/navigation';

const CotizaAutoForm = () => {
  const router = useRouter();
  const {formSellCar} = useContext(CarsContext);
  const [formData, setFormData] = useState({
    year_model: '',
    marca: '',
    modelo: '',
    nombre_apellido: '',
    mail: '',
    telefono: '',
    imagen: '',
    valor_pretendido: ''
  });
  const [image, setImage] = useState('');

  const handleFileChange = async (e) => {
    const imageFile = e.target.files[0];
    const url = `https://api.imgbb.com/1/upload?key=78fc3491c12f43d96a7bf6962ea25a71&image=${imageFile.name}`;
    const data = new FormData();
    
    data.append("image", imageFile);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });
      const responseData = await response.json();      
      setImage(responseData.data.url);
      setFormData(prev => ({
        ...prev,
        imagen: responseData.data.url
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    formSellCar(formData);
    toast.success("Formulario enviado con éxito")
    setTimeout(() => {
      router.push('/')
    }, 2000)
  };

  return (
    <section className="flex w-[100%] text-black items-center justify-center p-4 rounded-xl" 
         style={{
           backgroundImage: "url('./bg-form.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
        <Toaster richColors={true} position="top-center" />
      {/* Contenedor del formulario con fondo negro semitransparente */}
      <div className="md:w-[700px] w-full bg-opacity-70 bg-black/40 backdrop-blur-xl rounded-xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Cotiza tu auto</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Grupo de campos */}
          <div className="text-black">
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Año del modelo</label>
              <select
                required={true}
                name="year_model"
                value={formData.year_model}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecciona un año</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>  
              </select>
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Modelo</label>
              <input
                required={true}
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
                required={true}
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
                required={true}
                type="email"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Direccionfalsa123@gmail.com"
              />
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Detalles y valor pretendido por tu auto</label>
              <textarea
                name="valor_pretendido"
                value={formData.valor_pretendido}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="$$"
                rows= {3}
              />
            </div>

            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Imagen</label>
              <input
              required={true}
              className='text-white border cursor-pointer p-2 rounded-lg'
              onChange={handleFileChange}
              type="file"
            />
            {image ? (
                <img
                  loading="lazy"
                  className="rounded-2xl mt-5 h-[450px] mx-auto"
                  src={image}
                  alt="Vista previa de la imagen"
                />
            ) :
            <img
                  loading="lazy"
                  className="rounded-2xl mt-5 md:h-[450px] mx-auto"
                  src="/default-form.jpg"
                  alt="Vista previa de la imagen"
                />
            }
            </div>
            
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Nombre y apellido</label>
              <input
                required={true}
                type="text"
                name="nombre_apellido"
                value={formData.nombre_apellido}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nombre y apellido"
              />
            </div>
            
            <div className='flex flex-col gap-2 mb-2'>
              <label className="block text-sm font-medium text-white mb-1">Teléfono</label>
              <input 
                required={true}
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