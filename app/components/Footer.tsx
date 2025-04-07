import Link from "next/link"
import Ubi from "./icons/Ubi";
import Insta from "./icons/Insta";
import Mail from "./icons/Mail";
import Cel from "./icons/Cel";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black text-white px-10 pt-10 pb-18 md:pb-0 mt-10">
        <section className="flex flex-col xl:flex-row items-center md:justify-between">
            <img width={300} src="/logowhite.png"/>
            <div className="flex gap-3 items-center flex-col md:w-52 my-5">
                <p className="font-bold text-3xl mb-5">Contacto</p>
                <ul className="flex text-xs md:text-sm font-medium flex-col gap-4">
                    <li className="flex gap-5 items-center justify-start">
                        <Ubi />
                        <p>Avenida H. Yrigoyen 1930 Gerli, Avellaneda B1869</p>
                    </li>
                    <li className="flex gap-5 items-center justify-start">
                        <Cel />
                        <p>+54 9 11 6857-2052</p>
                    </li>
                    <li className="flex gap-5 items-center justify-start">
                        <Mail />
                        <p>automotoresyrigoyen@gmail.com</p>
                    </li>
                    <li className="flex gap-5 items-center justify-start">
                        <Insta />
                        <p>@automotoresyrigoyen</p>
                    </li>
                </ul>
            </div>
            <div className="flex items-center  flex-col w-full md:w-52 my-5">
                <p className="font-bold text-3xl mb-5">Horarios</p>
                <ul className="flex font-medium flex-col gap-5">
                    <li>
                        <p className="text-center text-red-500 font-bold">Luneas a Jueves</p>
                        <p className="text-start">10:30hs a 19:00hs</p>
                    </li>
                    <li>
                        <p className="text-center text-red-500 font-bold">Viernes</p>
                        <p className="text-start">10:30hs a 17:00hs</p>
                    </li>
                    <li>
                        <p className="text-center text-red-500 font-bold">Sabados</p>
                        <p className="text-start">10:30hs a 15:00hs</p>
                    </li>
                </ul>
            </div>
            <div className="flex items-center flex-col justify-between gap-5 md:w-72 my-5">
                <p className="font-bold text-3xl mb-5">Financiación</p>
                    <div>
                        {/* <p>Luneas a Jueves</p> */}
                        <p>Podes simular la financiación del 
                            <Link href="/" className="underline font-bold"> Banco Santander
                            </Link> mediante el siguiente enlace
                        </p>
                    </div>
                        <Link href="/" className="underline font-bold mt-5 md:mt-5 md:text-center">Consultá nuestro financiamiento</Link>
            </div>
        </section>
        <section className="flex flex-col md:flex-row text-xs font-bold border-t border-black/20 items-center justify-between">
            <p>©2025 Automoteres Irigoyen - Todos los derechos reservados</p>
            <div className="flex items-center gap-5">
                <p>Desarrollado por</p>
                <Link target="blank" href="https://iwebtecnology.com">
                <img className="w-20" src="/iweb.png" alt="Logo iWeb" />
                </Link>
            </div>
        </section>
    </footer>
  )
}
