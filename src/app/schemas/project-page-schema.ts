import { defineType, defineField } from "sanity";

export const projectsPage = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "BHKW", value: "bhkw" },
          { title: "Heizung", value: "heating" },
          { title: "Erneuerbare", value: "renewable" },
          { title: "Studien", value: "study" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Abgeschlossen", value: "completed" },
          { title: "In Bearbeitung", value: "ongoing" },
          { title: "Geplant", value: "planned" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "object",
      fields: [
        {
          name: "street",
          title: "Street",
          type: "string",
        },
        {
          name: "city",
          title: "City",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "coordinates",
          title: "Coordinates",
          type: "object",
          fields: [
            {
              name: "lat",
              title: "Latitude",
              type: "number",
            },
            {
              name: "lng",
              title: "Longitude",
              type: "number",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technicalData",
      title: "Technical Data",
      type: "object",
      fields: [
        {
          name: "type",
          title: "Type",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "powerOutput",
          title: "Power Output",
          type: "string",
        },
        {
          name: "heatOutput",
          title: "Heat Output",
          type: "string",
        },
        {
          name: "additionalMetrics",
          title: "Additional Metrics",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "value",
                  title: "Value",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "scope",
      title: "Scope",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "specialFeatures",
      title: "Special Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
