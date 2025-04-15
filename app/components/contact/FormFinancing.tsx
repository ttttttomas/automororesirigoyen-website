'use client'
import { useState, useRef, useContext, useEffect } from "react";
import { CarsContext } from "@/app/context/CarsContext";
import { useCarForm } from "@/app/context/FormContext";
import Loading from "../Loading";


export default function Form() {
  const {carFromForm} = useCarForm()
  const {formFinancing, getCars} = useContext(CarsContext);
  const [loading, setLoading] = useState(true)
  const [cars, setCars] = useState([])
  const priceCarRef = useRef(null);
  const marcaCarRef = useRef(null);
  const modeloCarRef = useRef(null);
  console.log(carFromForm)

  useEffect(() => {
    setLoading(false)
    // setCarFromForm(null)

    if(!carFromForm) {
      const loadCars = async () => {
        const response = await getCars();
        console.log(response);
        setCars(response);
      };
      loadCars();
    }
  }, [])

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
        // formFinancing(newForm);
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
        
        {loading ? <Loading /> : 
        <form onSubmit={handleSubmit}>
        {/* Grupo de campos */}
        {carFromForm ? <div className="rounded-xl flex items-center justify-center gap-20 bg-white text-black w-full mx-auto">
          <img src={carFromForm.imagen1} className="h-52 object-cover" width={400} alt={'Auto ' + carFromForm.marca + ' ' + carFromForm.modelo} />   
          <div className="flex flex-col mx-3">
            <small ref={marcaCarRef} className="text-center text-xl font-bold">{carFromForm.marca}</small>
            <small ref={modeloCarRef} className="text-center text-xl font-bold">{carFromForm.modelo}</small>
            <b className="text-center text-red-500" ref={priceCarRef}>${carFromForm.precio.toLocaleString("es-AR")}</b>
          </div>
        </div> :
        <div className="rounded-xl flex items-center h-96 justify-between bg-white text-black w-full">
        <ul className="overflow-scroll w-full max-h-96">
          {cars.map((car) => (
            <div key={car.ID} className="flex items-center justify-center gap-2 rounded-xl p-4 hover:bg-gray-200 transition-all duration-300">
              <img src={car.imagen1} className='w-12' alt={'Auto ' + car.marca + ' ' + car.modelo} />
              <p>{car.marca} {car.modelo}</p>
            </div>
          ))}
        </ul>
      </div>}
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
        <p className="font-bold text-center mt-10">BRINDAMOS FINANCIACION A TRAVES DE CREDITOS PERSONALES O PRENDARIOS. LOS MISMOS SON EN PESOS, PUEDE SER TASA FIJA O UVA.</p>
        <p className="text-center font-bold mt-5 underline">*Esto es solo una simulación, en el caso de que se apruebe nos contactaremos para seguir el proceso si es lo que se desea.*</p>
      </form>}
      </div>
    </section>
  )
}
