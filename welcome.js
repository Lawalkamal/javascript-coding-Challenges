let user ;
document.querySelector('#changeMessageBtn').addEventListener('click', function(){
   user = prompt("What is your name")
   document.querySelector('.span').textContent = user;
})

