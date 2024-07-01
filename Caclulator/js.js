const calc = document.querySelectorAll('.calculator')
const ops = document.querySelectorAll('.operators')
const dot = document.querySelector("#dot")
const AC = document.querySelector('#AC')
const del = document.querySelector('#del')
const Input = document.querySelector('#inputBox')
const numBtns  = document.querySelectorAll("#num")

ops.forEach(op => {
   op.addEventListener('click', function(){
      Input.value += op.textContent
   });
});
dot.addEventListener('click', function(){
   if(Input.value.includes(".")){
      return;
   } 
   else{
      Input.value += dot.textContent 
   }
})

AC.addEventListener('click', function(){
   Input.value = "";
})

del.addEventListener('click', function(){
   Input.value = Input.value.slice(0, -1);
})


numBtns.forEach(numBtn => {
   numBtn.addEventListener('click', function(){
      Input.value += parseInt(numBtn.textContent)
   })
})