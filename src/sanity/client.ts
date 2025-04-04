// sanity/client.ts
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "v40323h2";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-28";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
