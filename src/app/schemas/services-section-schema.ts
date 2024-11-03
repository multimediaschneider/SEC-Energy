import { defineField, defineType } from "sanity";

export const services = defineType({
  name: "services",
  title: "Services Section",
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
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon Name", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "features",
              title: "Service Features",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", title: "Feature Title", type: "string" },
                    {
                      name: "description",
                      title: "Feature Description",
                      type: "text",
                    },
                    {
                      name: "benefits",
                      title: "Benefits",
                      type: "array",
                      of: [{ type: "string" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
