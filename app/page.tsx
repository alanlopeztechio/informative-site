import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
     
      <main className="pt-20">
        <section id="inicio" className="bg-cover bg-center text-black py-28 px-6" style={{ backgroundImage: 'url(/assets/background3.jpg)' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold">Sistema de Control Escolar</h1>
            <p className="mt-4 text-lg">Optimiza la gestión académica de tu escuela</p>
          </div>
        </section>

        <section id="funciones" className="py-20 text-center container mx-auto">
          <h2 className="text-3xl font-bold text-red-800 mb-6">¿Qué ofrece?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <li>✔ Gestión de alumnos y profesores</li>
            <li>✔ Calificaciones automáticas</li>
            <li>✔ Reportes y asistencia</li>
            <li>✔ Panel para padres y alumnos</li>
          </ul>
        </section>

        <section className="py-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-8 text-red-800">Galería del sistema</h2>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            <img src="/assets/1.png" alt="demo1" className="rounded-lg w-80" />
            <img src="/assets/2.png" alt="demo2" className="rounded-lg w-80" />
            <img src="/assets/3.png" alt="demo3" className="rounded-lg w-80" />
          </div>
        </section>

        <section id="precios" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-4">Precios</h2>
          <p className="text-lg text-gray-700">Desde <strong className="text-red-700">$199 MXN</strong> al mes</p>
        </section>

        <section id="contacto" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-4">Contáctanos</h2>
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
