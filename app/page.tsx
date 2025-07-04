'use client'
import Navbar from "@/components/navbar"
import Image from "next/image"
import { useState } from "react"
import { GraduationCap, MessageSquareText, BadgeDollarSign } from "lucide-react"
import SchoolFooter from "@/components/school-footer";
export default function Home() {
  const modulos = [
    {
      id: "academico",
      titulo: "Académico",
      icono: <GraduationCap className="text-indigo-500 w-6 h-6" />,
      puntos: [
        "Criterios de evaluación.",
        "Promedio de calificaciones.",
        "Pase de lista."
      ],
      color: "bg-indigo-500/10",
      imagen: "/imgs-A/academico.webp"
    },
    {
      id: "comunicacion",
      titulo: "Notificaciones",
      icono: <MessageSquareText className="text-green-500 w-6 h-6" />,
      puntos: [
        "Aplicación móvil Whats New CRI.",
        "Envío de mensajes SMS.",
        "Envío de correos electrónicos."
      ],
      color: "bg-green-500/10",
      imagen: "/imgs-A/Chat.webp"
    },
    {
      id: "financiero",
      titulo: "Financiero",
      icono: <BadgeDollarSign className="text-red-500 w-6 h-6" />,
      puntos: [
        "Importación de archivos bancarios.",
        "Reportes de pagos, cobros, etc.",
        "Asignación de pagos, becas, descuentos, etc."
      ],
      color: "bg-red-500/10",
      imagen: "/imgs-A/Financiero.webp"
    }
  ]

  const [moduloActivo, setModuloActivo] = useState("comunicacion")

  const moduloSeleccionado = modulos.find((m) => m.id === moduloActivo)
  return (
    <>
      <Navbar />
     
      <main className="pt-20">
        <section id="inicio" className="bg-cover bg-center text-black py-28 px-6" style={{ backgroundImage: 'url(/fondos/bg-hex.jpg)' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold">Sistema de Control Escolar</h1>
            <p className="mt-4 text-lg">Optimiza la gestión académica de tu escuela</p>
          </div>
        </section>

        <section id="funciones" className="py-20 text-center container mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">¿Qué ofrece?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <li>✔ Gestión de alumnos y profesores</li>
            <li>✔ Calificaciones automáticas</li>
            <li>✔ Reportes y asistencia</li>
            <li>✔ Panel para padres y alumnos</li>
          </ul>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Nuetros clientes</h2>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            <Image src="/assets/1.png" alt="demo1" width={320} height={200} className="rounded-lg w-80" />
            <Image src="/assets/2.png" alt="demo2" width={320} height={200} className="rounded-lg w-80" />
            <Image src="/assets/3.png" alt="demo3" width={320} height={200} className="rounded-lg w-80" />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-[#f6fcff] to-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Columna izquierda: módulos */}
        <div className="w-full md:w-1/2 space-y-6">
          {modulos.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setModuloActivo(mod.id)}
              className={`w-full text-left rounded-xl px-6 py-4 transition-all duration-300 ${
                moduloActivo === mod.id
                  ? "bg-white shadow-md border border-gray-200"
                  : mod.color
              }`}
            >
              <div className="flex items-center gap-2 mb-2 font-semibold text-lg text-gray-800">
                {mod.icono}
                {mod.titulo}
              </div>
              <ul className="text-gray-600 list-disc pl-6 text-sm">
                {mod.puntos.map((punto, idx) => (
                  <li key={idx}>{punto}</li>
                ))}
              </ul>
              <div className="mt-2 text-sm text-blue-600 hover:underline">
                Ver más
              </div>
            </button>
          ))}
        </div>

        {/* Columna derecha: imagen que cambia */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[500px] h-[350px] transition-opacity duration-500">
            {moduloSeleccionado && (
              <Image
                key={moduloSeleccionado.imagen} // fuerza recarga de imagen
                src={moduloSeleccionado.imagen}
                alt={`Vista previa de ${moduloSeleccionado.titulo}`}
                fill
                className="object-contain rounded-xl border border-gray-200 shadow-md"
              />
            )}
          </div>
        </div>
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

      <div>
       
        <SchoolFooter/>
      </div>
    </>
  )
}
