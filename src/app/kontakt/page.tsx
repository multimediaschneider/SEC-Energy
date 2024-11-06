"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { client } from "@/sanity/client";

interface ContactDetails {
  label: string;
  value: string;
}

interface ContactData {
  title: string;
  companyName: string;
  contactPerson: {
    name: string;
    details: ContactDetails[];
  };
}

const fallbackData: ContactData = {
  title: "Kontakt",
  companyName: "SEC Consulting GmbH",
  contactPerson: {
    name: "Dipl.-Ing. Dierk Schneider",
    details: [
      {
        label: "Anschrift",
        value: "Schierholzstraße 25, 30655 Hannover",
      },
      {
        label: "Tel.",
        value: "0511 2701 2975",
      },
      {
        label: "Mobil",
        value: "0176 55 90 2341",
      },
      {
        label: "E-Mail",
        value: "Dierk.Schneider@sec-energy.de",
      },
    ],
  },
};

export default function ContactPage() {
  const [contactData, setContactData] = useState<ContactData | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const query = `*[_type == "contact"][0]{
          title,
          companyName,
          contactPerson{
            name,
            details[]{
              label,
              value
            }
          }
        }`;
        const data = await client.fetch<ContactData>(query);
        setContactData(data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setContactData(fallbackData);
      }
    };

    fetchContactData();
  }, []);

  const data = contactData || fallbackData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-emerald-700">{data.companyName}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 lg:p-12"
              >
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl font-bold text-emerald-700">
                    {data.contactPerson.name}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 mt-2">
                    Ihr Ansprechpartner für nachhaltige Energielösungen
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {data.contactPerson.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col"
                    >
                      <span className="text-sm font-medium text-gray-500">
                        {detail.label}
                      </span>
                      <span className="text-base text-gray-900">
                        {detail.value}
                      </span>
                    </motion.div>
                  ))}
                </CardContent>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-emerald-700 bg-opacity-5 p-6 md:p-8 lg:p-12 rounded-r-lg border-l border-emerald-700 border-opacity-20"
              >
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
