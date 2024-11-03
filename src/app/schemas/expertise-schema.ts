import { defineField, defineType } from "sanity";

export const expertise = defineType({
  name: "expertise",
  title: "Expertise Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),
    defineField({
      name: "expertiseAreas",
      title: "Expertise Areas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon Name",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
            defineField({
              name: "stats",
              title: "Statistics",
              type: "string",
            }),
            defineField({
              name: "highlightColor",
              title: "Highlight Color",
              type: "string",
              options: {
                list: [
                  { title: "Emerald", value: "emerald" },
                  { title: "Blue", value: "blue" },
                  { title: "Purple", value: "purple" },
                  { title: "Green", value: "green" },
                ],
              },
            }),
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
            defineField({
              name: "icon",
              title: "Icon Name",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
