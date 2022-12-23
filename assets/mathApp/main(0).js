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
  if(window.localStorage.getItem("op")=="div"){
    defDiv()
  }
}
function defDiv(){
  n1 = ale()
  nums_div = []
  for(let i = 1;i<n1+1;i++){
    if(n1 % i == 0){
     nums_div.push(i)
    }
  }  
  console.log(n1,nums_div)
  ind_aleatorio = Math.floor(Math.random()*nums_div.length)
  console.log(nums_div[ind_aleatorio])
  boxn1.innerHTML=n1
  boxn2.innerHTML = nums_div[ind_aleatorio]   
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

function correctly(){
  bx_result.className="box_result box_correct"
  bx_result.innerHTML="Correcto"
  audio_apl.play()
  input.setAttribute("readonly","readonly")
  spinner.className="spinner"
    setTimeout(function(){
    bx_result.className = "box_result box_none"
    spinner.className=""
    input.removeAttribute("readonly")
  },1000)
  setTimeout(defIn,2000)
  
}
function incorrectly(){
  bx_result.className="box_result box_incorrect"
  bx_result.innerHTML="Incorrecto"
  input.setAttribute("readonly","readonly")
  audio_error.play()
}
function reset(){
  setTimeout(function(){
    bx_result.className = "box_result box_none"
    input.removeAttribute("readonly")
  },1000)
}

function ini(operation){
  switch(operation){
    case "+":
      console.log("+")
      document.addEventListener("keydown", function(){
  
        if(event.key == "Enter"){
         ope = (parseInt(boxn1.innerHTML)) + (parseInt(boxn2.innerHTML))
         if(input.value==ope){
            correctly()
         }else{
            incorrectly()
          }
            reset()
         }
        })
      break
    case "-":
      console.log("-")
      document.addEventListener("keydown", function(){
  
        if(event.key == "Enter"){
         ope = (parseInt(boxn1.innerHTML)) - (parseInt(boxn2.innerHTML))
         if(input.value==ope){
          correctly()
         }else{
          incorrectly()
          }
          reset()
        }
        })
      break
    case "*":
      console.log("*")
      document.addEventListener("keydown", function(){
  
        if(event.key == "Enter"){
         ope = (parseInt(boxn1.innerHTML)) * (parseInt(boxn2.innerHTML))
         if(input.value==ope){
           correctly()
         }else{
           incorrectly()
        }
        reset()
      }
        
        })
      break
    case "/":
      console.log("/")
      n1 = parseInt(boxn1.innerHTML)
      nums_div = []
      for(let i = 1;i<n1+1;i++){
        if(n1 % i == 0){
         nums_div.push(i)
        }
      }  
      console.log(n1,nums_div)
      ind_aleatorio = Math.floor(Math.random()*nums_div.length)
      console.log(nums_div[ind_aleatorio])
      boxn2.innerHTML = nums_div[ind_aleatorio]   
      ope = (parseInt(boxn1.innerHTML)) / (parseInt(boxn2.innerHTML))
      document.addEventListener("keydown", function(){

        if(event.key == "Enter"){
          ope = (parseInt(boxn1.innerHTML)) / (parseInt(boxn2.innerHTML))
          if(input.value==ope){
            correctly()
          }else{
            incorrectly()
          }
            reset()
        }
      })
      break
    default:
      console.log("Selección incorrecta.")
  }
}

let operacion = window.localStorage.getItem("op")
let operando = document.getElementById("ope")
let title = document.getElementsByTagName("title")[0]
switch(operacion){
  case "suma":
    operando.innerHTML="+"
    title.innerText="SUMA"
    ini("+")
    break
  case "resta":
    operando.innerHTML="-"
    title.innerText="RESTA"
    ini("-")
    break
  case "mult":
    operando.innerHTML="×"
    title.innerText="MULTIPLICACIÓN"
    ini("*")
    break
  case "div":
    operando.innerHTML="÷"
    title.innerText="DIVISION"
    ini("/")
    break
  default:
    window.location.href="mathApp/index.html"
}

