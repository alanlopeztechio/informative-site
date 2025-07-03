"use client"
import React, { useState } from 'react'
import Navbar from '@/components/navbar'
import { User, GraduationCap, ClipboardList, ListTodo, FileDown, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function FinancieroPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const faqs = [
    {
      question: '¿Cómo se integra el módulo financiero con otros módulos?',
      answer: 'El módulo financiero se integra de manera fluida con los módulos académico y de comunicación, permitiendo una gestión integral de la institución.'
    },
    {
      question: '¿Qué métodos de pago se aceptan?',
      answer: 'Aceptamos pagos en línea, transferencias bancarias y pagos en efectivo a través de convenios con bancos aliados.'
    },
    {
      question: '¿Cómo se generan los reportes financieros?',
      answer: 'Los reportes financieros se generan automáticamente y pueden personalizarse según las necesidades de la institución.'
    }
  ];
  const ventajas = [
    {
      icon: <User className="w-6 h-6 text-white" />,
      title: "Creación de expediente personalizado por cada alumno",
      description: "Nombre, CURP, grado, teléfono, correo electrónico, ficha médica, credenciales, número de contacto, etc.",
      color: "bg-blue-400"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Promedio de calificaciones",
      description: "Consultar boletas de calificaciones. Podemos definir si los papás pueden ver o no las boletas.",
      color: "bg-yellow-400"
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      title: "Criterios de evaluación",
      description: "Descargar o consultar las calificaciones y observaciones para ser entregadas a los padres de familia o alumnos.",
      color: "bg-pink-400"
    },
    {
      icon: <ListTodo className="w-6 h-6 text-white" />,
      title: "Pase de lista",
      description: "Conteo de las inasistencias de forma mensual y anual del alumno y del personal.",
      color: "bg-blue-400"
    },
    {
      icon: <FileDown className="w-6 h-6 text-white" />,
      title: "Información descargable",
      description: "Descarga información en formato .xls, .pdf, etc.",
      color: "bg-yellow-400"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Calendario",
      description: "Planea clases y eventos por medio de nuestro calendario digital.",
      color: "bg-pink-400"
    }
  ]

  return (
    <>
    <Navbar />

    <main className="flex flex-col min-h-screen">
      <section className="py-20 w-full flex-1 bg-[url(/fondos/bg-hex.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-10">
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
            <Image
              src="/imgs-F/finasas-enc.png"
              alt="Módulo Financiero"
              width={400}
              height={300}
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
          <Image src="/iconos/correcto.png" alt="Controlar Pagos" width={80} height={80} className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">90%</span>{' '}
            <span className="font-bold">menos errores</span> en<br />
            comparación con procesos<br />
            manuales.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <Image src="/iconos/reloj.png" alt="Controlar Pagos" width={80} height={80} className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">40%</span>{' '}
            <span className="font-bold">de tiempo ahorrado</span> en tareas<br />
            administrativa.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <Image src="/iconos/tarjeta.png" alt="Controlar Pagos" width={80} height={80} className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">25%</span>{' '}
            <span className="font-bold">más pagos realizados</span> gracias a la<br />
            automatización y recordatorios.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <Image src="/iconos/lupa.png" alt="Controlar Pagos" width={80} height={80} className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">73%</span>{' '}
            <span className="font-bold">mejora en la transparencia<br /></span> con reportes 
            en tiempo real.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <Image src="/iconos/risa.png" alt="Controlar Pagos" width={80} height={80} className="w-20 h-auto mb-2" />
          <p>
            <span className="font-bold text-xl">30%</span>{' '}
            <span className="font-bold">más satisfacción<br /></span>por pagos en línea y<br />
            notificaciones automáticas.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <Image src="/iconos/diploma.png" alt="Controlar Pagos" width={80} height={80} className="w-20 h-auto mb-2" />
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
          <Image src="/1.png" alt="demo1" width={320} height={200} className="rounded-lg w-80" />
          <Image src="/2.png" alt="demo2" width={320} height={200} className="rounded-lg w-80" />
          <Image src="/3.png" alt="demo3" width={320} height={200} className="rounded-lg w-80" />
        </div>
      </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Ventajas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventajas.map((v, i) => (
            <div key={i} className="bg-white rounded-xl p-6  hover:shadow-lg transition duration-300">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${v.color}`}>
                {v.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-10">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/imgs-F/f2.jpg"
            alt="Módulo Financiero"
            width={400}
            height={300}
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
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <button
                  className="w-full text-left text-xl font-semibold focus:outline-none flex justify-between items-center py-2"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  aria-expanded={openFAQ === idx}
                >
                  {faq.question}
                  <span className="ml-2">{openFAQ === idx ? '-' : '+'}</span>
                </button>
                {openFAQ === idx && (
                  <p className="text-gray-700 mt-2 transition-all duration-300">{faq.answer}</p>
                )}
              </div>
            ))}
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
