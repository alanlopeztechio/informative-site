// Componente funcional que recibe un arreglo de funciones con texto e ícono
export default function FuncionesDocentes({ funciones }) {
  return (
    // Contenedor de lista con diseño en grid: una columna en móvil y dos en pantallas medianas en adelante
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg py-20">
      
      {/* Iteramos sobre cada función */}
      {funciones.map(({ texto, icono }, i) => (
        
        // Cada <li> representa una función y tiene un ícono + texto
        <li key={i} className="flex items-start gap-3">
          
          {/* Renderiza el ícono recibido como prop */}
          {icono}
          
          {/* Renderiza el texto descriptivo de la función */}
          <span>{texto}</span>
        </li>
      ))}
    </ul>
  );
}
