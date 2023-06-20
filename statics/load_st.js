//fecha
"use strict"
let fecha_st = new Date();
let dateString = fecha_st.toLocaleDateString();
let day_st = fecha_st.getDay();
//JSON
var jsonParse;
let http_request = new XMLHttpRequest();
http_request.open('GET','statics.json');
http_request.onreadystatechange = function(){
    if(http_request.readyState == 4 && http_request.status == 200){
        jsonParse = JSON.parse(http_request.responseText);
        console.log(jsonParse);
        for(let fecha in jsonParse){
            if(fecha==dateString){
                console.log("Existe");
                jsonParse[fecha]["visitantes"] += 1;
            }else{
                jsonParse[dateString] = 0;
            }
        }
        console.log(jsonParse[dateString]);
    }
}
http_request.send();

//Si no existe el dia registrado, es la primera visita
if(localStorage.getItem("day_st") == null){
   localStorage.setItem("day_st",day_st);

}
if(localStorage.getItem("dateString") == null){
    localStorage.setItem("dateString",dateString);
}
/*//Si intentan cambiar la config
window.localStorage.addEventListener("storage",()=>{
    window.reload();
})*/

//Cuando se cargue el documento
document.addEventListener("DOMContentLoaded",()=>{
    //Si el día registrado es diferente al arrojado
    if(fecha_st.getDay()!=localStorage.getItem("day_st")){
        console.log("exi");
    }
})