import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardContent } from "./card";
import { motion } from "framer-motion";

interface BaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  children?: React.ReactNode;
}

export function BaseCard({
  icon: Icon,
  title,
  description,
  index,
  children,
}: BaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="flex flex-col bg-emerald-50 shadow-lg w-full h-full">
        <CardHeader className="space-y-2 pb-4 relative">
          <div className="absolute top-0 left-0">
            <div className="relative -top-4 -left-4 bg-emerald-400 bg-opacity-20 p-2 rounded-full">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-600" />
            </div>
          </div>
          <div className="space-y-1.5 pb-3">
            <h3 className="text-lg font-extrabold text-emerald-700 pb-2 border-b border-gray-300">
              {title}
            </h3>
            <p className="text-lg text-emerald-900/70 pt-3">{description}</p>
          </div>
        </CardHeader>
        <CardContent className="pt-2 flex-1">{children}</CardContent>
      </Card>
    </motion.div>
  );
}

export function ServiceCard({
  icon,
  title,
  description,
  index,
}: Omit<BaseCardProps, "children">) {
  return (
    <BaseCard
      icon={icon}
      title={title}
      description={description}
      index={index}
    />
  );
}

interface ExpertiseCardProps extends Omit<BaseCardProps, "children"> {
  highlights: string[];
}

export function ExpertiseCard({ highlights, ...props }: ExpertiseCardProps) {
  return (
    <BaseCard {...props}>
      <ul className="space-y-3">
        {highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3 text-sm text-emerald-900/70">
            <span className="w-1 h-1  bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
            <span className="flex-1 text-lg">{highlight}</span>
          </li>
        ))}
      </ul>
    </BaseCard>
  );
}
