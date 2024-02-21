import { client } from "../contentful";

export default async function fetchEntries() {
  try {
    const entries = await client.getEntries({
      content_type: 'recipes'
    });
    console.log(entries.items)
    return entries.items
  } catch (error) {
    console.log(error);
  }
}
