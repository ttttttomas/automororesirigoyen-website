import Sales1 from '../icons/Sales1'
import Sales2 from '../icons/Sales2'
import Sales3 from '../icons/Sales3'

export default function ProcessVenta() {
  return (
    <section className='my-10'>
        <ul className='flex flex-col md:flex-row justify-center gap-20 items-center'>
            <li className='flex flex-col text-black px-5 shadow-black/50 shadow-md md:w-[300px] justify-center gap-5 py-3 h-[250px]'>
                <Sales1 />
                <p className='font-bold text-center'>Cotiza tu auto</p>
                <small className='text-center text-xs'>Completa el formulario con los datos de tu vehículo y te enviaremos una cotización lo antes posible.</small>
            </li>
            <li className='flex flex-col text-white bg-red-500 px-5 shadow-black/50 shadow-md md:w-[300px] justify-center gap-5 py-3 h-[250px]'>
                <Sales2 />
                <p className='font-bold text-center'>Agenda una inspeccion </p>
                <small className='text-center text-xs'>Elige el horario que mejor te convenga para realizar la inspección presencial. Si tu auto pasa la inspección, te hacemos una oferta y, si la aceptas, nos encargamos de todo.</small>
            </li>
            <li className='flex flex-col text-black px-5 shadow-black/50 shadow-md md:w-[300px] justify-center gap-5 py-3 h-[250px]'>
                <Sales3 />
                <p className='font-bold text-center'>Recibí tu pago</p>
                <small className='text-center text-xs'>Recibí el valor de tu auto en tu cuenta de manera simple y rápida. Además, tenés la opción de cambiarlo por un auto, pagando solo la diferencia.</small>
            </li>
        </ul>
    </section>
  )
}
