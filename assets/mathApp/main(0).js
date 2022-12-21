var puntos = 0
const option = document.getElementById('t')
function ale(){
  let num = Math.ceil(Math.random()*(option.value))
  return num
}
option.addEventListener('change', function (){
  defIn()
})

  const input = document.getElementById("in")
  const input2 = document.getElementById("on")
  const boxn1 = document.getElementById("n1")
  const boxn2 = document.getElementById("n2")
  const res = document.getElementById("res")
  const spinner = document.getElementById("spi")
  const boxp = document.getElementById("punt")
  
 defIn()
 if(boxn1.innerHTML=="" && boxn2.innerHTML==""){
  defIn()
}
document.addEventListener("keydown", function(){
  
  if(event.key == "Enter"){
   ope = (parseInt(boxn1.innerHTML)) + (parseInt(boxn2.innerHTML))
   if(input.value==ope){
     res.innerHTML="👍"
     res.className="ani"
     
     spinner.className="spinner"
       setTimeout(function(){
       res.className=""
       spinner.className=""
     },1000)
     setTimeout(defIn,2000)
     
   }else{
     res.innerHTML="👎"
     res.className="ani"
     
  }
    
     setTimeout(function(){
       res.className=""
     },1000)
   }
  }
    
)
input.addEventListener("keyup",function(){
  input2.value=input.value
  
})
input.addEventListener("input",function(){
   if(this.value.length>option.value.length){
   this.value = this.value.slice(0,(option.value.length)+2)}
})
function defIn(){
  num1 = ale()
  num2 = ale()
  boxn1.innerHTML=num1
  boxn2.innerHTML=num2
  input.value=""
  input2.value=""
  res.className=""
}

function sumPu(){
  puntos = puntos + 10
  boxp.innerHTML=puntos
  return puntos
}
function a(){
  puntos = puntos-10
  boxp.innerHTML=puntos
}



