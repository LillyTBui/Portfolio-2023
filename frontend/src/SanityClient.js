import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: process.env.REACT_APP_PROJECT_ID || "default",
  dataset: process.env.REACT_APP_DATASET || "default",
  apiVersion: "2025-02-11",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source).url();
}

export default client;
