import Link from "next/link";

type Props = {
  product?: number;
};

export default function Card({product: product}: Props) {
  return (
    <Link href={`/cars/${product}`} className='bg-white pb-3 hover:scale-105 rounded-2xl mx-5 transition-all group cursor-pointer text-black shadow-black/30 shadow-xl'>
                <p className='font-bold text-xl px-5 pt-5'>Fiat</p>
                <small className='p-5 text-md font-semibold'>Cronos</small>
                <img className='mt-5 mb-2' width="100%" src="bg-home2.png" alt="" />
                <div className="flex justify-between mx-2 items-center">
                    <ul className='w-1/2 font-semibold'>
                    <li className="md:text-md text-xs">0 Kilometros</li>
                    <li className="md:text-md text-xs">2025</li>
                    <li className="md:text-md text-xs">Nafta</li>
                    <li className='font-extrabold'>$25.000.000</li>
                    </ul>
                    <img src='./logo-chevrolet.png' className='w-20' />
                </div>
                <div className='flex mx-20 justfy-center items-center'>
                    <svg className='bg-[#595959] transition-all group-hover:bg-red-500 rounded-3xl mt-3' height="5" viewBox="0 0 302 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="296.162" y1="5.56396" x2="5.35129" y2="5.56396" stroke="" strokeWidth="7" strokeLinecap="round"/>
                    </svg>
                </div>
            </Link>
  )
}
