import Process1 from '../icons/Process1'
import Process2 from '../icons/Process2'
import Process3 from '../icons/Process3'
import Process4 from '../icons/Process4' 
export default function ProcessCompra() {
  return (
    <section className='text-black my-10'>
        <section className='grid xl:flex md:grid-cols-2 md:px-10 items-center place-context-center place-items-center justify-center gap-10'>
          <div className='bg-red-500 shadow-black/50 shadow-md justify-center items-center h-[250px] text-white gap-10 px-6 flex flex-col w-[300px]'>
            <Process1 />
            <p className='font-bold text-center'>Visita nuestra agencia</p>
            <small className='text-center'>Visita nuestra agencia y recibí asesoramiento por parte de nuestros vendedores especializados.
            </small>
          </div>
          <div className='bg-white shadow-black/50 shadow-md justify-between items-center h-[250px] text-black gap-5 px-6 py-3 flex flex-col w-[300px]'>
            <Process2 />
            <p className='font-bold text-center'>Consulta planes de financiamiento</p>
            <small className='text-center'>Ofrecemos varios planes de financiamiento para que puedas acceder al vehículo que deseas de la forma más rápida y sencilla.
            </small>
          </div>
          <div className='bg-red-500 shadow-black/50 shadow-md justify-between items-center h-[250px] text-white gap-5 px-6 py-3 flex flex-col w-[300px]'>
            <Process3 />
            <p className='font-bold text-center'>Asegura tu Compra</p>
            <small className='text-center'>Si te interesa, realiza una reserva y nosotros nos ocupamos de todo lo demás para que la adquisición sea fácil y segura.
            </small>
          </div>
          <div className='bg-white shadow-black/50 shadow-md justify-between items-center h-[250px] text-black gap-5 px-6 py-3 flex flex-col w-[300px]'>
            <Process4 />
            <p className='font-bold text-center'>Asegura tu Compra</p>
            <small className='text-center'>Cuando los documentos estén en orden y la transacción finalizada, podrás recoger tu vehículo en nuestra agencia, listo para ti.
            </small>
          </div>
        </section>
    </section>
  )
            
}
