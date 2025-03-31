import Link from 'next/link'
import Process1 from '../icons/Process1'
import Process2 from '../icons/Process2'
import Process3 from '../icons/Process3'
import Process4 from '../icons/Process4' 
export default function ProcessCompra() {
  return (
    <section className='text-black'>
        <section className='grid xl:flex md:grid-cols-2 md:px-10 items-center place-context-center place-items-center justify-center gap-0.5'>
          <div className='bg-process justify-evenly py-5 h-[400px] text-white gap-10 px-6 flex flex-col w-[300px]'>
            <Process1 />
            <p className='text-2xl font-bold'>Visita nuestra agencia</p>
            <small>Visita nuestra agencia y recibí asesoramiento por parte de nuestros vendedores especializados.
            </small>
            <Link className='border w-max px-7 py-1 rounded-md font-bold hover:bg-white hover:text-black transition-all duration-200 hover:border-transparent' href="/">Ver más</Link>
          </div>
          <div className='bg-black justify-evenly py-5 h-[400px] text-white gap-10 px-6 flex flex-col w-[300px]'>
            <Process2 />
            <p className='text-2xl font-bold'>Consulta planes de financiamiento</p>
            <small>Ofrecemos varios planes de financiamiento para que puedas acceder al vehículo que deseas de la forma más rápida y sencilla.
            </small>
            <Link className='border w-max px-7 py-1 rounded-md font-bold hover:bg-white hover:text-black transition-all duration-200 hover:border-transparent' href="/">Ver más</Link>
          </div>
          <div className='bg-process justify-evenly py-5 h-[400px] text-white gap-10 px-6 flex flex-col w-[300px]'>
            <Process3 />
            <p className='text-2xl font-bold'>Asegura tu Compra</p>
            <small>Si te interesa, realiza una reserva y nosotros nos ocupamos de todo lo demás para que la adquisición sea fácil y segura.
            </small>
            <Link className='border w-max px-7 py-1 rounded-md font-bold hover:bg-white hover:text-black transition-all duration-200 hover:border-transparent' href="/">Ver más</Link>
          </div>
          <div className='bg-black justify-evenly py-5 h-[400px] pt-2 text-white gap-10 px-6 flex flex-col w-[300px]'>
            <Process4 />
            <p className='text-2xl font-bold'>Completá tu compra</p>
            <small>Cuando los documentos estén en orden y la transacción finalizada, podrás recoger tu vehículo en nuestra agencia, listo para ti.
            </small>
            <Link className='border w-max px-7 py-1 rounded-md font-bold hover:bg-white hover:text-black transition-all duration-200 hover:border-transparent' href="/">Ver más</Link>
          </div>
        </section>
    </section>
  )
}
