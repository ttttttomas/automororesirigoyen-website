import Carrusel from "./components/home/Carrusel";
import Compraventa from "./components/home/Compraventa";
import OurCars from './components/home/OurCars'
// import Wheel from './components/home/Wheel'
import Process from './components/home/Process'
import Opinions from './components/home/Opinions'
import Map from './components/home/Map'



export default function Home() {
  return (
    <main className="pt-18">
      <Carrusel />
      <section className="bg-red-500 text-black mt-10 py-5">
        <ul className="flex justify-around">
          <li className="flex flex-col items-center">
            <p className="font-bold text-5xl">1000</p>
            <small className="text-lg font-semibold">Clientes satisfechos</small>
          </li>
          <li className="flex flex-col items-center">
            <p className="font-bold text-5xl">1000</p>
            <small className="text-lg font-semibold">Vehiculos en stock</small>
          </li>
          <li className="flex flex-col items-center">
            <p className="font-bold text-5xl">1000</p>
            <small className="text-lg font-semibold">Calificación</small>
          </li>
        </ul>
      </section>
      <OurCars />
      <Process />
      <Compraventa />
      <Opinions />
      <Map width="100%" height={"200px"}/>
    </main>
  );
}
