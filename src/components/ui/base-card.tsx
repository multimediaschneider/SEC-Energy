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
    >
      <Card className="flex flex-col bg-emerald-50 shadow-lg w-full h-full min-h-[250px]">
        <CardHeader className="flex h-24 relative pb-0 ">
          <div className="absolute top-0 left-0">
            <div className="relative -top-4 -left-4 bg-emerald-400 bg-opacity-20 p-2 rounded-full">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            </div>
          </div>
          <h3 className="text-xl flex-col text-p text-emerald-700 font-semibold mt-8 pb-2 border-b border-gray-300">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-gray-700 sm:text-md font-semibold mb-4 ">
            {description}
          </p>
          <div className="flex-1">{children}</div>
        </CardContent>
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
      <ul className="space-y-2">
        {highlights.map((highlight, i) => (
          <li key={i} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-4" />
            {highlight}
          </li>
        ))}
      </ul>
    </BaseCard>
  );
}
