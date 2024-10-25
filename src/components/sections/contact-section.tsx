import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-emerald-700 bg-opacity-20 shadow-lg shadow-zinc-400">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-emerald-700">
          Kontakt
        </CardTitle>
        <CardDescription className="text-xl font-light text-emerald-700">
          SEC Consulting GmbH
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-emerald-700">
          <p>Dipl.-Ing. Dierk Schneider</p>
          <p>Anschrift: Schierholzstraße 25, 30655 Hannover</p>
          <p>Tel.: 0511 2701 2975</p>
          <p>Mobil: 0176 55 90 2341</p>
          <p>E-Mail: Dierk.Schneider@sec-energy.de</p>
        </div>
        <ContactForm />
      </CardContent>
    </Card>
  );
}
