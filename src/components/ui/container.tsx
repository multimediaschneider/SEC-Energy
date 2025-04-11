import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "sm" | "md" | "lg" | "xl" | "full";
}

/**
 * Container component for consistent page layout
 */
export default function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  // Container width variants
  const sizeClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    default: "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
