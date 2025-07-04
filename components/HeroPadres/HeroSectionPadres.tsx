import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white min-h-[40vh] flex items-center justify-center px-5">

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Texto principal */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-700 leading-tight mb-6">
            Acompaña el camino educativo de tus hijos, día a día
          </h1>
          <p className="text-lg text-gray-700 mb-8">
Sabemos que como madre o padre, tu mayor deseo es ver a tus hijos crecer, aprender y avanzar. Por eso, nuestra plataforma te permite estar presente y participar activamente en su formación, sin necesidad de estar físicamente en la escuela.          </p>
          
        </div>

        {/* Imagen decorativa */}
        <div className="w-full max-w-md">
         <Image
        src="/imgs-F/finasas-enc.png"
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