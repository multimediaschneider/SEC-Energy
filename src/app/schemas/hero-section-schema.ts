// schemas/hero.ts
import { defineType, defineField } from "sanity";
import { MdHome } from "react-icons/md";

export const heroSection = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: MdHome,
  fields: [
    defineField({
      name: "title",
      title: "Hauptüberschrift",
      type: "string",
      description:
        "Die Hauptüberschrift der Hero-Section (z.B. SEC Consulting GmbH)",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "subtitle",
      title: "Untertitel",
      type: "string",
      description: "Der Untertitel unter der Hauptüberschrift",
      validation: (Rule) => Rule.required().min(5).max(200),
    }),
    defineField({
      name: "images",
      title: "Slider Bilder",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Beschreibender Text für das Bild (wichtig für SEO)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Bildunterschrift",
              type: "string",
            }),
          ],
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: "benefits",
      title: "Vorteile",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Titel",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Beschreibung",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Shield", value: "shield" },
                  { title: "Leaf", value: "leaf" },
                  { title: "Calculator", value: "calculator" },
                  { title: "Clock", value: "clock" },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(4),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});
