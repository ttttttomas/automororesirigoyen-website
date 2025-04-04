import ProcessVenta from "../home/ProcessVenta";
import FormSales from "../contact/FormSales";

export default function Sales() {
  return (
    <section className="flex flex-col-reverse md:flex-col justify-center items-center">
    <ProcessVenta />
    <FormSales />
    </section>
  )
}
