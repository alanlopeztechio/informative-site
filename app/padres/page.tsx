import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroPadres/HeroSectionPadres";
import FeatureCard from "@/components/FeatureCard";
import { BarChart3, GraduationCap, FileLock} from "lucide-react";
import SchoolFooter from "@/components/school-footer";
import ImagenesCarrusel from "@/components/imagenes-carrusel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import { testimonials } from "@/data/testimonials"

const MaestrosPage: React.FC = () => {


  const secciones = [
    {
      icon: BarChart3,
      title: " Una experiencia más segura para ellos, más tranquila para ti",
      description:
        "Tu tranquilidad es importante. Por eso, la plataforma garantiza:",
      points: [
        "Seguridad y privacidad de los datos escolares.",
        "Acceso restringido y supervisado para los estudiantes",
        "Alertas tempranas sobre bajo desempeño o riesgo de reprobación.",
        "Una experiencia fácil de usar, sin necesidad de conocimientos técnicos.",
      ],
    },
    {
      icon: GraduationCap,
      title: "Pagos, trámites y documentos al alcance de un clic",
      description:
        "Evita filas y trámites presenciales. Desde el mismo portal puedes:",
      points: [
        "Realizar pagos escolares de forma segura.",
        "Consultar el historial de pagos, imprimir comprobantes y descargar facturas.",
        "Solicitar constancias, certificados o reportes académicos sin moverte de casa.",
        "Llevar un control ordenado y transparente de los gastos escolares."
      ],
    },
     {
      icon: FileLock,
      title: "Participación informada = mejores decisioneso",
      description:
        "Gracias a los reportes automáticos que genera la plataforma, sabrás en qué destacar tu apoyo como madre o padre. Podrás:",
      points: [
        "Detectar a tiempo cambios en el comportamiento, rendimiento o asistencia.",
        "Identificar fortalezas y áreas de mejora de tus hijos.",
        "Tomar decisiones basadas en datos reales y actualizados.",
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

      
      <div>
      
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
<section>
       
        {/* Imagenes carrusel (solo si se usa) */}

                <ImagenesCarrusel />
      </section>
      </div>
      {/* Testimonios slider */}
        <section>
          <TestimonialsCarousel testimonials={testimonials} />
 
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
