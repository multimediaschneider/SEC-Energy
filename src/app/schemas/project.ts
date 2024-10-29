import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document", // Changed from 'object' to 'document'
  fields: [
    defineField({
      name: "type",
      title: "Project Type",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),
    defineField({
      name: "details",
      title: "Project Details",
      type: "object",
      fields: [
        {
          name: "scope",
          title: "Scope",
          type: "text",
        },
        {
          name: "services",
          title: "Services",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "results",
          title: "Results",
          type: "text",
        },
        {
          name: "impact",
          title: "Impact",
          type: "text",
        },
      ],
    }),
  ],
});
