import React from 'react'
import Navbar from '@/components/navbar'

export default function FinancieroPage() {
  return (
    <>
    <Navbar />

    <main>
      <section className="py-20 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-70">
        {/* Texto a la izquierda */}
        <div className="md:w-[55%] text-center md:text-left">
          <h2 className="text-6xl font-bold text-red-800 mb-4">Sistema de cobros</h2>
          <p className="text-gray-800 text-base">
            Gestiona las finanzas de tu institución con facilidad. Controla pagos, recibos y reportes financieros.
          </p>
          <br />
          <button className='bg-red-800 text-white py-2 px-4 rounded'>Solicitar Demo</button>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-[50%] flex justify-center">
          <img
            src="/finasas-enc.png"
            alt="Módulo Financiero"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>

    <section>
      <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-red-800 mb-4">Características del Sistema de Cobros</h2>
      <p>El sistema de cobros ofrece una serie de características diseñadas para facilitar la gestión financiera de tu institución:</p>
      <ul className="grid grid-cols-1 gap-1 text-gray-800 text-base">
        <li>✔ Gestión de pagos en línea</li>
        <li>✔ Envío automático de recibos</li>
        <li>✔ Reportes financieros detallados</li>
        <li>✔ Integración con bancos y plataformas de pago</li>
      </ul>
      </div>
    </section>
    </main>
    <footer className="bg-gray-700 text-white py-4 text-center">
        <p>&copy; 2025 Control Escolar</p>
      </footer>
    </>
  )
}
