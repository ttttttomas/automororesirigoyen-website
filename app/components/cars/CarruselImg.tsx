import { useMemo, useState, type KeyboardEvent, type TouchEvent } from "react";
import Arrow2 from "./Arrow2";
import Arroz1 from "./Arroz1";

export default function CarruselImg({ product }) {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const images = useMemo(
    () => [product.imagen1, product.imagen2, product.imagen3, product.imagen4].filter(Boolean),
    [product]
  );

  const hasImages = images.length > 0;

  const prevSlide = () => {
    if (!hasImages) return;
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    if (!hasImages) return;
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handleSelect = (newIndex: number) => {
    setIndex(newIndex);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") prevSlide();
    if (event.key === "ArrowRight") nextSlide();
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > 45) {
      if (distance > 0) nextSlide();
      else prevSlide();
    }

    setTouchStartX(null);
  };

  return (
    <section
      className="flex flex-col w-full relative md:w-[700px] justify-between md:justify-center items-center"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Carrusel de imágenes del vehículo"
    >
      {product.reserved === 1 && (
        <p className="absolute h-8 w-1/2 bg-red-500 font-bold text-center text-2xl text-white top-0 z-10">
          RESERVADO
        </p>
      )}

      <div className="flex w-full px-5 items-center justify-between gap-2">
        <button
          className="bg-gray-200 p-2 rounded-xl hover:bg-gray-300 transition-colors disabled:opacity-50"
          onClick={prevSlide}
          disabled={!hasImages}
          aria-label="Imagen anterior"
        >
          <Arroz1 />
        </button>

        <div
          className="h-[300px] w-full flex items-center justify-center md:w-[450px] bg-gray-100 rounded-xl overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {hasImages ? (
            <img
              loading="lazy"
              className="object-contain h-full w-full transition-all duration-300"
              src={images[index]}
              alt={`Imagen ${index + 1} de ${images.length}`}
            />
          ) : (
            <p className="text-gray-500">Sin imágenes disponibles</p>
          )}
        </div>

        <button
          className="bg-gray-200 p-2 rounded-xl hover:bg-gray-300 transition-colors disabled:opacity-50"
          onClick={nextSlide}
          disabled={!hasImages}
          aria-label="Imagen siguiente"
        >
          <Arrow2 />
        </button>
      </div>

      {hasImages && (
        <>
          <p className="text-sm text-gray-500 mt-4">
            {index + 1} / {images.length}
          </p>

          <div className="flex justify-center items-center">
            <div className="md:flex grid grid-cols-2 my-6 items-center gap-4">
              {images.map((image, thumbIndex) => (
                <img
                  key={`${image}-${thumbIndex}`}
                  loading="lazy"
                  onClick={() => handleSelect(thumbIndex)}
                  src={image}
                  alt={`Miniatura ${thumbIndex + 1}`}
                  className={`md:w-20 w-16 h-12 object-cover rounded-md cursor-pointer transition-all duration-300 ${
                    index === thumbIndex
                      ? "opacity-100 ring-2 ring-red-500 scale-105"
                      : "opacity-50 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
