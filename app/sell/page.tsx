export default function SellPage() {
  return (
    <section className="pt-18">
      <h6 className="font-bold text-center text-lg md:text-2xl">¿Queres vender tu vehiculo?</h6>
      <p className="font-bold text-center text-lg md:text-2xl md:mb-10 mb-5 mt-8 md:mt-14">Rellena el siguiente formulario y te lo cotizamos via email</p>
      <form className="flex flex-col md:w-[500px] p-5 items-start mx-auto gap-5">
        <input className="bg-gray-200 px-3 py-1 w-full" placeholder="Año" type="text" />
        <input className="bg-gray-200 px-3 py-1 w-full" placeholder="Marca" type="text" />
        <input className="bg-gray-200 px-3 py-1 w-full" placeholder="Modelo" type="text" />
      <input className="bg-gray-200 px-3 py-1 w-full" placeholder="Nombre y apellido*" type="file" />
      <input className="bg-gray-200 px-3 py-1 w-full" placeholder="Numero de documento*" type="text" />
      <input className="bg-gray-200 px-3 py-1 w-full" placeholder="Telefono de contacto*" type="text" />	
      <input className="bg-gray-200 px-3 py-1 w-full" placeholder="E-mail*" type="text" />
      <textarea className="bg-gray-200 px-3 py-1 w-full h-20" placeholder="Algo más para agregar (Opcional)"></textarea>
      <button className="bg-black text-white font-bold px-10 py-2 cursor-pointer mx-auto w-full" type="submit">Enviar cotización</button>
      </form>
    </section>
  )
}
