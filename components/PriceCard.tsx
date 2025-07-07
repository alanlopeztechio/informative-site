import { Check, LucideIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export type PriceCardProps = {
  title: string;
  isPopular: boolean;
  description: string;
  functions: string[];
  icon: LucideIcon;
};

export default function PriceCard({
  title,
  isPopular,
  description,
  functions,
  icon: Icon,
}: PriceCardProps) {
  return (
    <Card
      className={`relative ${
        isPopular ? "border-cyan-500 shadow-lg scale-105" : ""
      }`}
    >
      {isPopular ? (
        <Badge className="absolute bg-cyan-500 -top-3 left-1/2 transform -translate-x-1/2">
          Mas polular
        </Badge>
      ) : null}

      <CardHeader className="text-center space-y-4">
        <div className="mx-auto rounded-full bg-[#F3F4FA] mb-4 p-3 rounded-full w-fit">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {functions.map((funcion, index) => (
          <div key={index} className="flex items-center gap-3 pb-2">
            <Check className="w-4 h-4 text-green-500 flex-shrink-0 " />

            <span className="text-sm">{funcion}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          Empezar
        </Button>
      </CardFooter>
    </Card>
  );
}
