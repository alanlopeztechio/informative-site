import React from "react";
import { LucideIcon } from "lucide-react";


interface FeatureCardProps {
  icon?: LucideIcon;       // Componente de ícono opcional
  emoji?: string;          // Emoji alternativo si no hay ícono
  title: string;
  description?: string;
  points: string[];
}
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, emoji, title, description, points }) => {
  return (
 <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md flex flex-col md:flex-row gap-4 items-start">

  <div className="text-3xl text-teal-600">
    {Icon ? <Icon size={36} /> : <span>{emoji}</span>}
  </div>

  <div>
    <h3 className="text-xl font-bold text-teal-600 mb-2">{title}</h3>
    {description && <p className="text-base mb-2 text-gray-700">{description}</p>}
    
    <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
      {points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
</div>

  );
};

export default FeatureCard;
