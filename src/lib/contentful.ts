import contentful from "contentful";
const { EntryFieldTypes } = contentful;

export interface BlogPost {
  contentTypeId: "blogPost",
  fields: {
    title: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText,
    date: EntryFieldTypes.Date,
    description: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    hero: EntryFieldTypes.AssetLink
  }
}

const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.DEV
  ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
  : import.meta.env.CONTENTFUL_DELIVERY_TOKEN;

export const hasContentfulCredentials = Boolean(space && accessToken);

const rawClient = hasContentfulCredentials
  ? contentful.createClient({
      space,
      accessToken,
      host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
    })
  : null;

export const contentfulClient = {
  async getEntries<T>(query: Record<string, unknown>) {
    if (!rawClient) {
      return { items: [] as T[] };
    }
    return rawClient.getEntries<T>(query);
  },
};
