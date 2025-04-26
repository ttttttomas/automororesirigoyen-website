'use client'
import CarruselImg from "@/app/components/cars/CarruselImg";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CarsContext } from "@/app/context/CarsContext";
import Loading from "@/app/components/Loading";
import { useCarForm } from "@/app/context/FormContext";


export default function CardIdPage({ params }) {

  const { setCarFromForm } = useCarForm()

  const {getCarbyId} = useContext(CarsContext);

  const [currentCar, setCurrentCar] = useState(null);
  const id = params.id;


  useEffect(() => {
    async function loadCar() {
      const response = await getCarbyId(id); // <-- tu función que trae el producto
      setCurrentCar(response);
    }
  
    loadCar();
  }, [])

  const handleClick = () => {
    setCarFromForm(currentCar)
  }

  return (
    <main className="pt-18 flex flex-col">
        {currentCar ? 
        <main className="pt-18 flex flex-col">
        <section className="flex flex-col md:flex-row items-center justify-around">
          <CarruselImg product={currentCar} />
            <div className="flex flex-col shadow-black/50 shadow-xl md:py-12 md:px-16 md:m-0 m-6 px-8 py-4">
              <h1 className="text-3xl font-semibold">{currentCar.marca} {currentCar.modelo}</h1>
              <div className="flex flex-col gap-2 my-5">
                <small className="text-sm">Precio contado</small>
                <b className="text-2xl"> ${currentCar.precio.toLocaleString("es-AR")}</b>
                <small className="text-sm">Anticipo</small>
                <small> ${currentCar.anticipo.toLocaleString("es-AR")}</small>
                <div className="flex flex-col text-lg gap-2 my-5">
                <p>Año: {currentCar.anio}</p>
                <p>Kilometraje: {currentCar.km.toLocaleString("es-AR")}</p>
                </div>
              </div>
            <Link onClick={handleClick} className="bg-red-500 text-white font-bold px-10 text-center py-2 cursor-pointer rounded-xl mx-auto w-full" href={`/financing`}>Consultar financiamiento</Link>
            </div>
        </section>
        <section className="md:w-full px-10 mt-10">
            <div>
            <h3 className="font-bold text-2xl mb-7">Especificaciones</h3>
            </div>
            <div className="flex justify-between flex-col md:flex-row md:items-center items-start text-lg gap-10">
                <ul>
                    <li>Motor: {currentCar.motor}</li>
                    <li>Transmisión: {currentCar.transmision}</li>
                    <li>Puertas: {currentCar.puertas}</li>
                    <li>Combustible: {currentCar.combustible}</li>
                </ul>
                <ul>
                    <li>Carroceria: {currentCar.carroceria}</li>
                    <li>Direccion hidraulica: {currentCar.hidraulica ===  1 ? "Si" : "No"}</li>
                    <li>Sensor de estacionamiento: {currentCar.sensor === 1 ? "Si" : "No"}</li>
                    <li>Aire Acondicionado: {currentCar.aire_acondicionado === 1 ? "Si" : "No"}</li>
                </ul>
                <ul>
                    <li>Tipo Frenos ABS: {currentCar.frenos === 1 ? "Si" : "No"}</li>
                    <li>Bolsas de Aire Frontales: {currentCar.airbag === 1 ?"Si" : "No"}</li>
                    <li>Acepta permuta: {currentCar.permuta === 1 ?"Si" : "No"}</li>
                    <li>Estereo con pantalla: {currentCar.estereo_pantalla === 1 ?"Si" : "No"}</li>
                </ul>
            </div>
        </section>
    </main> :
    <Loading />
    }
    </main>
  )
}
