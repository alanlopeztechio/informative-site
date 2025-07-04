import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type CardUserProps = {
  src: string;
  name: string;
  description: string;
};

export default function CardUser({ src, name, description }: CardUserProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="w-48 h-48 rounded-full overflow-hidden relative">
          <Image src={src} alt="Company story" fill className="object-cover" />
        </div>
      </div>

      <CardContent>
        <h1 className="text-xl font-semibold mb-1">{name}</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
