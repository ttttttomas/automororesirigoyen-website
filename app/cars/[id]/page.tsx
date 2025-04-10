'use client'
import CarruselImg from "@/app/components/cars/CarruselImg";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { CarsContext } from "@/app/context/CarsContext";
import Loading from "@/app/components/Loading";

export default function CardIdPage() {
  const params = useParams();

  const {getCarbyId} = useContext(CarsContext);

  const [currentCar, setCurrentCar] = useState(null);
  const id = params.ID;
  
  useEffect(() => {
    async function loadCar() {
      const response = await getCarbyId(id); // <-- tu función que trae el producto
      console.log("🚗 Producto:", response);
      setCurrentCar(response);
    }
  
    loadCar();
  }, [])

  const handleCLick = () => {}

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
                <small> ${parseInt(currentCar.anticipo.toLocaleString("es-AR"))}</small>
                <div className="flex flex-col text-lg gap-2 my-5">
                <p>Año: {currentCar.anio}</p>
                <p>Kilometraje: {currentCar.km}</p>
                <p>Combustible: {currentCar.combustible}</p>
                </div>
              </div>
            <Link onClick={handleCLick} className="bg-red-500 text-white font-bold px-10 text-center py-2 cursor-pointer rounded-xl mx-auto w-full" href={`/financing/${id}`}>Consultar financiamiento</Link>
            </div>
        </section>
        <section className="md:w-full px-10 mt-10">
            <div>
            <h3 className="font-bold text-2xl mb-7">Especificaciones</h3>
            {/* Logo */}
            </div>
            <div className="flex justify-between flex-col md:flex-row md:items-center items-start text-lg gap-10">
                <ul>
                    <li>Motor:</li>
                    <li>Transmisión:</li>
                    <li>Puertas:</li>
                    <li>Traccion:</li>
                </ul>
                <ul>
                    <li>Litros:</li>
                    <li>Direccion hidraulica:</li>
                    <li>Sensor de estacionamiento:</li>
                    <li>Aire Acondicionado:</li>
                </ul>
                <ul>
                    <li>Tipo Frenos ABS:</li>
                    <li>Bolsas de Aire Frontales:</li>
                    <li>Acepta permuta:</li>
                    <li>Traccion: </li>
                </ul>
            </div>
        </section>
    </main> :
    <Loading />
    }
    </main>
  )
}
