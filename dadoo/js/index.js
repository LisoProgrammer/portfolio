 //Array de todas las combinaciones div circulares de los numeros del dado    
 //1 = 5
 //2 = 3, 7
 //3 = 3, 5, 7
 //4 = 1, 3, 7, 9
 //5 = 1, 3, 5, 7, 9
 //6 = 1, 2, 3, 7, 8, 9
 const combiNum = new Array([0], [5], [3, 7], [3, 5, 7], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 2, 3, 7, 8, 9]);

 const words = ["ok", "ok dadu", "lanza", "lanza.", "¿OK?", "ok dado", "okay"]
 var validation = 0

 function rand() {
     return Math.ceil(Math.random() * 6)
 }
 const btn = document.querySelector("#btn")
 btn.addEventListener("click", () => {
     start("com", "punto", "result", "adu")
     start("com2", "punto2", "result2", "adu")

 })


 function start(parent_container_id, class_point, element_result_text_id, id_audio_optional) {

     let random = rand()
     let sound = id_audio_optional
     let result_text = element_result_text_id || ""
     let parent_cont_id = parent_container_id
     try {
         document.getElementById(sound).play()
     } catch (e) {
         console.error(e)
     }

     document.getElementById(result_text).innerText = random

     setTimeout(function() {
         document.getElementById(parent_cont_id).style.animation = "0.3s"
     }, 400)

     document.getElementById(parent_cont_id).style.animation = "agitar 0.3s"
         //console.log(document.getElementsByClassName("punto"))
         //console.log("Número aleatorio del dado: " + random)
         //console.log("Elementos black ")

     for (let j = 1; j < document.getElementsByClassName(class_point).length; j++) {
         document.getElementsByClassName(class_point)[j].className = class_point + " white"
     }

     document.getElementsByClassName(class_point)[0].className = class_point + " deleted"
     for (let i = 0; i < combiNum[random].length; i++) {
         document.getElementsByClassName(class_point)[combiNum[random][i]].className = class_point + " black"
             //console.log("Combined_" + i + " " + combiNum[random][i])
     }
 }

 function term_voice() {

     let e = confirm("¿Deseas tirar los dados con tu voz?")

     if (e == true && validation == 0) {
         validation = 1
         var recognition = new webkitSpeechRecognition();

         recognition.continuous = true;
         recognition.interimResults = true;
         recognition.lang = "ES";

         recognition.onresult = function(event) {
             var interim_transcript = '';
             console.log(interim_transcript)
             for (var i = event.resultIndex; i < event.results.length; ++i) {
                 interim_transcript += event.results[0][0].transcript;
             }
             console.log(interim_transcript);
             for (let i = 0; i < words.length; i++) {
                 if (interim_transcript == words[i]) {
                     btn.click()

                     interim_transcript = "";
                 }
             }

             //recognition.continuous = false

         };
         recognition.start()
         recognition.onerror = (e) => {
             console.error("Error: " + e.error)
         }
     }
 }



 //clave para que funcione
 /*  console.log("Numero aleatorio: " + ramdom)
            console.log("Array: " + combiNum[ramdom][ITERATOR])*/