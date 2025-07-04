import React from "react";
import Navbar from "@/components/navbar";
import FuncionesDocentes from "@/components/FuncionesDocentes";
import HeroSection from "@/components/HeroMaestros/HeroSectionMaestros";
import FeatureCard from "@/components/FeatureCard";
import { BarChart3, GraduationCap, FileLock} from "lucide-react";
import SchoolFooter from "@/components/school-footer";
import ImagenesCarrusel from "@/components/imagenes-carrusel";
import {
  CalendarCheck,
  Upload,
  FileText,
  Clock,
  MessageSquare,
  Download,
} from "lucide-react";


const MaestrosPage: React.FC = () => {

const funciones = [
  { texto: "Tomar asistencia en línea", icono: <CalendarCheck className="text-teal-600" /> },
  { texto: "Subir calificaciones", icono: <Upload className="text-teal-600" /> },
  { texto: "Crear y evaluar tareas", icono: <FileText className="text-teal-600" /> },
  { texto: "Revisar su horario de clases", icono: <Clock className="text-teal-600" /> },
  { texto: "Enviar mensajes a padres o alumnos", icono: <MessageSquare className="text-teal-600" /> },
  { texto: "Descargar reportes por grupo o materia", icono: <Download className="text-teal-600" /> },
];

  const secciones = [
    {
      icon: BarChart3,
      title: "Evaluación y seguimiento integral",
      description:
        "Más que calificaciones, obtendrás herramientas de análisis:",
      points: [
        "Reportes gráficos de rendimiento por grupo o estudiante.",
        "Tendencias de asistencia, puntualidad y participación.",
        "Alertas tempranas sobre bajo desempeño o riesgo de reprobación.",
        "Apoyo para la planeación de clases basada en resultados reales.",
      ],
    },
    {
      icon: GraduationCap,
      title: "Profesionaliza tu rol docente",
      points: [
        "Moderniza tu práctica con tecnología fácil y eficaz.",
        "Participa en capacitaciones y tutoriales incluidos en la plataforma.",
        "Colabora con otros docentes desde un entorno centralizado.",
      ],
    },
     {
      icon: FileLock,
      title: "Seguridad y respaldo en tu trabajo",
      points: [
        "Autenticacion con usuario y contraseña segura,con opción a doble verificacion(2FA)",
        "*Infraestructura en servidores seguros de alto rendimiento (AWS / Azure / Google Cloud).",
        "*Actualizaciones de seguridad frecuentes para proteger contra vulnerabilidades.",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Portada */}
        <section
          id="inicio"
          className="bg-center text-black  px-6"
          style={{ backgroundImage: "url(/assets/background3.jpg)" }}
        >
          <HeroSection />
        </section>

        {/* Funciones docentes */}
        <section id="funciones-docentes" className="py-20 text-center bg-gray-100">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-10">
           <h2 className="text-4xl font-bold text-teal-700 mb-12 text-center">
    Caracteristicas mejoradas
  </h2>
            <p className="text-gray-700 text-center mb-8">
              Nuestra plataforma brinda herramientas completas para que los docentes gestionen su trabajo fácilmente.
            </p>
            <FuncionesDocentes funciones={funciones} />
          </div>
        </section>
       
      <div>
      <section>
       
        {/* Imagenes carrusel (solo si se usa) */}

                <ImagenesCarrusel />


      
      </section>

      </div>
        {/* Nueva sección con FeatureCard */}
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
          <h2 className="text-center text-3xl font-bold text-pink-700 mb-10">
            Nuestros usuarios lo dicen mejor
          </h2>
          
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
