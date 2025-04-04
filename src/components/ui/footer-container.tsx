import { cn } from "@/lib/utils";

interface FooterContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Footer container component with full-width layout
 */
export default function FooterContainer({
  children,
  className,
  ...props
}: FooterContainerProps) {
  return (
    <div
      className={cn("max-w-full mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
