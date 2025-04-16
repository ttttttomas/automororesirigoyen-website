import Link from 'next/link';
import Star from '../icons/Star'

export default function Opinions() {
    const testimonials = [
      {
        id: 1,
        starts: 5,
        name: "alfredo javier niestempski",
        text: "Hola la verdad exelente todo!! Genios cumplieron con todo lo pactado, exelente trato, gestionaron todo al pie de la letra!! Gracias Pablo por tu atención, estamos re contentos con nuestro 0 km.",
      },
      {
        id: 2,
        starts: 5,
        name: "Horacio Matarasso",
        text: "Tuve una excelente experiencia profesional y humana en cada una de las etapas de la venta de mi auto. Incluso tuve complicaciones mías con la documentación que ellos mismos se ocuparon, siempre con muy buena disposición y amabilidad (sin ningún cobro extra no letra chica). Además pagaron lo que el auto valía. En fin, no dudo en que volveré a comprar y vender con ellos!.",
      },
      {
        id: 3,
        starts: 5,
        name: "Gonzalo Villa",
        text: "Todo de 10 fui a ver una auto me gustó lo señe a las semana ya lo fuimos a buscar 2 veces de vacaciones sin problemas super confiable.",
      },
      {
        id: 4,
        starts: 5,
        name: "Valeria Santa Cruz",
        text: "Excelente la atención de Pablo. Despejó todas mis dudas, y toda la información que me brindó, se cumplió. La firma, plazos de entrega, en fin todo! Estamos muy contentos por ayudarnos a cumplir este sueño! Gracias 😃….",
      },
      {
        id: 5,
        starts: 5,
        name: "Romina P",
        text: "Excelente experiencia. Trate con profesionales, me asesoraron y contestaron todas mis dudas. Fui porque vi que tienen buenas referencias. Recomendable 100%..",
      },
    ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Algunas de nuestras reseñas
        </h2>
        
        <div className="flex gap-8 overflow-x-scroll">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white min-w-[500px] flex flex-col justify-between p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6 flex items-start justify-center gap-5">
                <Star color={'#CE0000'}/>
                <p>5</p>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <p className="font-bold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className='text-center my-10'>
        <Link 
        target='_blank'
        href="https://www.google.com/maps/place/Automotores+Yrigoyen/@-34.6797303,-58.384203,21z/data=!4m8!3m7!1s0x95bccd66d36f5e33:0xf2d6bdb8b28a2b36!8m2!3d-34.6797695!4d-58.3840237!9m1!1b1!16s%2Fg%2F11j00s6b4_?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" 
        className='font-bold text-2xl underline'>Ver todas las reseñas
         </Link>
        </div>
      </div>
    </section>
  );
};
