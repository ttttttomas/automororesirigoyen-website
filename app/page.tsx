import Carrusel from "./components/home/Carrusel";
import Compraventa from "./components/home/Compraventa";
import OurCars from './components/home/OurCars'
import CounterUpPage from "./components/home/Counter";
import Wheel from './components/home/Wheel'
import Process from './components/home/Process'
import Opinions from './components/home/Opinions'
import Map from './components/home/Map'



export default function Home() {
  return (
    <main className="pt-20">
      <Carrusel />
      <CounterUpPage />
      <Process />
      <Wheel />
      <OurCars />
      <Compraventa />
      <Opinions />
      <Map width="100%" height="200px"/>
    </main>
  );
}
