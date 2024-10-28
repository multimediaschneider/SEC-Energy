// schemas/infoSection.ts
export default {
  name: "infoSection",
  title: "Info Sektion",
  type: "document",
  fields: [
    {
      name: "mainContent",
      title: "Haupttext",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
      description: "Der zentrale Text der Info-Sektion",
    },
    {
      name: "leftContents",
      title: "Linke Spalte - Aufzählungspunkte",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required(),
      description: "Liste der Punkte in der linken Spalte",
    },
    {
      name: "rightContents",
      title: "Rechte Spalte - Text",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule: any) => Rule.required(),
      description: "Text in der rechten Spalte",
    },
  ],
};
