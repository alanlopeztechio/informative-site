import CardUser from "@/components/CardUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import Navbar from "@/components/navbar";
import SchoolFooter from "@/components/school-footer";

export default function page() {
  const users = [
    {
      src: "/assets/images/f1.jpg",
      name: "Backend Developer",
      description: "Persona kawai con pensamientos kawais...",
    },
    {
      src: "/assets/images/f2.jpg",
      name: "UX Designer",
      description: "Creo experiencias hermosas para el usuario.",
    },
    {
      src: "/assets/images/f3.jpg",
      name: "Frontend Developer",
      description: "Me gusta el diseño y el estilo responsive 😎",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight">
                Simplificamos la Administracion Escolar
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos una empresa de tecnologia educativa que nacio con un
                propisito claro: ayudar a las escuelas a optimizar su gestion
                academica y administrativa, permitiendoles enfocarse en lo mas
                importante: la educacion de sus estudiantes
              </p>
              <Button size="lg" className="bg-cyan-500 px-10 font-bold">
                Comprar
              </Button>
            </div>
            <Image
              src="/assets/images/header.png"
              alt="Imagen Perrona"
              width={700}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F3F4FA] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/assets/images/2149305397.jpg"
                alt="Company story"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Mision</h2>
              <p className="tracking-normal">
                Brindar a las instituciones educativas una plataforma moderna,
                intuitiva y confiable que les permita digitalizar todos sus
                procesos administrativos y academicos con facilidad
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F4FA] pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Vision</h2>
              <p className="tracking-normal">
                Ser el sistema de gestion escolar mas confiabe de America
                Latina, contribuyendo a una educacion mas eficiente, organizada
                y accesible
              </p>
            </div>
            <div>
              <Image
                src="/assets/images/a3.jpg"
                alt="Company story"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conoce nuestro equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Las personas talentosas que hacen realidad nuestra vision
            </p>
          </div>
          <Carousel>
            <CarouselContent>
              {users.map((user, index) => (
                <CarouselItem key={index} className="basis-1/2">
                  <CardUser {...user} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="bg-[#F3F4FA] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Quieres conocer mas sobre nosotrso o probar nuestra plataforma?
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-4">
            <Card className="bg-white backdrop-blur border-white/20 space-y-6">
              <CardContent>
                <form action="submit" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-medium">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="border-2 border-[#F3F4FA]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">
                        Correo Electronico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        required
                        placeholder="John@google.com"
                        className="border-2 border-[#F3F4FA]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">
                      Dudas o comentarios *
                    </Label>
                    <Textarea
                      id="email"
                      name="email"
                      required
                      placeholder="John@google.com"
                      className="border-2 border-[#F3F4FA] resize-none"
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-[#F3F4FA] text-primary hover:bg-[#F3F4FA]/90 font-semibold">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <SchoolFooter />
    </>
  );
}
