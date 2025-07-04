"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  grade?: string;
  image: string;
  content: string;
  rating: number;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => goToSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  const goToNext = () => goToSlide((currentIndex + 1) % testimonials.length);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ));

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dice nuestra comunidad</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce las experiencias de padres, estudiantes y exalumnos que forman parte de nuestra gran familia educativa
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={100}
                      height={100}
                      className="rounded-full border-4 border-blue-200"
                    />
                    <Quote className="absolute -top-2 -right-2 h-8 w-8 text-blue-500 bg-white rounded-full p-1 shadow-lg" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{testimonials[currentIndex].name}</h4>
                    <p className="text-blue-600 font-medium">{testimonials[currentIndex].role}</p>
                    {testimonials[currentIndex].grade && (
                      <p className="text-gray-500 text-sm mt-1">{testimonials[currentIndex].grade}</p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 hover:bg-blue-50 hover:border-blue-300"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 hover:bg-blue-50 hover:border-blue-300"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-600 hover:text-blue-600"
          >
            {isAutoPlaying ? "Pausar" : "Reproducir"} presentación automática
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
