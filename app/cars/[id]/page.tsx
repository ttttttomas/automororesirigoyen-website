import Link from "next/link";

export default function CardIdPage() {

    
  return (
    <main className="pt-18 flex flex-col">
        <section className="flex items-center justify-around">
            <div className="flex flex-col justify-center items-center">
                <img width={500} src="/logo-toyota.png" alt="" />
                <div className="flex justify-center items-center">
                <img width={200} src="/logo-toyota.png" alt="" />
                <img width={200} src="/logo-toyota.png" alt="" />
                <img width={200} src="/logo-toyota.png" alt="" />
                <img width={200} src="/logo-toyota.png" alt="" />
                </div>
            </div>
            <div className="flex flex-col shadow-black/50 shadow-xl px-8 py-4">
              <h1 className="text-3xl font-semibold">Chevrolet Camaro 6.2 Coupe Ss V8</h1>
              <div className="flex flex-col gap-2 my-5">
                <small className="text-sm">Precio contado</small>
                <b className="text-lg">$32.000.000</b>
                <div className="flex flex-col text-lg gap-2 my-5">
                <p>Año: 2020</p>
                <p>Kilometraje: 2.000km</p>
                </div>
              </div>
            <Link className="bg-red-500 text-white font-bold px-10 text-center py-2 cursor-pointer rounded-xl mx-auto w-full" href="/financing">Consultar financiamiento</Link>
            </div>
        </section>
        <section className="w-full px-10 mt-10">
            <div>
            <h3 className="font-bold text-2xl mb-7">Especificaciones</h3>
            {/* Logo */}
            </div>
            <div className="flex justify-between items-center text-lg gap-10">
                <ul>
                    <li>Motor:</li>
                    <li>Transmisión:</li>
                    <li>Puertas:</li>
                    <li>Traccion:</li>
                </ul>
                <ul>
                    <li>Litros:</li>
                    <li>Direccion hidraulica:</li>
                    <li>Sensor de estacionamiento:</li>
                    <li>Aire Acondicionado:</li>
                </ul>
                <ul>
                    <li>Tipo Frenos ABS:</li>
                    <li>Bolsas de Aire Frontales:</li>
                    <li>Acepta permuta:</li>
                    <li>Anticipo: $</li>
                </ul>
            </div>
        </section>
    </main>
  )
}
