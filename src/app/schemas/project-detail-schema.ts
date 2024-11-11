// schemas/projects.ts

import { defineType, defineField } from "sanity";

export const projectsPage = defineType({
  name: "projects",
  title: "Projects",
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
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "_id",
              type: "string",
              title: "Project ID",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              type: "string",
              title: "Title",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "category",
              type: "string",
              title: "Category",
              options: {
                list: [
                  { title: "Contracting", value: "contracting" },
                  { title: "BHKW", value: "bhkw" },
                  { title: "Heating", value: "heating" },
                  { title: "Study", value: "study" },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "projectType",
              type: "string",
              title: "Project Type",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "status",
              type: "string",
              title: "Status",
              options: {
                list: [
                  { title: "Completed", value: "completed" },
                  { title: "Ongoing", value: "ongoing" },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "location",
              type: "object",
              title: "Location",
              fields: [
                {
                  name: "city",
                  type: "string",
                  title: "City",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "street",
                  type: "string",
                  title: "Street",
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              type: "text",
              title: "Full Description",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "shortDescription",
              type: "text",
              title: "Short Description",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "technicalData",
              type: "object",
              title: "Technical Data",
              fields: [
                {
                  name: "type",
                  type: "string",
                  title: "System Type",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "powerOutput",
                  type: "string",
                  title: "Power Output",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "additionalMetrics",
                  type: "array",
                  title: "Additional Metrics",
                  of: [
                    {
                      type: "object",
                      fields: [
                        {
                          name: "label",
                          type: "string",
                          title: "Metric Label",
                          validation: (Rule) => Rule.required(),
                        },
                        {
                          name: "value",
                          type: "string",
                          title: "Metric Value",
                          validation: (Rule) => Rule.required(),
                        },
                      ],
                    },
                  ],
                  validation: (Rule) => Rule.required(),
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "scope",
              type: "array",
              title: "Project Scope",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: "specialFeatures",
              type: "array",
              title: "Special Features",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: "results",
              type: "array",
              title: "Results",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: "images",
              type: "array",
              title: "Project Images",
              of: [{ type: "image" }],
              validation: (Rule) => Rule.required().min(1),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
