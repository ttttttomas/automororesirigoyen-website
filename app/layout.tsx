import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Headermobile from "./components/Headermobile";
import { unstable_ViewTransition as ViewTransition } from "react";
import { FormContextProvider } from './context/FormContext';

import { CarsProvider } from "./context/CarsContext";
import Social from "./components/Social";

const montserrat = Montserrat({
  subsets: ["latin"], // "Latin" debe ser minúscula
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Los pesos deben ser strings
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Automotores Yrigoyen",
  description: "Descubri los mejores autos nuevos y usados en Automotores Yrigoyen. Financiación accesible, atención personalizada y variedad de marcas. ¡Tu próximo auto te espera!",
  icons:{
    icon:"/favicon.ico"
  },
  keywords: ["concesionaria de autos", "autos nuevos y usados", "compra de autos en buenos aires", "financiamiento de autos", "autos en venta hoy", "mejores autos 2025", "venta de autos usados certificados", "promociones autos nuevos", "prestamo prendario concesionaria", "automotores yrigoyen", "concesionaria automotores yrigoyen", "concesionaria de autos yrigoyen", "auto yrigoyen", "autos yrigoyen", "automotores yrigoyen", "auto", "autos", "venta de auto", "compra de auto", "financiamiento de auto", "mejores auto", "mejores autos", "nuevos auto", "nuevos autos", "usados auto", "usados autos", "venta de autos", "promociones de auto", "prestamo prendario", "prestamo prendario concesionario", "prestamo prendario concesionaria", "prestamo prendario de auto", "prestamo prendario de autos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${montserrat.variable}`} lang="es">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${montserrat.className}antialiased  bg-[#fdf7f7]`}
      >
        <FormContextProvider>
        <CarsProvider>
        <Header />
        <ViewTransition name="page">
        <Headermobile />
        {children}
        <Social />
        </ViewTransition>
        <Footer />
        </CarsProvider>
        </FormContextProvider>
      </body>
    </html>
  );
}
