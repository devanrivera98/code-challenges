const btn = document.getElementById('btn')!;
console.log(btn)

btn?.addEventListener('click', function() {
  alert('CLICKED')
})
