import React from 'react'
import Navbar from '@/components/navbar'

export default function FinancieroPage() {
  return (
    <>
    <Navbar />

    <main className="flex flex-col min-h-screen">
      <section className="py-20 w-full max-w-7xl mx-auto flex-1 bg-[url(/fondos/bg-hex.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-10">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Sistema de pagos</h2>
          <p className="text-gray-700 text-base font-bold">
            Gestión de colegiaturas y pagos escolares eficientes
          </p>
          <br />
          <button className="bg-blue-800 text-white rounded-lg px-6 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            Solicitar Demo
          </button>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/imgs-F/finasas-enc.png"
            alt="Módulo Financiero"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>

    <section>
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">¿Por qué implementar un sistema de control de pagos escolares?</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800 text-base">
        <li className="flex flex-col items-center text-center">
          <img src="/iconos/correcto.png" alt="Controlar Pagos" className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">90%</span>{' '}
            <span className="font-bold">menos errores</span> en<br />
            comparación con procesos<br />
            manuales.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <img src="/iconos/reloj.png" alt="Controlar Pagos" className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">40%</span>{' '}
            <span className="font-bold">de tiempo ahorrado</span> en tareas<br />
            administrativa.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <img src="/iconos/tarjeta.png" alt="Controlar Pagos" className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">25%</span>{' '}
            <span className="font-bold">más pagos realizados</span> gracias a la<br />
            automatización y recordatorios.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <img src="/iconos/lupa.png" alt="Controlar Pagos" className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">73%</span>{' '}
            <span className="font-bold">mejora en la transparencia<br /></span> con reportes 
            en tiempo real.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <img src="/iconos/risa.png" alt="Controlar Pagos" className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">30%</span>{' '}
            <span className="font-bold">más satisfacción<br /></span>por pagos en línea y<br />
            notificaciones automáticas.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <img src="/iconos/diploma.png" alt="Controlar Pagos" className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">50%</span>{' '}
            <span className="font-bold">menos riesgo de sanciones fiscales </span>gracias a la facturación automática y 
            actualizaciones constantes con bancos aliados y SAT.
          </p>
        </li>
      </ul>
      </div>
    </section>
    <section>
      {/*carrusel*/}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Galería del sistema</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <img src="/1.png" alt="demo1" className="rounded-lg w-80" />
          <img src="/2.png" alt="demo2" className="rounded-lg w-80" />
          <img src="/3.png" alt="demo3" className="rounded-lg w-80" />
        </div>
      </div>
      </section>
      <section className="py-20 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-10">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/imgs-F/f2.jpg"
            alt="Módulo Financiero"
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="md:w-1/2">
         <h2 className="text-3xl font-bold text-blue-800 mb-4">Beneficios para los padres</h2>
      <ul className="grid grid-cols-1 gap-2 text-gray-800 text-base">
        <li>✔ Gestión de alumnos y profesores</li>
        <li>✔ Calificaciones automáticas</li>
        <li>✔ Reportes y asistencia</li>
        <li>✔ Panel para padres y alumnos</li>
        <li>✔ Comunicación interna</li>
        <li>✔ Módulo financiero</li>
        <li>✔ Seguridad y respaldo de datos</li>
        <li>✔ Personalización de reportes</li>
        <br />
        <li>
        <button className="bg-blue-800 text-white rounded-lg px-6 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            Solicitar Demo
          </button>
          </li>
      </ul>
        </div>
      </div>
    </section>
      <section>
        {/* Preguntas frecuentes */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">¿Cómo se integra el módulo financiero con otros módulos?</h3>
              <p className="text-gray-700">El módulo financiero se integra de manera fluida con los módulos académico y de comunicación, permitiendo una gestión integral de la institución.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">¿Qué métodos de pago se aceptan?</h3>
              <p className="text-gray-700">Aceptamos pagos en línea, transferencias bancarias y pagos en efectivo a través de convenios con bancos aliados.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">¿Cómo se generan los reportes financieros?</h3>
              <p className="text-gray-700">Los reportes financieros se generan automáticamente y pueden personalizarse según las necesidades de la institución.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-gray-700 text-white py-4 text-center w-full mt-auto">
        <p>&copy; 2025 Control Escolar</p>
      </footer>
    </>
  )
}
