import React from 'react'
import Navbar from '@/components/navbar'

export default function FinancieroPage() {
  return (
    <>
    <Navbar />

    <main>
      <section className="py-30 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-70">
        {/* Texto a la izquierda */}
        <div className="md:w-[55%] text-center md:text-left">
          <h2 className="text-6xl font-bold text-red-800 mb-4">Sistema de pagos</h2>
          <p className="text-gray-800 text-base">
            Gestión de colegiaturas y pagos escolares eficientes
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
      <h2 className="text-3xl font-bold text-red-800 mb-4 text-center">¿Por qué implementar un sistema de control de pagos escolares?</h2>
      <br />s
      <br />
      <ul className="grid grid-cols-3 gap-10 text-gray-800 text-base">
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
    </main>
    <footer className="bg-gray-700 text-white py-4 text-center">
        <p>&copy; 2025 Control Escolar</p>
      </footer>
    </>
  )
}
