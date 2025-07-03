// components/FuncionesDocentes.jsx

// Exporta el componente FuncionesDocentes como función por defecto
export default function FuncionesDocentes({ funciones }) {
  return (
    // Lista no ordenada con estilo de grid adaptable: una columna en móvil, dos en pantallas medianas en adelante
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg">
      {/* Itera sobre el arreglo de funciones y renderiza cada una como un <li> */}
      {funciones.map((funcion, i) => (
        // Cada elemento de la lista tiene una clave única (el índice) y estilos para alineación horizontal
        <li key={i} className="flex items-start gap-2">
          {/* Muestra el texto de la función */}
          <span>{funcion}</span>
        </li>
      ))}
    </ul>
  );
}
