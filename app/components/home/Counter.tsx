'use client'
import CountUp from 'react-countup'
import Star from '../icons/Star'

export default function CounterUpPage() {
  return (
    <section className="text-white md:bg-[#920A0A] flex-wrap md:mx-0 mx-10 mt-10 py-5">
        <ul className="flex md:flex-row gap-10 flex-col items-center justify-around">
          <li className="bg-[#920A0A] w-full md:w-0 rounded-xl py-3 text-nowrap justify-center px-32 flex flex-col items-center">
          <div className='flex items-center justify-center gap-3'>
            <p className='font-bold text-4xl'>+</p>
            <CountUp
            className='text-5xl font-bold'
            start={0}
            end={500}
            duration={4}
            separator=","
            decimals={0}
            />
            </div>
            <small className="text-lg font-semibold">Clientes satisfechos</small>
          </li>
          <li className="bg-[#920A0A] w-full md:w-0 rounded-xl py-3 text-nowrap justify-center px-32 flex flex-col items-center">
          <div className='flex items-center justify-center gap-3'>
            <p className='font-bold text-4xl'>+</p>
            <CountUp
            className='text-5xl font-bold'
            start={0}
            end={30}
            duration={4}
            separator=","
            decimals={0}
            />
            </div>
            <small className="text-lg font-semibold">Vehiculos en stock</small>
          </li>
          <li className="bg-[#920A0A] w-full md:w-0 rounded-xl py-3 text-nowrap justify-center px-32 flex flex-col items-center">
            <div className='flex items-center justify-center gap-5'>
                <CountUp
                className='text-5xl font-bold'
                start={0}
                end={4.9}
                duration={4}
                separator=","
                decimals={1}
                />
                <Star color={'#fff'}/>
            </div>
            <small className="text-lg font-semibold">Calificación en Google</small>
          </li>
        </ul>
      </section>
  )
}
