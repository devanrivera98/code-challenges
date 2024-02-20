import { FormEvent } from "react";
import { useRef } from "react";


interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export function SHoppingListForm({onAddItem} : ShoppingListFormProps) {

  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    const newProduct = inputRef.current!.value
    const quantity = parseInt(inputRef2.current!.value)
    onAddItem(newProduct, quantity);
    inputRef.current!.value = '';
    inputRef2.current!.value = '1';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder="product name" ref={inputRef} />
      <input type='number' min={0} ref={inputRef2} />
      <button type="submit">Add items</button>
    </form>
  )
}
