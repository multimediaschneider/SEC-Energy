"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Vorname muss mindestens 2 Zeichen lang sein.",
  }),
  lastName: z.string().min(2, {
    message: "Nachname muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  message: z.string().min(10, {
    message: "Nachricht muss mindestens 10 Zeichen lang sein.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          to: "schneider-sven@posteo.de",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Nachricht gesendet",
          description: `${data.message} (Message ID: ${data.messageId})`,
        });
        form.reset();
      } else {
        throw new Error(data.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Fehler",
        description: `Es gab ein Problem beim Senden Ihrer Nachricht: ${
          error instanceof Error ? error.message : "Unbekannter Fehler"
        }. Bitte versuchen Sie es später erneut.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-emerald-700 font-semibold text-lg"></FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ihr Vorname"
                    {...field}
                    className="w-full text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-emerald-700 font-semibold text-lg"></FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ihr Nachname"
                    {...field}
                    className="w-full text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-emerald-700 font-semibold text-lg"></FormLabel>
              <FormControl>
                <Input
                  placeholder="Ihre E-Mail Adresse"
                  {...field}
                  className="w-full text-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-emerald-700 font-semibold text-lg"></FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ihre Nachricht..."
                  {...field}
                  className="w-full text-xl min-h-[150px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-700 text-lg hover:bg-emerald-600"
        >
          {isSubmitting ? "Wird gesendet..." : "Absenden"}
        </Button>
      </form>
    </Form>
  );
}
