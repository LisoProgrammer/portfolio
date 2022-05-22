  "use strict"
  //DEFINICION DE VARIABLES GLOBALES
  var hora = document.getElementById("h")
  var minn = document.getElementById("m")
  var s = document.getElementById("s")
  var ene = document.getElementById("results")
  var cTime = document.querySelector(".c-t")
  var header2 = document.getElementById("header2")
  var ButtonVerificar = document.querySelector(".button")
  var cAds = document.getElementById("ad")
  var formData = document.form2
      //INPUTS
      /* var inputHiddenPuntos = formData.datapun
       var inputHiddenTitleTest = formData.nametest
       var inputHiddenTime = formData.time*/
      //Recomendaciones



  //Variables de tiempo
  /*TimeS siempre debe tener un valor de 60 segundos
  TimeM siempre debe tener un valor que corresponde a los minutos
  La variable mm está en milisegundos, por lo que debe ser
   equivalente a los minutos contenidos en la variable timeM, por lo
   que 1000mls = 1sg contenidos en mls
  */

  var timeH = 0
      //60
  var timeS = 60
      /*PUEDES INSERTAR CUALQUIER VALOR QUE CORRESPONDE A LOS MINUTOS EN LA VARIABLE TIMEM.*/
  var timeM = 29
      /*En la variable timeM siempre debe haber
       un valor -1 del valor pensado en minutos, es decir, que 
       si piensa en 30min en realidad debe a contener 29min
       */
  var vent = window
      //DEFINICION DE PROCESOS FUNCIONALES

  var mls = timeM * timeS * 1000
  var se = setInterval(time, 1000)
  var mm = setTimeout(stop, mls)

  setTimeout(cnum, 1000)

  /*function getValues() {
      //DATAS
      let DataNameTest = document.getElementById("title")
      let DataTimeMinutes = document.getElementById("m")
      let DataTimeSeconds = document.getElementById("s")
      inputHiddenTitleTest.value = btoa(DataNameTest.innerHTML)
      inputHiddenTime.value = DataTimeMinutes.innerHTML + ":" + DataTimeSeconds.innerHTML

  }*/

  function cnum() {
      minn.innerHTML = timeM
  }

  function time() {

      timeS--
      s.innerHTML = timeS

      if (timeS === 0) {
          timeS = 60
          timeM--
          minn.innerHTML = timeM
          if (timeS === 60) {
              s.innerHTML = "00"
          }
          if (timeM === -1) {
              minn.innerHTML = "00"
          }

      }

      if (timeS < 10) {
          s.innerHTML = "0" + timeS

      }
      if (timeM < 10) {
          minn.innerHTML = "0" + timeM
      }
      if (timeS < 31 && timeM === 0) {
          cTime.style.animationName = "stopReadyTime"
          cAds.className = "ad-time-comp"
          cAds.style.bottom = "-60px"
          cAds.innerHTML = "<p>Se acaba el tiempo, ¡Te quedan menos de 30 segundos!</p>"
      }
  }

  function stop() {
      "use strict"
      minn.innerHTML = "00"
      s.innerHTML = "00"
      verificar()
      window.location.replace("", "_blank")
          //formData.submit()
      clearInterval(se)
      clearInterval(m)
  }

  //LA FUNCION VERIFICAR ES ACTIVADA CUANDO EL USUARIO PRESIONA EL BOTON VER PUNTAJE
  ButtonVerificar.addEventListener("click", verificar)

  function verificar() {
      "use strict"
      var punt = 0
      var newButton = document.createElement("button")
      newButton.innerHTML = "Imprimir resultados"
      newButton.id = "printButton"
      ene.className = "resulteffect active"
      ene.style.background = "var(--color-lightblue)"
      setTimeout(stopefect, 2000)

      function stopefect() {
          ene.className = "resulteffect off"
      }
      // let cButton = document.getElementById("button-print")

      window.scroll({ top: 0, behavior: "smooth" })

      function print() {
          window.print()
      }
      /*Respuestas
         pre1 = B
         pre2 = A
         pre3 = C
         pre4 = A
         pre5 = B
         pre6 = D
         pre7 = C
         pre8 = C
         pre9 = A
         pre10 = B
        */
      //------------------Recovering.js------------>
      //Recomendaciones en un array llamado letrecom, el elemento de indice 0 debe existir siempre, por lo que 
      //Deben haber 11 elementos con 11 indices y se leeran solo 10 despues del elemto con indice 0
      const letrecom = ["",
              "El sujeto está declarando que tiene muchas cosas por hacer",
              "El sujeto está comprando la cena",
              "El personaje principal hace parte de la mayoría de los eventos descritos en el texto",
              "Lisandro a partir de las 6:00 de la mañana hace muchas tareas, que incluso pueden ser las que pasan desapercibidas",
              "Los roles sociales son aquellos que una persona en la sociedad asume o se le asigna para ser parte de ella",
              "El WH 'How much' se usa principalmente para preguntar sobre el precio y la cantidad de algo",
              "El cliente está afirmando que necesita llevar algunos artículos de la tienda",
              "El cliente ya afirmó que necesita llevar cierto artículo de la tienda",
              "El vendedor está siendo muy especifico en cuanto a que temas quiere el cliente",
              "El cliente solicita un servicio a domicilio, en el que le piden la dirección de la casa para hacer el envío de los artículos"
          ]
          //elementos de un array llamado cuestion, este array contiene todas las respuestas a las preguntas
          //Decifradas como 1 = A, 2 = B, 3 = C , D = 4. NOTA: el eleento uno debe existir habiendo 11 elemtos.
      const cuestion = ["No copy",
          2,
          1,
          3,
          1,
          2,
          4,
          3,
          3,
          1,
          2
      ]
      if (letrecom.length < 10 || cuestion.length < 10) {
          console.error("Los indices codificados no son correctos.")
      }
      /*Respuestas para el test
               pre1 = B
               pre2 = A
               pre3 = C
               pre4 = A
               pre5 = B
               pre6 = D
               pre7 = C
               pre8 = C
               pre9 = A
               pre10 = B
              */
      //En el codigo html siempre debe haber un formulario de nombre y id llamado mod(numero)
      //En este ciclo for se recorren todos los parametros, preguntas acertadas, por responder, e incorrectas, en forma de formularios html.
      for (let i = 1; i < cuestion.length; i++) {
          //la variable e contiene el valor que aparece en cada formulario a traves de los inputs type radio,
          //Al ser presionado por el usuario, lo que corresponde a la codificación de A, B, C, D = 1, 2, 3, 4
          //Según el valor que contenga se emplea una salida, para cada condición: cuando el usuario no responde, responde incorrectamente y de manera correcta.
          let e = document.getElementById("mod" + i).r.value
              //Si la variable e no tiene un valor significa que el usuario no ha presionado ningún input en algún formulario
              //Por tanto, se le avisa al usuario que no ha dado respuesta al inciso planteado
          if (e.length == 0) {
              document.getElementsByClassName("reco" + i)[0].className = "recoBorderInf reco" + i
              document.getElementsByClassName("reco" + i)[0].innerHTML = "No haz seleccionado respuesta a este inciso."
                  //En cambio si la variable e tiene algún valor, significa que el usuario ha respondido algún formulario
                  //Por lo que se evalúa la respuesta con dicho valor 1, 2 ,3 4 con el array cuestion
          } else if (e.length > 0) {
              let cont = 0
                  //Se recorre todo el array cuestion para comparar con la respuesta codificada en 1, 2, 3 ,4 que el usuario presionó
              while (cont < cuestion.length) {
                  cont++
                  if (e == cuestion[i]) {
                      document.getElementsByClassName("reco" + i)[0].className = "recoBordert reco" + i
                      document.getElementsByClassName("reco" + i)[0].innerHTML = "Correcto."
                          //Si el usuario contesta de manera correcta alguna pregunta se deshabilitan los inputs type radio de dicha pregunta, son 4 inputs
                      for (let j = 0; j < 4; j++) {
                          document.getElementById("mod" + i).r[j].setAttribute("disabled", "disabled")
                      }

                  } else {
                      document.getElementsByClassName("reco" + i)[0].className = "reco" + i + " recoBorder"
                      document.getElementsByClassName("reco" + i)[0].innerHTML = "La respuesta seleccionada es incorrecta. " + letrecom[i] + ". Reconsidera tu respuesta."

                  }
              }
          }
      }
      //según cuantas clases recoBordert(las cuales son sinonimo de respuesta correcta en este programa), se define el puntaje 
      punt = ((document.getElementsByClassName("recoBordert").length) * 10)
      newButton.addEventListener("click", print)
      if (punt < 50) {
          ene.innerHTML = "Obtuviste " + punt + " puntos de 100 <br> Practica un poco más, tu puedes lograrlo."
              //INSERTA UN BOTON PARA IMPRIMIR LOS RESULTADOS DE LAS PRUEBAS O LOS TESTS CON NOMBRE VARIABLE NEWBUTTON
          ene.appendChild(newButton)
          inputHiddenPuntos.value = punt
          getValues()
          return punt
      }

      if (punt <= 70 && punt >= 50) {
          ene.innerHTML = "Obtuviste " + punt + " puntos de 100 <br> Sigue practicando, estás muy cerca a la meta. Te faltan " + (100 - punt) + " puntos"
          ene.appendChild(newButton)
          inputHiddenPuntos.value = punt
          getValues()
          return punt
      }
      if (punt > 70) {
          "use strict"
          ene.innerHTML = "Obtuviste " + punt + " puntos de 100 <br> Genial, eres un gran estudiante."
          ene.appendChild(newButton)
          inputHiddenPuntos.value = punt
          getValues()
          if (inputHiddenPuntos.value == 100) {

              formData.submit()

          }
          return punt
      }


  }

  function validarPosicion() {
      let a = vent.scrollY;

      if (a > 80) {
          header2.id = "HeAFix"
          document.querySelector(".we").style.marginTop = "50px"
      } else {
          header2.id = "HeAIni"
          document.querySelector(".we").style.marginTop = "10px"
      }

  }

  vent.addEventListener("scroll", validarPosicion)