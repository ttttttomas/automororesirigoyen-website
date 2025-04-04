import Star from '../icons/Star'

export default function Opinions() {
    const testimonials = [
      {
        id: 1,
        starts: 5,
        name: "Cocu",
        text: "Lorem ipsum dolor sit amet consectetur. Suscipit arcu nunc maecenas ultrices dignissim non varius lectus. Vulputate aliquam arcu magna ultrices.",
      },
      {
        id: 2,
        starts: 5,
        name: "Messi",
        text: "Lorem ipsum dolor sit amet consectetur. Suscipit arcu nunc maecenas ultrices dignissim non varius lectus. Vulputate aliquam arcu magna ultrices.",
      },
      {
        id: 3,
        starts: 5,
        name: "Cocu",
        text: "Lorem ipsum dolor sit amet consectetur. Suscipit arcu nunc maecenas ultrices dignissim non varius lectus. Vulputate aliquam arcu magna ultrices.",
      },
    ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Opiniones de nuestros clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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
      </div>
    </section>
  );
};
