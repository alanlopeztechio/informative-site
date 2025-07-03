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
            <NavigationMenuItem><Link href="#inicio">Inicio</Link></NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white p-4 rounded shadow">
                    Quien lo usa?
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-transparent text-black p-4 rounded shadow">
                        <ul className="grid gap-2 min-w-[200px]">
                            <li><Link href="#modulo1" className='hover:underline'>Dueños y Directores</Link></li>
                            <Link href="/maestro">Profesores y Educadores</Link>
                            <li><Link href="#modulo3" className='hover:underline'>Padres y Alumnos</Link></li>
                        </ul>
                    </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white p-4 rounded shadow">
                    Módulos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-transparent text-black p-4 rounded shadow">
                        <ul className="grid gap-2 min-w-[200px]">
                            <li><Link href="#modulo1" className='hover:underline'>Módulo Académico</Link></li>
                            <li><Link href="#modulo2" className='hover:underline'>Módulo Comunicación</Link></li>
                            <li><Link href="#modulo3" className='hover:underline'>Módulo Financiero</Link></li>
                        </ul>
                    </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem><button className='bg-red-800 text-white py-2 px-4 rounded'>Solicitar Demo</button></NavigationMenuItem>
            <NavigationMenuItem><Link href="#contacto">Contacto</Link></NavigationMenuItem>
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
