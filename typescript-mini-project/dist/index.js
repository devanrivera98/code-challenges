"use strict";
const btn = document.getElementById('btn');
console.log(btn);
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    alert('CLICKED');
});
