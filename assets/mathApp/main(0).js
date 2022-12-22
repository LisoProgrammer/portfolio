const option = document.getElementById('t')
const bx_result = document.getElementById("box_res")
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
audio_apl = document.getElementById("apl-a")
audio_error = document.getElementById("err-a")

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

function ini(operation){
  switch(operation){
    case "+":
      console.log("+")
      document.addEventListener("keydown", function(){
  
        if(event.key == "Enter"){
         ope = (parseInt(boxn1.innerHTML)) + (parseInt(boxn2.innerHTML))
         if(input.value==ope){
           //res.innerHTML="👍"
           //res.className="ani"
           bx_result.className="box_result box_correct"
           bx_result.innerHTML="Correcto"
           audio_apl.play()
           spinner.className="spinner"
             setTimeout(function(){
             bx_result.className = "box_result box_none"
             spinner.className=""
           },1000)
           setTimeout(defIn,2000)
           
         }else{
           //res.innerHTML="👎"
           //res.className="ani"
           bx_result.className="box_result box_incorrect"
           bx_result.innerHTML="Incorrecto"

           audio_error.play()
        }
          
           setTimeout(function(){
            bx_result.className = "box_result box_none"
          },1000)
         }
        }
          
      )
      break
    case "-":
      console.log("-")
      break
    case "*":
      console.log("*")
      break
    case "/":
      console.log("/")
      break
    default:
      console.log("Selección incorrecta.")
  }
}
ini("+")

