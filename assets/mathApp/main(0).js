const option = document.getElementById('t')
const bx_result = document.getElementById("box_res")

puntos = localStorage.getItem("puntos")
caja_p = document.getElementById("p_total")
caja_p.innerHTML = puntos
racha = localStorage.getItem("racha") 
caja_r = document.getElementById("racha")
caja_r.innerHTML = racha

window.addEventListener("storage",()=>{
  if(!localStorage.puntos || !localStorage.racha){
    window.location.href="./index.html"
  }
})
function ale(){
  let num = Math.ceil(Math.random()*(option.value))
  return num
}

function sound_ale_win(){
  carpeta = "assets/correct/"
  file = "correct"
  n_files = 3
  src = []
  ext = ".wav"
  for(let i = 1; i<=n_files; i++){
    src.push(carpeta+file+i+ext)
  }
  i = Math.floor(Math.random() * src.length)
  return src[i]
}
function sound_ale_err(){
  carpeta = "assets/error/"
  file = "error"
  n_files = 4
  src = []
  ext = ".wav"
  for(let i = 1; i<=n_files; i++){
    src.push(carpeta+file+i+ext)
  }
  i = Math.floor(Math.random() * src.length)
  return src[i]
}
// puntos de interés
let puntos_int = 5
function reg_puntos(){
  puntos = localStorage.getItem("puntos")
  puntos_up = parseInt(puntos) + puntos_int
  localStorage.setItem("puntos",puntos_up)
  caja_p.innerHTML=localStorage.getItem("puntos")
}
function reg_intents(){
  intentos = localStorage.getItem("intents")
  intentos_up = parseInt(intentos) + 1
  intentos = localStorage.setItem("intents",intentos_up)
}
function reg_winned(){
  winned = localStorage.getItem("win")
  winned_up = parseInt(winned) + 1
  winned = localStorage.setItem("win",winned_up)
}
function reg_racha(){
  intentos = parseInt(localStorage.getItem("intents"))
  winned = parseInt(localStorage.getItem("win"))
  racha_term = Math.round((winned/intentos)*100,2)
  localStorage.setItem("racha",racha_term)
  caja_r.innerHTML=localStorage.getItem("racha")
}



option.addEventListener('change', function (){
  defIn()
  tasa_puntual = parseInt(option.value)
  if(tasa_puntual == 9){
    puntos_int = 5
  }else if(tasa_puntual == 99){
    puntos_int = 10
  }else if(tasa_puntual == 999){
    puntos_int = 15
  }
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
  //console.log(n1,nums_div)
  ind_aleatorio = Math.floor(Math.random()*nums_div.length)
  //console.log(nums_div[ind_aleatorio])
  boxn1.innerHTML=n1
  boxn2.innerHTML = nums_div[ind_aleatorio]   
  input.value=""
  input2.value=""
  res.className=""
}

function correctly(){
  bx_result.className="box_result box_correct"
  bx_result.innerHTML="Correcto <br> +"+puntos_int
  audio_apl.play()
  tiempo = audio_apl.duration * 1000 + 2000
  input.setAttribute("readonly","readonly")
  spinner.className="spinner" 
  document.body.style.overflowY = "hidden"   
  reg_puntos()
  reg_intents()
  reg_winned()
  reg_racha()
  setTimeout(()=>{
    if(audio_apl.ended){
      audio_apl.src=sound_ale_win()
    }
  },tiempo)

  setTimeout(function(){
    bx_result.className = "box_result box_none"
    spinner.className=""
    document.body.style.overflowY = "auto"
    input.removeAttribute("readonly")
  },1000)
  setTimeout(defIn,2000)
  
}
function incorrectly(){
  bx_result.className="box_result box_incorrect"
  bx_result.innerHTML="Incorrecto"
  input.setAttribute("readonly","readonly")
  audio_error.play()
  tiempo = audio_error.duration * 1000 + 2000
  document.body.style.overflowY = "hidden"
  reg_intents()
  reg_racha()
  setTimeout(()=>{
    if(audio_error.ended){
      audio_error.src=sound_ale_err()
    }
    document.body.style.overflowY = "auto"
  },tiempo)
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
        //alert(event.which)
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
        //alert(event.key)
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
        //alert(event.key)
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
      //console.log(n1,nums_div)
      ind_aleatorio = Math.floor(Math.random()*nums_div.length)
      //console.log(nums_div[ind_aleatorio])
      boxn2.innerHTML = nums_div[ind_aleatorio]   
      ope = (parseInt(boxn1.innerHTML)) / (parseInt(boxn2.innerHTML))
      document.addEventListener("keydown", function(){
        //alert(event.codeKey)
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
    window.location.href="index.html"
}

