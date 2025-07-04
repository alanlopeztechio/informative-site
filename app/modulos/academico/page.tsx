"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import { User, GraduationCap, ClipboardList, ListTodo, FileDown, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SchoolFooter from '@/components/school-footer';

export default function AcademicoPage() {
  const ventajas = [
    {
      icon: <User className="w-6 h-6 text-white" />, 
      title: "Gestión integral de alumnos y profesores",
      description: "Administra expedientes, datos personales, historial académico y asignaciones de grupos.",
      color: "bg-blue-500"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Control de calificaciones",
      description: "Registra, consulta y edita calificaciones por materia, periodo y grupo.",
      color: "bg-blue-500"
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      title: "Criterios de evaluación flexibles",
      description: "Personaliza los criterios de evaluación y genera reportes detallados.",
      color: "bg-blue-500"
    },
    {
      icon: <ListTodo className="w-6 h-6 text-white" />,
      title: "Asistencia automatizada",
      description: "Lleva el control de asistencia de alumnos y personal con reportes mensuales y anuales.",
      color: "bg-blue-500"
    },
    {
      icon: <FileDown className="w-6 h-6 text-white" />,
      title: "Reportes descargables",
      description: "Descarga boletas, listas y reportes en formatos PDF y Excel.",
      color: "bg-blue-500"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Calendario académico",
      description: "Organiza eventos, exámenes y actividades escolares en un calendario digital.",
      color: "bg-blue-500"
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
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Módulo Académico</h2>
            <p className="text-gray-700 text-base font-bold">
              Optimiza la gestión académica, calificaciones y reportes escolares de tu institución.
            </p>
            <br />
            <button className="bg-blue-800 text-white rounded-lg px-6 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              Solicitar Demo
            </button>
          </div>

          {/* Imagen a la derecha */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image
              src="/imgs-A/Modulo-academico.webp"
              alt="Módulo Académico"
              width={400}
              height={300}
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

    <section>
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">¿Por qué implementar un sistema académico digital?</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800 text-base">
        <li className="flex flex-col items-center text-center">
          <ClipboardList className="w-16 h-16 text-blue-700 mb-2" />
          <p>
            <span className="font-bold text-xl">90%</span>{' '}
            <span className="font-bold">menos errores</span> en<br />
            comparación con procesos<br />
            manuales.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <ListTodo className="w-16 h-16 text-blue-700 mb-2" />
          <p>
            <span className="font-bold text-xl">40%</span>{' '}
            <span className="font-bold">de tiempo ahorrado</span> en tareas<br />
            administrativas.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <GraduationCap className="w-16 h-16 text-blue-700 mb-2" />
          <p>
            <span className="font-bold text-xl">25%</span>{' '}
            <span className="font-bold">más eficiencia</span> en la gestión<br />
            de calificaciones y reportes.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <FileDown className="w-16 h-16 text-blue-700 mb-2" />
          <p>
            <span className="font-bold text-xl">73%</span>{' '}
            <span className="font-bold">mejora en la transparencia<br /></span> con reportes 
            en tiempo real.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <User className="w-16 h-16 text-blue-700 mb-2" />
          <p>
            <span className="font-bold text-xl">30%</span>{' '}
            <span className="font-bold">más satisfacción<br /></span>por acceso en línea y<br />
            comunicación directa.
          </p>
        </li>
        <li className="flex flex-col items-center text-center">
          <Calendar className="w-16 h-16 text-blue-700 mb-2" />
          <p>
            <span className="font-bold text-xl">50%</span>{' '}
            <span className="font-bold">menos papeleo</span> gracias a la digitalización<br />
            de documentos y reportes.
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
            src="/imgs-A/prupuesta.jpg"
            alt="Módulo Financiero"
            width={400}
            height={300}
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
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
        <div className="container mx-auto px-4 py-20 flex flex-col items-center">  
          <h2 className="text-4xl font-bold text-blue-800 mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="w-full max-w-2xl">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">¿Qué funcionalidades incluye el módulo académico?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-lg text-balance">
                  Incluye gestión de alumnos y profesores, control de calificaciones, reportes académicos, asistencia y comunicación con padres.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">¿Se pueden personalizar los criterios de evaluación?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-lg text-balance">
                  Sí, puedes definir y personalizar los criterios de evaluación según las necesidades de tu institución.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">¿Cómo se gestionan las boletas y reportes?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-lg text-balance">
                  Las boletas y reportes se generan automáticamente y pueden descargarse en diferentes formatos como PDF o Excel.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
    <div>
    <SchoolFooter />
    </div>
    </>
  )
}
