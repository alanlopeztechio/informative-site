import React from "react";
import Navbar from "@/components/navbar";
import FuncionesDocentes from "@/components/FuncionesDocentes";
import TestimonioSlider from "@/components/TestimonioSlider";

const MaestrosPage: React.FC = () => {
  const funciones: string[] = [
    "Tomar asistencia en línea",
    "Subir calificaciones",
    "Crear y evaluar tareas",
    "Revisar su horario de clases",
    "Enviar mensajes a padres o alumnos",
    "Descargar reportes por grupo o materia",
  ];

  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Portada */}
        <section
          id="inicio"
          className="bg-cover bg-center text-black py-28 px-6"
          style={{ backgroundImage: "url(/assets/background3.jpg)" }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold">
              Herramientas que te liberan del papeleo y te devuelven el tiempo para enseñar
            </h1>
            <p className="mt-4 text-lg">
              En lugar de gastar horas en hojas de cálculo, informes manuales 
              y seguimiento disperso, nuestra plataforma pone en tus manos una 
              herramienta que centraliza todo lo que necesitas para gestionar tu aula 
              de forma efectiva, desde cualquier dispositivo y en cualquier momento.
            </p>
          </div>
        </section>

        {/* Funciones docentes */}
        <section id="funciones-docentes" className="py-20 text-center bg-gray-100">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-10">
            <h2 className="text-3xl font-bold mb-6 text-red-700">
              Funciones para Maestros
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Nuestra plataforma brinda herramientas completas para que los docentes gestionen su trabajo fácilmente.
            </p>
            <FuncionesDocentes funciones={funciones} />
          </div>
        </section>

        {/* Testimonios slider */}
        <section id="testimonios" className="py-20 text-center bg-gray-100">
          <h2 className="text-center text-3xl font-bold text-pink-700 mb-10">
            Nuestros usuarios lo dicen mejor
          </h2>
          <TestimonioSlider />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-4 text-center">
        <p>&copy; 2025 Control Escolar</p>
      </footer>
    </>
  );
};

export default MaestrosPage;
