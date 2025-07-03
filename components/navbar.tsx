'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-700 text-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Control Escolar</h1>

        {/* Desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem className='text-white  p-1.75 px-4 rounded-lg hover:bg-gray-600'><Link href="/">Inicio</Link></NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white p-4 hover:bg-gray-600">
                    Quien lo usa?
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-700 text-white p-4">
                        <ul className="grid gap-2 min-w-[200px]">
                            <li> <Link href="/directores" className='p-1 px-2 rounded hover:bg-gray-600'>Dueños y Directores</Link></li>
                            <Link href="/maestro" className='p-1 px-2 rounded hover:bg-gray-600'>Profesores y Educadores</Link>
                            <li><Link href="#modulo3" className='p-1 px-2 rounded hover:bg-gray-600'>Padres y Alumnos</Link></li>
                        </ul>
                    </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white p-4 hover:bg-gray-600">
                    Módulos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-700 text-white p-4">
                        <ul className="grid gap-2 min-w-[200px]">
                            <li><Link href="/modulos/academico" className='p-1 px-2 rounded hover:bg-gray-600'>Módulo Académico</Link></li>
                            <li><Link href="/modulos/comunicacion" className='p-1 px-2 rounded hover:bg-gray-600'>Módulo Notificaciones</Link></li>
                            <li><Link href="/modulos/financiero" className='p-1 px-2 rounded hover:bg-gray-600'>Módulo Financiero</Link></li>
                        </ul>
                    </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className='text-white p-1.75 px-4 rounded-lg hover:bg-gray-600'><Link href="#contacto">Contacto</Link></NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden"><Menu /></button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-10">
              <Link href="#inicio">Inicio</Link>
              <Link href="#funciones">Funciones</Link>
              <Link href="#precios">Precios</Link>
              <Link href="#contacto">Contacto</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
