import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function SchoolFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-bold">Website</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Apoyando a una mejor educacion desde 2023
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400 hover:bg-slate-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400 hover:bg-slate-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400 hover:bg-slate-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400 hover:bg-slate-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              <Link href="/admisiones" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Admisiones
              </Link>
              <Link href="/calendario" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Calendario Académico
              </Link>
              <Link href="/noticias" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Noticias y Eventos
              </Link>
              <Link href="/galeria" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Galería
              </Link>
              <Link href="/contacto" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Academic Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Servicios Académicos</h4>
            <nav className="space-y-2">
              <Link
                href="/plataforma-virtual"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Plataforma Virtual
              </Link>
              <Link href="/biblioteca" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Biblioteca Digital
              </Link>
              <Link href="/calificaciones" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Portal de Calificaciones
              </Link>
              <Link href="/actividades" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Actividades Extracurriculares
              </Link>
              <Link href="/orientacion" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Orientación Vocacional
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Información de Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Av. Tecnologico </p>
                  <p>Col. Centro, CP 34000</p>
                  <p> Durango Dgo</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>(55) 1234-5678</p>
                  <p>(55) 8765-4321</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>info@ejemplo.edu.mx</p>
                  <p>ejemplo@hotmail.edu.mx</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Lunes a Viernes</p>
                  <p>9:00 AM - 6:00 PM</p>
                  <p>Sábados: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Website Escolar. Todos los derechos reservados.</p>
            
          </div>

          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
            <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors">
              Términos de Uso
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/accesibilidad" className="text-gray-400 hover:text-white transition-colors">
              Accesibilidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
