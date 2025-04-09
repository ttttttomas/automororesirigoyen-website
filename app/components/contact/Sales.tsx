import ProcessVenta from "../home/ProcessVenta";
import FormSales from "../contact/FormSales";

export default function Sales() {
  return (
    <section className="flex flex-col-reverse pt-18 md:flex-col justify-center items-center">
    <ProcessVenta />
    <FormSales />
    </section>
  )
}
