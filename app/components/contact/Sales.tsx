import ProcessVenta from "../home/ProcessVenta";
import FormSales from "../contact/FormSales";

export default function Sales() {
  return (
    <section className="flex flex-col justify-center items-center">
    <ProcessVenta />
    <FormSales />
    {/* <form className="flex bg-form flex-col w-full md:w-[700px] px-8 py-5 rounded-md shadow-black/50 shadow-md">
      <h3 className="text-start text-2xl font-bold">Cotiza tu auto</h3>
      <div className="flex w-full flex-col justify-between bg-black/50 text-white px-5 py-2 items-center">
        <div className="flex flex-col w-full">
        <p className="w-1/2">Año del modelo</p>
        <select className="w-1/2">
          <option className="text-black" value="">2010</option>
          <option className="text-black" value="">2011</option>
        </select>
        </div>
        <div>
        <p className="w-1/2">Marca</p>
        <select className="w-1/2">
          <option className="text-black" value="">Ford</option>
          <option className="text-black" value="">Peugeot</option>
          <option className="text-black" value="">Volkswagen</option>
          <option className="text-black" value="">Audi</option>
          <option className="text-black" value="">Citroen</option>
          <option className="text-black" value="">Renault</option>
          <option className="text-black" value="">Hyundai</option>
          <option className="text-black" value="">Fiat</option>
          <option className="text-black" value="">Kia</option>
          <option className="text-black" value="">Mercedes</option>
          <option className="text-black" value="">BMW</option>
          <option className="text-black" value="">Honda</option>
          <option className="text-black" value="">Toyota</option>
          <option className="text-black" value="">Mazda</option>
          <option className="text-black" value="">Nissan</option>
        </select>
        </div>
        <div>
        <p className="w-1/2">Marca</p>
        <input type="text" />
        </div>
      </div>
      <div></div>
      <div></div>
      <textarea name="" id=""></textarea>
    </form> */}
    </section>
  )
}
