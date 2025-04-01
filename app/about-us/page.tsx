import Why1 from "../components/icons/Why1";
import Why3 from "../components/icons/Why3";
import Why4 from "../components/icons/Why4";
import CheckGreen from "../components/icons/CheckGreen";
import CheckBlack from "../components/icons/CheckBlack";

export default function AboutsUsPage() {
  return (
    <section className="w-full pt-18">
        <h4 className="text-center font-bold text-3xl mb-10">¿Quienes Somos?</h4>
        <div className="flex py-10 flex-col md:flex-row justify-center items-center gap-10 md:mx-20">
            <div className="bg-logo flex w-full md:w-1/2 flex-col h-full justify-between gap-10 p-10">
                <p className="md:text-xl text-center font-semibold">Automotores Yrigoyen</p>
                <p className="text-center w-full md:text-lg px-10 md:px-0">Automotores Yrigoyen es una concesionaria de vehículos ubicada en Avellaneda, Provincia de Buenos Aires. Fundada en 2019 por tres amigos, la empresa se especializa en la compra y venta de autos usados seleccionados y vehículos 0 km. Con una calificación de 4.9/5 estrellas basada en más de 230 reseñas, nos comprometemos a ofrecer vehículos en excelentes condiciones, garantizando la satisfacción de nuestros clientes. Nuestro equipo se distingue por una atención personalizada y profesional, brindando confianza y seguridad en cada transacción.</p>     
            </div>
            <div className="w-full md:w-1/2">
            <img className="mx-auto md:max-h-[500px] w-full md:w-[500px] px-10 rounded-2xl" src="./img-aboutus.png" alt="about us" />
            </div>
        </div>
        
        <div className="md:w-[90%] mx-auto backdrop-opacity-50 border-t border-b border-black/30">
            <h4 className="text-center font-bold text-3xl my-10 py-5">¿Por qué elegirnos?</h4>
            <ul className="flex flex-wrap justify-center gap-32 items-center pb-10">
                <li className="flex flex-col gap-5 items-center justify-between font-bold">
                    <p className="text-red-500">Financiamiento exclusivo</p>
                    <Why1 />
                </li>
                <li className="flex flex-col gap-5 items-center justify-between font-bold">
                    <p>Te acompañamos en todo el proceso</p>
                    <img src="./Why2.png" width={90} height={110} alt="why2" />
                </li>
                <li className="flex flex-col gap-5 items-center justify-between font-bold">
                    <p className="text-red-500">Entrega inmediata</p>
                    <Why3 />
                </li>
                <li className="flex flex-col gap-5 items-center justify-between font-bold">
                    <p>Aceptamos tu auto usado</p>
                    <Why4 />
                </li>
            </ul>
        </div>

        <div className="flex md:justify-around flex-col md:flex-row my-10 items-center gap-32 md:mx-20">
            <ul className="flex flex-col gap-3 items-start">
                <p className="font-bold text-2xl text-center">¿Qué ofrecemos?</p>
                <li className="flex items-center font-medium gap-3">
                    <CheckGreen />
                    <p>Compra & Venta</p>
                    </li>
                <li className="flex items-center font-medium gap-3">
                    <CheckGreen />
                    <p>Consignaciones</p>
                    </li>
                <li className="flex items-center font-medium gap-3">
                    <CheckGreen />
                    <p>Permutas</p>
                </li>
                <li className="flex items-center font-medium gap-3">
                    <CheckGreen />
                    <p>Seguros</p>
                </li>
                <li className="flex items-center font-medium gap-3"> 
                    <CheckGreen />
                    <p>Gestoria</p>
                </li>
            </ul>
            <ul className="flex flex-col gap-3 items-start">
                <p className="font-bold text-2xl text-center">Cómo financiamos?</p>
                <li className="flex items-center font-medium gap-3">
                    <CheckBlack />
                    <p>Convenio con bancos</p>
                    </li>
                <li className="flex items-center font-medium gap-3">
                    <CheckBlack />
                    <p>Tasa de interés fija</p> 
                    </li>
                <li className="flex items-center font-medium gap-3">
                    <CheckBlack />
                    <p>Plazos: de 12 a 60 cuotas</p>
                </li>
                <li className="flex items-center font-medium gap-3">
                    <CheckBlack />
                    <p>Hasta el 80% del vehiculo</p>
                </li>
                <li className="flex items-center font-medium gap-3"> 
                    <CheckBlack />
                    <p>Pocos requisitos</p>
                </li>
            </ul>
        </div>

        <div className="w-full h-full">
            <img src="./bg-logitos.png" alt="Logos" />
        </div>
    </section>
  )
}
