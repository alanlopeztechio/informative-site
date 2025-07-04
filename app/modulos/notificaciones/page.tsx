import React from 'react'
import Navbar from '@/components/navbar'
import { Bell, Mail, Smartphone, Users, Calendar, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SchoolFooter from '@/components/school-footer';

export default function NotificacionesPage() {
  const ventajas = [
    {
      icon: <Bell className="w-6 h-6 text-white" />, 
      title: "Notificaciones instantáneas",
      description: "Padres y alumnos reciben avisos y recordatorios en tiempo real directamente en sus dispositivos.",
      color: "bg-blue-500"
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Mensajes personalizados",
      description: "La escuela puede enviar información relevante y segmentada a cada grupo o usuario.",
      color: "bg-blue-500"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Multicanal",
      description: "Avisos por correo electrónico y SMS, según la preferencia de los padres.",
      color: "bg-blue-500"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Confirmación de lectura",
      description: "La escuela puede verificar quién ha recibido y leído cada notificación enviada.",
      color: "bg-blue-500"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Recordatorios de eventos",
      description: "Los padres reciben avisos automáticos de juntas, exámenes y actividades escolares.",
      color: "bg-blue-500"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Comunicación clara",
      description: "Los padres siempre estarán informados, pero no pueden responder a los avisos desde la plataforma.",
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
              <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Módulo de Notificaciones</h2>
              <p className="text-gray-700 text-base font-bold">
                Comunicación escolar eficiente y centralizada: informa, recuerda y conecta a toda la comunidad educativa.
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
                alt="Módulo Notificaciones"
                width={400}
                height={300}
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="w-full max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">¿Por qué implementar un sistema de notificaciones escolares?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800 text-base">
              <li className="flex flex-col items-center text-center">
                <Bell className="w-16 h-16 text-blue-700 mb-2" />
                <p><span className="font-bold text-xl">95%</span> <span className="font-bold">de mensajes entregados</span> en tiempo real.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <Mail className="w-16 h-16 text-blue-700 mb-2" />
                <p><span className="font-bold text-xl">80%</span> <span className="font-bold">menos llamadas</span> por dudas administrativas.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <Smartphone className="w-16 h-16 text-blue-700 mb-2" />
                <p><span className="font-bold text-xl">3x</span> <span className="font-bold">más participación</span> en eventos escolares.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <Users className="w-16 h-16 text-blue-700 mb-2" />
                <p><span className="font-bold text-xl">100%</span> <span className="font-bold">de la comunidad informada</span> con un solo clic.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <Calendar className="w-16 h-16 text-blue-700 mb-2" />
                <p><span className="font-bold text-xl">+50</span> <span className="font-bold">eventos recordados</span> automáticamente cada ciclo.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <MessageSquare className="w-16 h-16 text-blue-700 mb-2" />
                <p><span className="font-bold text-xl">70%</span> <span className="font-bold">menos papel</span> gracias a la digitalización de avisos.</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
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
              <div key={i} className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
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
                src="/imgs-A/educacioncasa.jpg"
                alt="Beneficios Notificaciones"
                width={400}
                height={300}
                className="w-full max-w-md h-auto rounded-lg shadow-xl"
              />
            </div>
            {/* Texto a la derecha */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Beneficios para los padres</h2>
              <ul className="grid grid-cols-1 gap-2 text-gray-800 text-base">
                <li>✔ Información inmediata sobre avisos y eventos escolares</li>
                <li>✔ Recordatorios automáticos de pagos y actividades</li>
                <li>✔ Comunicación directa de la escuela hacia los padres</li>
                <li>✔ Reducción de papel y trámites presenciales</li>
                <li>✔ Acceso desde cualquier dispositivo</li>
                <li>✔ Seguridad y privacidad de la información</li>
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
                  <AccordionTrigger className="text-xl">¿Los padres pueden responder los avisos?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-lg text-balance">
                    No, el módulo está diseñado solo para que los padres reciban notificaciones y avisos de la escuela. No pueden enviar mensajes desde la plataforma.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl">¿Por qué es útil este módulo para los padres?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-lg text-balance">
                    Porque garantiza que los padres estén informados de todo lo importante: avisos, eventos, recordatorios y pagos, sin depender de papel o llamadas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl">¿Qué tipo de avisos recibirán los padres?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-lg text-balance">
                    Recibirán avisos de eventos, recordatorios de pagos, actividades escolares, juntas, circulares y cualquier información relevante enviada por la escuela.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <SchoolFooter />
    </>
  )
}
