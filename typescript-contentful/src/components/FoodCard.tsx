import fetchEntries from "../utils/fetchEntries"
import { useState, useEffect } from "react";
import { Entry } from "contentful";

export default function FoodCard() {
  let [recipes, setRecipes] = useState<Entry[]>();

  useEffect(() => {
    const getRecipeEntries = async () => {
      try {
        const entries = await fetchEntries();
        console.log(entries)
        setRecipes(entries);
      } catch (error) {
        console.error(error)
      }
    }
    getRecipeEntries()
  }, [])

  console.log(recipes)

  const recipeMap = recipes?.map((recipe : any) => {
    return (
    <div key={recipe.sys.id}>
      <h1>{recipe.fields.name}</h1>
      <img src={recipe.fields.featuredimage.fields.file.url}></img>
      <p>{recipe.fields.description}</p>
    </div>
    )
  })

  return (
    <>
    <div>
      {recipeMap}
    </div>
    </>
  )
}
