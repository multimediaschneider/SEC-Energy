// hooks/use-toast.ts
import { useState, useEffect, useCallback } from "react";

type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback(
    ({
      title,
      description,
      action,
      variant = "default",
    }: Omit<ToastProps, "id">) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prevToasts) => [
        ...prevToasts,
        { id, title, description, action, variant },
      ]);
      return id;
    },
    []
  );

  const dismissToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        dismissToast(toasts[0].id);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [toasts, dismissToast]);

  return { toast, toasts, dismissToast };
};
