import { defineField, defineType } from "sanity";

export const competenceField = defineType({
  name: "competenceField",
  title: "Competence Fields",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Technical Expertise", value: "technical" },
          { title: "Economic Consulting", value: "economic" },
          { title: "Legal Expertise", value: "legal" },
          { title: "Project Management", value: "project" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Name of the Lucide icon to use",
    }),
    defineField({
      name: "highlights",
      title: "Key Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});
