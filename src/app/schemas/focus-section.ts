import { defineType, defineField, defineArrayMember } from "sanity";

export const focusSection = defineType({
  name: "focusSection",
  title: "Focus Section",
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
          name: "highlightedText",
          title: "Highlighted Text",
          type: "string",
          description: "Text that appears in bold at the start",
        },
        {
          name: "mainText",
          title: "Main Text",
          type: "text",
          description: "The main body of the introduction",
        },
      ],
    }),
    defineField({
      name: "focusAreas",
      title: "Focus Areas",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "title",
              title: "Area Title",
              type: "string",
            },
            {
              name: "items",
              title: "Area Items",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        }),
      ],
    }),
  ],
});
