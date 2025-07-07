import Navbar from "@/components/navbar";
import PriceCard, { PriceCardProps } from "@/components/PriceCard";
import SchoolFooter from "@/components/school-footer";
import { Building2, School, Users } from "lucide-react";

export default function PricingPage() {
  const pricingPlans: PriceCardProps[] = [
    {
      title: "Básico",
      isPopular: false,
      description: "Ideal para escuelas pequeñas o en crecimiento.",
      functions: [
        "Gestión de estudiantes",
        "Horarios básicos",
        "Reportes limitados",
        "1 administrador",
      ],
      icon: School,
    },
    {
      title: "Profesional",
      isPopular: true,
      description: "Perfecto para escuelas con operaciones establecidas.",
      functions: [
        "Gestión completa de estudiantes y profesores",
        "Control de pagos y colegiaturas",
        "Notificaciones por correo",
        "3 administradores",
      ],
      icon: Users,
    },
    {
      title: "Institucional",
      isPopular: false,
      description: "Para grupos escolares grandes o instituciones educativas.",
      functions: [
        "Multi-campus",
        "Integración con sistemas externos",
        "Soporte dedicado",
        "Administradores ilimitados",
      ],
      icon: Building2,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container py-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-center">
            Precios
          </h1>
          <p className="text-xl text-center">
            Escoge el plan perfecto a tus necesidades. Siempre sabes que vas a
            pagar
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((item, index) => (
            <PriceCard key={index} {...item} />
          ))}
        </div>
      </div>
      <SchoolFooter />
    </>
  );
}
