//fecha
"use strict"
let fecha_st = new Date();
let dateString = fecha_st.toLocaleDateString();
let day_st = fecha_st.getDay();
//Cambiar a false una vez se haga el test
let is_new_visit = false;
//JSON
var jsonParse;
let json_loaded;

let http_request = new XMLHttpRequest();
http_request.open('GET', 'statics.json');
http_request.onreadystatechange = function () {
    if (http_request.readyState == 4 && http_request.status == 200) {
        jsonParse = JSON.parse(http_request.responseText);
        console.log(jsonParse);
        json_loaded = load_visit(jsonParse);
        localStorage.setItem("reg",JSON.stringify(json_loaded));
    }
}
http_request.send();

let segs = 0;
let mins = 0;
setInterval(()=>{
    segs++;
    if(segs==60){
        mins++;
        segs = 0;
    }
},1000)
function load_visit(json) {
    if (is_new_visit) {
        for (let fecha in json) {
            if (fecha == dateString) {
                console.log("Existe");
                json[fecha]["visitantes"] += 1;
                json[fecha]["devices"].push(device());
                window.addEventListener("beforeunload",()=>{
                    json["tiempos"].push(mins);
                    let sum = 0;
                    for(let time in json["tiempos"]){
                        sum+=time;
                    }
                    json["tiempo_prom"] = sum/json["tiempo_prom"];
                })
                break;
            } else {
                //json[dateString] = 0;
                break;
            }
        }
        console.log("El usuario ingreso otro día más.");
        console.log(json[dateString]);
        return json;
    } else {
        console.log("El usuario entró nuevamente hoy.");
    }

}
function device() {
    var userAgent = navigator.userAgent;
    var deviceBrand = "Desconocido";

    if (userAgent.match(/iPhone|iPod|iPad/i)) {
        deviceBrand = "Apple";
    } else if (userAgent.match(/Android/i)) {
        deviceBrand = "Android";
    } else if (userAgent.match(/Windows Phone/i)) {
        deviceBrand = "Windows Phone";
    } else if (userAgent.match(/BlackBerry/i)) {
        deviceBrand = "BlackBerry";
    } else if (userAgent.match(/Windows/i)) {
        deviceBrand = "Windows";
    } else if (userAgent.match(/Macintosh|Mac OS X/i)) {
        deviceBrand = "Mac";
    } else if (userAgent.match(/Linux/i)) {
        deviceBrand = "Linux";
    }

    console.log("Marca del dispositivo: " + deviceBrand);
    return deviceBrand;
}

//Si no existe el dia registrado, es la primera visita
if (localStorage.getItem("day_st") == null) {
    localStorage.setItem("day_st", day_st);

}
if (localStorage.getItem("dateString") == null) {
    localStorage.setItem("dateString", dateString);
}
/*//Si intentan cambiar la config
window.localStorage.addEventListener("storage",()=>{
    window.reload();
})*/

//Cuando se cargue el documento
document.addEventListener("DOMContentLoaded", () => {
    //Si la fecha registrada es diferente a la arrojada
    if (dateString != localStorage.getItem("dateString")) {
        is_new_visit = true;
    }
})