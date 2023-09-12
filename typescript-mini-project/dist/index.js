"use strict";
const btn = document.getElementById('btn');
// console.log(btn)
const input = document.getElementById('todoinput');
// (<HTMLInputElement>input).value
btn.addEventListener('click', function () {
    alert(input.value);
    input.value = "";
});
//hypothetical below for type assertion understanding
// const mystery: unknown = 'Hello World!!'
// const numChars = (mystery as string).length
// mystery
// hypothetical above
