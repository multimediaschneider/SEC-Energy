import { cn } from "@/lib/utils";

interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function GridLayout({ children, className }: GridLayoutProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-8 lg:gap-12", className)}>
      {children}
    </div>
  );
}
