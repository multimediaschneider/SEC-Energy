import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardContent } from "./card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "outline" | "ghost";
}

export function BaseCard({
  icon: Icon,
  title,
  description,
  index,
  children,
  className,
  variant = "default",
}: BaseCardProps) {
  // Style variants
  const variants = {
    default: {
      card: "bg-white",
      icon: "text-primary-600",
      title: "text-primary-700",
      description: "text-gray-700",
    },
    primary: {
      card: "bg-primary-50",
      icon: "text-primary-600",
      title: "text-primary-700",
      description: "text-primary-900/70",
    },
    outline: {
      card: "bg-white border-2 border-primary-100",
      icon: "text-primary-600",
      title: "text-primary-700",
      description: "text-gray-700",
    },
    ghost: {
      card: "bg-transparent",
      icon: "text-primary-600",
      title: "text-primary-700",
      description: "text-gray-700",
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card
        className={cn(
          "flex flex-col w-full h-full shadow-sm",
          selectedVariant.card,
          className
        )}
      >
        <CardHeader className="space-y-2 pb-4 relative">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <Icon className={cn("w-6 h-6", selectedVariant.icon)} />
          </div>

          <div className="space-y-2 pb-3">
            <h3
              className={cn(
                "text-lg font-semibold pb-2 border-b border-gray-200",
                selectedVariant.title
              )}
            >
              {title}
            </h3>
            <p className={cn("text-base", selectedVariant.description)}>
              {description}
            </p>
          </div>
        </CardHeader>
        <CardContent className="flex-1">{children}</CardContent>
      </Card>
    </motion.div>
  );
}

export function ServiceCard({
  icon,
  title,
  description,
  index,
  children,
  className,
  variant = "default",
}: BaseCardProps) {
  return (
    <BaseCard
      icon={icon}
      title={title}
      description={description}
      index={index}
      className={className}
      variant={variant}
    >
      {children}
    </BaseCard>
  );
}

interface ExpertiseCardProps extends Omit<BaseCardProps, "children"> {
  highlights: string[];
}

export function ExpertiseCard({ highlights, ...props }: ExpertiseCardProps) {
  return (
    <BaseCard {...props}>
      <ul className="space-y-2">
        {highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-700">
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0" />
            <span className="flex-1">{highlight}</span>
          </li>
        ))}
      </ul>
    </BaseCard>
  );
}
