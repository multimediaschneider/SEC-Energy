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
        {
          name: "text",
          title: "Text",
          type: "object",
          fields: [
            { name: "companyName", title: "Company Name", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
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
    defineField({
      name: "button",
      title: "Button",
      type: "object",
      fields: [{ name: "text", title: "Button Text", type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "companyInfo.heading",
      subtitle: "management.heading",
    },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return {
        title: title || "About Section",
        subtitle: subtitle || "Management",
      };
    },
  },
});
