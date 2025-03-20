// components/ui/container.tsx
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-4/5 mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
