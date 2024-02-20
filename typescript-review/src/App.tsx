import './App.css'
import { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import { SHoppingListForm } from './components/ShoppingListForm'
import Item from './models/item'
import {v4 as getId} from "uuid";

function App() {


  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity:number) => {
    console.log(product)
    setItems([...items, {id:getId(), product, quantity}])
  }

  // const items = [
  //   { id: 1, product: 'Lemon', quantity: 3 },
  //   { id: 2, product: 'Chicken Breast', quantity: 2 }
  // ]


  return (
    <>
      <ShoppingList items={items}/>
      <SHoppingListForm onAddItem={addItem}/>
    </>
  )
}

export default App
