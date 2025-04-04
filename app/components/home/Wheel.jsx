'use client'
import { useState, useEffect, useRef } from "react";

const RotatingWheel = () => {
  const [position, setPosition] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad
  const wheelRef = useRef(null); // Referencia a la rueda
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const wheelDiameter = 100;
  const wheelCircumference = Math.PI * wheelDiameter;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Se actualiza cuando la rueda entra en la vista
      },
      { threshold: 0.100 } // Se activa cuando el 10% de la rueda es visible
    );

    if (wheelRef.current) observer.observe(wheelRef.current);

    return () => {
      if (wheelRef.current) observer.unobserve(wheelRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Solo ejecuta la animación si la rueda es visible

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxTranslation = screenWidth - wheelDiameter;
      const normalizedPosition = scrollPosition % maxTranslation;
      const newRotation = (normalizedPosition / wheelCircumference) * 360;

      setPosition(normalizedPosition);
      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [screenWidth, isVisible]);
  
  return (
    <section className="flex items-start">
     <img 
     ref={wheelRef}
     style={{
      transform: `translateX(${position}px) rotate(${rotation}deg)`,
      transition: isVisible ? "transform 0.1s linear" : "none",
    }}
      className="md:w-48 mx-5 w-24" src="./rueda.png" alt="Rueda" />
      </section>

  );
};

export default RotatingWheel;
