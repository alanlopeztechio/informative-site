import Image from "next/image";
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section id="inicio" className="bg-cover bg-center text-black py-28 px-6" style={{ backgroundImage: 'url(/background3.jpg)' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold">Sistema de Control Escolar</h1>
            <p className="mt-4 text-lg">Optimiza la gestión académica de tu escuela</p>
          </div>
        </section>

        <section id="funciones" className="py-20 container mx-auto">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-70">
    {/* Texto a la izquierda */}
    <div className="md:w-[55%] text-center md:text-left">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">¿Qué ofrece?</h2>
      <ul className="grid grid-cols-1 gap-1 text-gray-800 text-base">
        <li>✔ Gestión de alumnos y profesores</li>
        <li>✔ Calificaciones automáticas</li>
        <li>✔ Reportes y asistencia</li>
        <li>✔ Panel para padres y alumnos</li>
        <li>✔ Comunicación interna</li>
        <li>✔ Módulo financiero</li>
        <li>✔ Seguridad y respaldo de datos</li>
        <li>✔ Personalización de reportes</li>
      </ul>
    </div>

    {/* Imagen a la derecha */}
    <div className="md:w-[50%] flex justify-center">
      <img
        src="/prupuesta-1160x653.jpg" 
        alt="Sistema Escolar"
        className="w-full max-w-md h-auto"
      />
    </div>
  </div>
</section>


        <section className="py-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Galería del sistema</h2>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            <img src="/1.png" alt="demo1" className="rounded-lg w-80" />
            <img src="/2.png" alt="demo2" className="rounded-lg w-80" />
            <img src="/3.png" alt="demo3" className="rounded-lg w-80" />
          </div>
        </section>

        <section id="precios" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Precios</h2>
          <p className="text-lg text-gray-700">Desde <strong className="text-blue-700">$199 MXN</strong> al mes</p>
        </section>

        <section id="contacto" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Contáctanos</h2>
          <p>📧 ventas@controlescolar.com</p>
          <p>📱 <a href="https://wa.me/5215555555555" className="text-green-600 underline">WhatsApp</a></p>
        </section>
      </main>

      <footer className="bg-gray-700 text-white py-4 text-center">
        <p>&copy; 2025 Control Escolar</p>
      </footer>
    </>
  )
}
