import { defineType, defineField } from "sanity";

export const projectSection = defineType({
  name: "projectSection",
  title: "Project Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "object",
      fields: [
        {
          name: "companyName",
          title: "Company Name",
          type: "string",
        },
        {
          name: "text",
          title: "Introduction Text",
          type: "text",
        },
      ],
    }),
    defineField({
      name: "currentProjects",
      title: "Current Projects",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "projects",
          title: "Projects List",
          type: "array",
          of: [{ type: "reference", to: [{ type: "project" }] }],
        },
      ],
    }),
    defineField({
      name: "completedProjects",
      title: "Completed Projects",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "projects",
          title: "Projects List",
          type: "array",
          of: [{ type: "reference", to: [{ type: "project" }] }],
        },
      ],
    }),
  ],
});
