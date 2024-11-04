import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import { Button } from "@/components/ui/button";
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
  company: z.string().optional(),
  email: z
    .string()
    .email({
      message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    })
    .optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
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
          description:
            "Vielen Dank für Ihre Nachricht. Wir werden uns zeitnah bei Ihnen melden.",
        });
        form.reset();
      } else {
        throw new Error(data.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Fehler",
        description:
          "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-700">
            Benötigen Sie weitere Informationen?
          </h2>
          <p className="text-gray-600">
            Gerne klären wir in einem persönlichen Gespräch Ihr Anliegen oder
            übermitteln Ihnen weitere Informationen.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Persönliche Angaben</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Vorname"
                      {...field}
                      className="w-full text-base"
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
                  <FormControl>
                    <Input
                      placeholder="Nachname"
                      {...field}
                      className="w-full text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Firma (optional)"
                    {...field}
                    className="w-full text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">
            Wie dürfen wir Sie kontaktieren?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="E-Mail-Adresse (optional)"
                      type="email"
                      {...field}
                      className="w-full text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Telefonnummer (optional)"
                      type="tel"
                      {...field}
                      className="w-full text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">
            Teilen Sie uns Ihr Anliegen mit.
          </h3>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Ihr Anliegen (optional)"
                    {...field}
                    className="w-full text-base min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-700 text-white hover:bg-emerald-600"
        >
          {isSubmitting ? "Wird gesendet..." : "Absenden"}
        </Button> */}
      </form>
    </Form>
  );
}
