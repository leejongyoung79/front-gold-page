import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { type Service } from "@shared/schema";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically load icon
  const IconComponent = (LucideIcons[service.icon as keyof typeof LucideIcons] || LucideIcons.Box) as LucideIcon;

  return (
    <Card className="h-full border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group bg-card">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
