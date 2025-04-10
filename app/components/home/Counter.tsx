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
            end={200}
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
            end={20}
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
            <small className="text-lg font-semibold">Calificación en <a target='_blank' href='https://www.google.com/maps/place/Automotores+Yrigoyen/@-34.6797303,-58.384203,21z/data=!4m8!3m7!1s0x95bccd66d36f5e33:0xf2d6bdb8b28a2b36!8m2!3d-34.6797695!4d-58.3840237!9m1!1b1!16s%2Fg%2F11j00s6b4_?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D' className='underline'>Google</a></small>
          </li>
        </ul>
      </section>
  )
}
