"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector('form');
const list = document.getElementById('todolist');
// (<HTMLInputElement>input).value
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submitted");
    const newTodoText = input.value;
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    newLi.append(newTodoText);
    newLi.append(checkbox);
    list.append(newLi);
    input.value = '';
});
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
