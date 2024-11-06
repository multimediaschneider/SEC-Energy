// schemas/services.ts

import { defineType, defineField } from "sanity";

export const servicesPage = defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title (SEO)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description (SEO)",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Service Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "shortTitle",
              type: "string",
              title: "Navigation Title",
              description: "Short title for navigation buttons",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              type: "string",
              title: "Full Title",
              description: "Complete title for content area",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              type: "text",
              title: "Category Description",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "areas",
              type: "array",
              title: "Service Areas",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      type: "string",
                      title: "Area Title",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "description",
                      type: "text",
                      title: "Area Description",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "icon",
                      type: "string",
                      title: "Icon",
                      options: {
                        list: [
                          { title: "Building", value: "building" },
                          { title: "Wrench", value: "wrench" },
                          { title: "Lightbulb", value: "lightbulb" },
                          { title: "File", value: "file" },
                          { title: "Bot", value: "bot" },
                          { title: "Scale", value: "scale" },
                          { title: "Leaf", value: "leaf" },
                          { title: "Network", value: "network" },
                        ],
                      },
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "bulletPoints",
                      type: "array",
                      title: "Bullet Points",
                      of: [{ type: "string" }],
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required().min(1),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
