import React, {useState} from 'react';
import './App.css';
import {v4 as getId} from 'uuid';
import ShoppingList from './components/ShoppingList';
import Item from './models/items';
import ShoppingListForm from './components/ShoppingItemForm';


// const func = <T,>(x: T): T => {
//   return x
// }

function App() {
  const [items, setItems] = useState<Item[]>([])
  const addItem = (product: string, quantity: number) => {
    console.log('Made it to the app.tsx')
    setItems([...items, {id: getId(), product, quantity}])
  }
  // const items = [
  //   { id: 1, product: 'lemon', quantity: 3 },
  //   { id: 2, product: 'chicekn', quantity: 2 }
  // ]
  return (
    <div >
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
