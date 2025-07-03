import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Texto principal */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-700 leading-tight mb-6">
            Herramientas que te liberan del papeleo y te devuelven el tiempo para enseñar
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            En lugar de gastar horas en hojas de cálculo, informes manuales y seguimiento disperso, nuestra plataforma pone en tus manos una herramienta que centraliza todo lo que necesitas para gestionar tu aula de forma efectiva, desde cualquier dispositivo y en cualquier momento.
          </p>
          
        </div>

        {/* Imagen decorativa */}
        <div className="w-full max-w-md">
         <Image
  src="/assets/imgs-F/finasas-enc.png"
  alt="Plataforma educativa"
  width={400} // ajusta según necesidad
  height={300}
  className="w-full h-auto object-contain"
/>

        </div>

      </div>
    </section>
  );
}