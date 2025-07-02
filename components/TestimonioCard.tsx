
import React from "react";

interface TestimonialProps {
  name: string;
  role: string;
  school: string;
  message: string;
  imageUrl: string;
}

const TestimonioCard: React.FC<TestimonialProps> = ({
  name,
  role,
  school,
  message,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500">
      {/* Imagen */}
      <div className="md:w-1/2 flex justify-center items-center p-6">
        <img
          src={imageUrl}
          alt={`Foto de ${name}`}
          className="rounded-lg object-cover h-64 w-64"
        />
      </div>

      {/* Texto */}
      <div className="md:w-1/2 bg-pink-700 text-white p-8 flex flex-col justify-center">
        <p className="t99999ext-lg italic mb-4">“{message}”</p>
        <p className="font-semibold">
          {name}, {role}, {school}
        </p>
        <a href="#" className="mt-4 underline">
          Leer más
        </a>
      </div>
    </div>
  );
};

export default TestimonioCard;
