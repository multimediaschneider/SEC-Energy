import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "text",
    }),
    defineField({
      name: "academicBackground",
      title: "Academic Background",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "industryExperience",
      title: "Industry Experience",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "publications",
      title: "Publications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "publisher", title: "Publisher", type: "string" },
            { name: "year", title: "Year", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "lectures",
      title: "Lectures",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "institution", title: "Institution", type: "string" },
            { name: "date", title: "Date", type: "string" },
            { name: "topic", title: "Topic", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "trustBadges",
      title: "Trust Badges",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon Name", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "string" },
          ],
        },
      ],
    }),
  ],
});
