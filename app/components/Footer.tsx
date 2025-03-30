import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black text-white px-10 mt-10">
        <section className="flex flex-col xl:flex-row items-center md:justify-between">
            <img width={300} src="./logowhite.png"/>
            <div className="flex flex-col md:w-52 my-5">
                <p className="font-bold text-xl mb-5">Contacto</p>
                <ul className="flex font-medium flex-col gap-2">
                    <li>Avenida H. Yrigoyen 1930 Gerli, Avellaneda B1869</li>
                    <li>+54 9 11 6857-2052</li>
                    <li>Mail</li>
                    <li>@automotoresyrigoyen</li>
                </ul>
            </div>
            <div className="flex flex-col w-full md:w-52 my-5">
                <p className="font-bold text-xl mb-5">Horarios</p>
                <ul className="flex font-medium flex-col gap-2">
                    <li>
                        <p>Luneas a Jueves</p>
                        <p>10:30hs a 19:00hs</p>
                    </li>
                    <li>
                        <p>Viernes</p>
                        <p>10:30hs a 17:00hs</p>
                    </li>
                    <li>
                        <p>Sabados</p>
                        <p>10:30hs a 15:00hs</p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col justify-between md:w-72 my-5">
                <p className="font-bold text-xl mb-5">Financiación</p>
                    <div>
                        {/* <p>Luneas a Jueves</p> */}
                        <p>Podes simular la financiación del 
                            <Link href="/" className="underline font-bold"> Banco Santander
                            </Link> mediante el siguiente enlace
                        </p>
                    </div>
                    <p className="mt-5 md:mt-5">
                        <Link href="/" className="underline font-bold">Consultá nuestro financiamiento</Link>
                    </p>
            </div>
        </section>
        <section className="flex flex-col md:flex-row text-xs font-bold border-t border-black/20 items-center justify-between">
            <p>©2025 Automoteres Irigoyen - Todos los derechos reservados</p>
            <div className="flex items-center gap-5">
                <p>Desarrollado por</p>
                <Link target="blank" href="https://iwebtecnology.com">
                <img className="w-20" src="./iweb.png" alt="Logo iWeb" />
                </Link>
            </div>
        </section>
    </footer>
  )
}
