// Componente funcional que recibe un arreglo de funciones con texto e ícono
export default function FuncionesDocentes({ funciones }) {
  return (
    // Lista con diseño grid responsivo: 1 columna en móvil, 2 en pantallas md+
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-base">
      
      {/* Iteramos sobre cada objeto con texto e ícono */}
      {funciones.map(({ texto, icono }, i) => (
        <li key={i} className="flex items-start gap-4">
          {/* Ícono con tamaño fijo y alineación */}
          <span className="min-w-[36px] h-9 flex items-center justify-center">
            {icono}
          </span>
          
          {/* Texto alineado a la derecha del ícono */}
          <span className="leading-snug">{texto}</span>
        </li>
      ))}
    </ul>
  );
}
