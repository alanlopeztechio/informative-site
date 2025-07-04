import React from "react";
import Navbar from "@/components/navbar";
import FuncionesDocentes from "@/components/FuncionesDocentes";
import HeroSection from "@/components/Directores/HeroSectionDirectores";     
import SchoolFooter from "@/components/school-footer";
import { BarChart3, GraduationCap, FileLock} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import {
 SquareChartGantt ,
  School ,
  ShieldPlus ,

} from "lucide-react";

const MaestrosPage: React.FC = () => {
    {/* Funciones directores*/}
  const funciones = [
    { texto: "mas que calificaciones,obtendras herramientas de analisis", icono: <SquareChartGantt size={36} className="text-teal-600" /> },
    { texto:  "La plataforma no solo te facilita la gestión, también te posiciona como un profesional de la educación digital", icono: <School size={36} className="text-teal-600" /> },
    { texto:  "En nuestra plataforma escolar, entendemos que la seguridad de la información es una prioridad absoluta.", icono: <ShieldPlus  size={36} className="text-teal-600" /> },
   
  ];
  {/* Funciones directores */}
  const secciones = [
    {
      icon: BarChart3,
      title: "Evaluación y seguimiento integral",
      description:
        "Administra todo desde un solo lugar",
      points: [
        "Controla la operación escolar desde un solo panel: gestiona asistencia diaria, calificaciones por periodo, pagos en línea, reportes automáticos, control de personal docente y administrativo, y mucho más. Todo esto sin depender de múltiples plataformas o software complicados. Diseñado para que los procesos educativos fluyan de forma natural y sin fricciones.",
      ],
    },
    {
      icon: GraduationCap,
      title: " Seguridad y respaldo de información",
      points: [
        "La seguridad de los datos es nuestra prioridad. La plataforma cuenta con acceso restringido por rol (alumnos, docentes, directivos), encriptación de datos y respaldos automáticos diarios para que toda la información de estudiantes, padres, finanzas y evaluaciones esté siempre protegida. Cumplimos con los estándares modernos de protección de datos escolares",
      ],
    },
     {
      icon: FileLock,
      title: "Imagen institucional profesional",
      points: [
        "Moderniza la presencia digital de tu institución con un sitio web profesional completamente adaptable a celulares, tablets y computadoras. Personalizamos el diseño con tus colores institucionales, logotipo, lema escolar y enlaces relevantes. Esta presencia refuerza la confianza de los padres, la identidad de los alumnos y proyecta liderazgo educativo.",
      ],
    },
  ];

  return (
    <>
      <Navbar />


      <main className="pt-20">
        {/* Portada */}
       <HeroSection />

        {/* Funciones docentes */}
        <section id="funciones-docentes" className="py-20 text-center bg-gray-100">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-10">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              Beneficios
            </h2>
            <p className="text-gray-700 text-center mb-8">
              informacion de docentes
            </p>
            <FuncionesDocentes funciones={funciones} />
          </div>
        </section>
         {/* Caracteristicas */}
        
       <section className="bg-gray-100 text-black py-20 px-4 md:px-8">
  <h2 className="text-4xl font-bold text-teal-500 mb-12 text-center">
    ¿Qué ofrecemos para los usuarios?
  </h2>
  <div className="space-y-10 max-w-5xl mx-auto">
    {secciones.map((sec, i) => (
      <FeatureCard
        key={i}
        icon={sec.icon}
        title={sec.title}
        description={sec.description}
        points={sec.points}
      />
    ))}
  </div>
</section>

        {/* Testimonios slider */}
        <section id="testimonios" className="py-20 text-center bg-gray-100">
          
        </section>
      </main>

        {/* Footer */}
            <div>
             
              <SchoolFooter/>
            </div>
    </>
  );
};

export default MaestrosPage;
