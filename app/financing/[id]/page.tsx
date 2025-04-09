'use client'
import { useParams, useSearchParams } from "next/navigation";
import FormFinancing from "../../components/contact/FormFinancing";


export default function FinancingPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.id;
  const marca = searchParams.get('marca');
  const modelo = searchParams.get('modelo');
  const precio = searchParams.get('precio');
  console.log(id, marca, modelo, precio);
  return (
    <section className="pt-18 w-full">
      <FormFinancing />
    </section>
  )
}