import { client } from "../contentful";
import { Entry } from "contentful";

interface EntryArray {
  items: Entry[],
}

export default async function fetchEntries() {
  try {
    const entries: EntryArray = await client.getEntries({
      content_type: 'recipes',
      select: ['fields']
    });
    return entries.items
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch entries from Contentful')
  }
}
