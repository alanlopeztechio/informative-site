"use client";

import React, { useState, useEffect } from "react";
import TestimonioCard from "./TestimonioCard";

interface Testimonio {
  name: string;
  role: string;
  school: string;
  message: string;
  imageUrl: string;
}

const testimonios: Testimonio[] = [
  {
    name: "Mihaela Nistor",
    role: "Madre",
    school: "Escuela Helikon",
    message:
      " Es una ventana abierta al progreso escolar de mis hijos: me mantiene informado y me da la seguridad de saber que sé todo lo importante en tiempo real.",
    imageUrl: "/assets/pablo.jpg",
  },
  {
    name: "Carlos Rodríguez",
    role: "Padre",
    school: "Colegio Nacional",
    message:
      "Gracias a esta plataforma estoy más involucrado en la educación de mi hijo que nunca.",
    imageUrl: "/assets/carlos.jpg",
  },
  {
    name: "Lucía Pérez",
    role: "Madre",
    school: "Escuela Moderna",
    message:
      "Recibo notificaciones al instante y puedo comunicarme fácilmente con los maestros.",
    imageUrl: "/assets/lucia.jpg",
  },
];

const TestimonioSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Avanza automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonios.length);
    }, 5000);

    return () => clearInterval(interval); // limpieza
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonios.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonios.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto px-8">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500">
        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center items-center p-6">
          <img
            src={testimonios[current].imageUrl}
            alt={`Foto de ${testimonios[current].name}`}
            className="rounded-lg object-cover h-64 w-64"
          />
        </div>

        {/* Tarjeta de testimonio */}
        <TestimonioCard
          name={testimonios[current].name}
          role={testimonios[current].role}
          school={testimonios[current].school}
          message={testimonios[current].message}
          imageUrl={testimonios[current].imageUrl}
        />
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2"
      >
        →
      </button>
    </div>
  );
};

export default TestimonioSlider;
