import Link from "next/link";

export default function Card({car}) {
  return (
    <Link href={`/cars/${car.ID}`} className='bg-white flex flex-col justify-between w-[290px] pb-5 hover:scale-105 rounded-2xl transition-all group cursor-pointer text-black shadow-black/30 shadow-xl'>
                <p className='font-bold text-xl px-5 pt-5'>{car.marca}</p>
                <small className='px-5 text-md font-semibold'>{car.modelo}</small>
                <div className="flex justify-center items-center">
                    <img
                    loading="lazy"
                        className="h-64 w-80 my-5 object-cover"
                        src={car.imagen1}
                        alt={`Imagen ${car.marca} ${car.modelo}`}
                    />
                </div>
                <div className="flex justify-between mx-2 items-center">
                    <ul className='w-1/2 font-semibold'>
                        <li className="md:text-md text-xs">{car.km.toLocaleString("es-AR")} Kilometros</li>
                        <li className="md:text-md text-xs">{car.anio}</li>
                        <li className="md:text-md text-xs">{car.combustible}</li>
                        <li className='font-extrabold'>${car.precio.toLocaleString("es-AR")}</li>
                    </ul>
                    {car.marca === "Ford" && <img src='./Logo-ford.png' className='w-20 object-contain' />}
                    {car.marca === "Chevrolet" && <img src='./logo-chevrolet.png' className='w-20 object-contain' />}
                    {car.marca === "Peugeot" && <img src='./logo-peugeot.png' className='w-20 object-contain' />}
                    {car.marca === "Volkswagen" && <img src='./logo-volks.png' className='w-20 object-contain' />}
                    {car.marca === "Honda" && <img src='./logo-honda.png' className='w-20 object-contain' />}
                    {car.marca === "Renault" && <img src='./logo-renault.png' className='w-20 object-contain' />}
                    {car.marca === "Citroen" && <img src="./citroen.png" className='w-20 object-contain' />}
                    {car.marca === "Toyota" && <img src='./logo-toyota.png' className='w-20 object-contain' />}
                    {car.marca === "Nissan" && <img src='./logo-nissan.png' className='w-20 object-contain' />}
                    {car.marca === "Fiat" && <img src='./logo-fiat.png' className='w-20 object-contain' />}
                    
                </div>
                <div className='flex mx-20 justfy-between items-center'>
                    <svg className='bg-[#595959] transition-all group-hover:bg-red-500 rounded-3xl mt-3' height="5" viewBox="0 0 302 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="296.162" y1="5.56396" x2="5.35129" y2="5.56396" stroke="" strokeWidth="7" strokeLinecap="round"/>
                    </svg>
                </div>
            </Link>
  )
}
