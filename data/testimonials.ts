
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  grade?: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    role: "Madre de familia",
    grade: "Estudiante de 5° grado",
    image: "/assets/padres/lucia.jpg",
    content:
      " ha sido fundamental en el desarrollo académico y personal de mi hija. Los maestros son excepcionales y el ambiente es muy acogedor. Estamos muy satisfechos",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "padre de familia",
    grade: "madre de 1ro de primaria",
    image: "/assets/padres/carlos.jpg",
    content:
      " Los valores y conocimientos que se inculcaron siguen siendo la guía.",
    rating: 3,
  },
  {
    id: 3,
    name: "Ana Sofía Ruiz",
    role: "Estudiante",
    grade: "3° de Secundaria",
    image: "/assets/padres/lucia.jpg",
    content:
      "Me encanta.  He hecho grandes amigos y cada día aprendo algo nuevo. ¡Estoy muy orgullosa de ser parte de esta comunidad!",
    rating: 5,
  },
  {
    id: 4,
    name: "Roberto Silva",
    role: "Padre de familia",
    grade: "Gemelos en 2° grado",
    image: "/assets/padres/pablo.jpg",
    content:
      "Elegimos esto por su reputación académica y no nos hemos arrepentido.",
    rating: 5,
  },
  {
    id: 5,
    name: "Dra. Patricia López",
    role: "Madre de familia",
    grade: "1ro de primaria",
    image: "/assets/padres/lucia.jpg",
    content:
      "Como profesional , valoro mucho la educación de calidad.Altamente recomendado.",
    rating: 5,
  },
];
