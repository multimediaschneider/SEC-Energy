import { defineType, defineField, defineArrayMember } from "sanity";

interface ContentItem {
  heading: string;
  text: string;
  icon: string;
}

export const infoSection = defineType({
  name: "infoSection",
  title: "Info Section",
  type: "document",
  fields: [
    defineField({
      name: "mainContent",
      title: "Main Content",
      type: "string",
    }),
    defineField({
      name: "leftContents",
      title: "Left Content Block",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text" }),
            defineField({ name: "icon", title: "Icon", type: "string" }),
          ],
          preview: {
            select: {
              heading: "heading",
              text: "text",
            },
            prepare(selection: Partial<ContentItem>) {
              const { heading, text } = selection;
              return {
                title: heading || text || "No content",
                subtitle: heading && text ? text : undefined,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "rightContents",
      title: "Right Content Block",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text" }),
            defineField({ name: "icon", title: "Icon", type: "string" }),
          ],
          preview: {
            select: {
              heading: "heading",
              text: "text",
            },
            prepare(selection: Partial<ContentItem>) {
              const { heading, text } = selection;
              return {
                title: heading || text || "No content",
                subtitle: heading && text ? text : undefined,
              };
            },
          },
        }),
      ],
    }),
  ],
});
