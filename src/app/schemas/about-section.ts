import { defineType, defineField } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "companyInfo",
      title: "Company Information",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "companyName", title: "Company Name", type: "string" },
        { name: "text", title: "Description", type: "text" },
      ],
    }),
    defineField({
      name: "management",
      title: "Management",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "text" },
      ],
    }),
  ],
});
