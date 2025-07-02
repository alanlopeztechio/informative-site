// components/FuncionesDocentes.jsx
export default function FuncionesDocentes({ funciones }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg">
      {funciones.map((funcion, i) => (
        <li key={i} className="flex items-start gap-2">
           <span>{funcion}</span>
        </li>
      ))}
    </ul>
  );
}
