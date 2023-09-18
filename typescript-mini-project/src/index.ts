interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todolist')!;
const todos: Todo[] = readTodos();
todos.forEach(createTodo);


//load todos from local storage
function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos")
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

//save todos to local storage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));

}

form.addEventListener("submit", function(e) {
  e.preventDefault()
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo)
  todos.push(newTodo);

  saveTodos()
  input.value = '';
})

function createTodo(todo: Todo) {
  const newLi = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox"
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', function() {
    saveTodos()
})
  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
}

//if you want to create your submit function seperately it would look like
// function handleSubmit(e: SubmitEvent) {
//   e.preventDefault();
//   console.log('Submitted');
// }
// form.addEventListener('submit', handleSubmit)




//hypothetical below for type assertion understanding
// const mystery: unknown = 'Hello World!!'

// const numChars = (mystery as string).length
// mystery
// hypothetical above
