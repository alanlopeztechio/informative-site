import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export default function Component() {
  const images = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Imagen  1",
      title: "Paisaje Sereno",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Imagen  2",
      title: "Arquitectura Moderna",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Imagen 3",
      title: "Arte Contemporáneo",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Imagen  4",
      title: "Naturaleza Minimalista",
    },
  ]

  return (
   <div className="w-full max-w-3xl mx-auto px-6 py-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">

      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2"> Muestra</h2>
        <p className="text-blue-600 text-sm">Desliza para ver mas</p>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-medium text-lg drop-shadow-lg">{image.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-blue-200/80 hover:bg-blue-300/80 border-blue-300 text-blue-700 shadow-lg backdrop-blur-sm -left-4" />
        <CarouselNext className="bg-blue-200/80 hover:bg-blue-300/80 border-blue-300 text-blue-700 shadow-lg backdrop-blur-sm -right-4" />
      </Carousel>

      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-blue-300 opacity-50" />
        ))}
      </div>
    </div>
  )
}
