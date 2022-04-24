//Botón de apertura y cierre de menú
const btn_m = document.getElementById("btn_m")
    //Menú objeto de pantalla completa
const menu = document.getElementById("menu")
    //menú real de opciones
const subMe = document.getElementById("sub-menu")
    //formulario de contacto
const form = document.getElementById("contact-form")
    //Estado inicial del menú: cerrado -> 0. Abierto -> 1
let stat = 0
    //Intento de envío de mensajes por #contact-form
let num_int = 3
    /*console = {
        log: function() {},
        error: function() {}
    }*/
    //EL menu se abre cambiando de estado: 1; asignando las clases correspondientes.
btn_m.addEventListener("click", function() {
    if (stat == 0) {
        //menú abierto
        stat = 1
            /*menu.style.right = "0"
            subMe.style.right = "0"*/
        menu.className = "menu opened";
        subMe.className = "c-menu opened";
        subMe.style.transition = "all 0.3s"
    }
})

//cuando se detecta que se dió click al menu objeto, el menú objeto cambia de estado: 0.
document.addEventListener("click", function(e) {
    let em = e.target;
    if (em.id == "menu" || em.id == "btn-c" || em.id == "img-close") {
        stat = 0;
        menu.className = "menu closed";
        subMe.className = "c-menu closed";
        subMe.style.transition = "all 0.3s"

        //console.log(em);
        /*menu.style.right = "-100%"
        subMe.style.right = "-100%"*/
    }
})
const age_span = document.getElementById("ag")
let f = new Date()
document.addEventListener("DOMContentLoaded", () => {
    let ed = (f.getFullYear()) - 2005
    age_span.innerHTML = ed
})

//número de Día de la semana en que ingresa el usuario a la página
let day = f.getDay();
//Por cada etiqueta <a> que el usuario presiona se cierra el menú cambiando de estado: cerrado -> 0
const element_a = document.getElementsByClassName("a-sp")
for (let m = 0; m < element_a.length; m++) {
    element_a[m].addEventListener("click", () => {
        stat = 0
        menu.className = "menu closed";
        subMe.className = "c-menu closed";
        subMe.style.transition = "all 0.3s"
    })
}
//Se asigna una variable inicial de valor 0, que corresponde al scroll inicial del usuario
var direction = 0
    //El encabezado de la página
const header = document.getElementsByTagName("header")[0]
    //Se asigna un evento scroll a la ventana del navegador
window.addEventListener("scroll", () => {
        //Se lee el valor del scroll de eje Y
        let scroll_y = window.scrollY
            //Si dicho valor es menor a 300, se asigna un estilo para que el botón que da la funcionalidad de subir arriba desaparezca de la pantalla, puesto que el usuario está en el principio de la pagina web. Sino se deduce que no está en el principio de la pantalla, y termina siendo opcional volver arriba de la pág.

        if (scroll_y < 300) {
            btn_top.style.right = "-100%"
        } else {
            btn_top.style.right = "10px"
        }
        //Si el scroll Y del usuario es mayor a la variable direction, el escabezado de la pág. desaparece de la pantalla, puesto que el usuario está en dirección negativa del scroll Y. Sino está en dirección positiva.
        if (scroll_y > direction) {
            //Abajo
            //console.log("Abajo")
            direction = scroll_y
            header.style.top = "-100%"
        } else {
            //Arriba 
            //console.log("Arriba")
            header.style.top = "0"
            direction = scroll_y
        }
    })
    //Si se presiona el botón "Volver arriba", el scroll Y es cero.
const btn_top = document.getElementById("b_top")
btn_top.onclick = function() {
        window.scroll({
            top: '0'
        })
    }
    //Se asignan a todos los elementos del formulario de contacto, un evento de focus y blur con sus respectivas funciones, teniendo como objetivo no tapar la pantalla con elementos innecesarios
for (let j = 0; j < form.elements.length; j++) {
    form.elements[j].addEventListener("focus", focus)
    form.elements[j].addEventListener("blur", blur)
}

function focus() {
    if (window.innerWidth < 700) {
        header.style.top = "-100%"
        btn_top.style.right = "-100%"

    }
}

function blur() {
    if (window.innerWidth < 700) {
        header.style.top = "0"
        btn_top.style.right = "10px"

    }
}
//Se valida la información para preparar el envío
const elemetn_form = document.getElementsByClassName("input")
let btn_s = document.querySelector("#btn_s")
btn_s.addEventListener("click", function(e) {
    //Se verifica que los campor del formulario están debidamente diligenciados
    let validation = false
    e.preventDefault()
    let sgt = document.getElementById("sgt")
    sgt.innerHTML = ""
    for (let i = 0; i < elemetn_form.length; i++) {

        if (elemetn_form[i].value.length <= 1) {
            sgt.innerHTML = "Por favor complete los parámetros correctamente."
            validation = false
                //codigo de color para sugerir
            sgt.className = "code suggestion"
        } else if (elemetn_form[0].value.length > 1 && elemetn_form[1].value.length > 1 && elemetn_form[2].value.length > 1) {
            //Todo los valores de formularios están diligenciados
            validation = true
        }

    }
    //Codigo de seguridad
    if (parseInt(localStorage.int) > num_int || parseInt(localStorage.int) < 0) {

        sgt.className = "code error"
        sgt.innerHTML = "Ocurrió un error inesperado, se recargará la página automáticamente...";

        setTimeout(() => {
            localStorage.int = 0
            window.location.reload()
        }, 3000)

    }
    //No hay intentos de envio cuando llega a cero.
    if (localStorage.getItem("int") == 0) {
        sgt.className = "code suggestion"
        sgt.innerHTML = "No tienes intentos de envío hoy. Por favor envía el mensaje mañana..."
        localStorage.setItem("tod", f.getDay())
    }
    //Se prepara la información y se valida si hay opciones de envío
    if (validation == true && localStorage.getItem("int") > 0 && localStorage.getItem("int") <= num_int) {
        //Se codifican las variables de formulario a un formato web entendible
        const https = new XMLHttpRequest()
        let valueEncNa = encodeURIComponent(form.name.value)
        let valueEncEM = encodeURIComponent(form.email.value)
        let valueEncMsg = encodeURIComponent(form.msg.value)
        let query = "name=" + valueEncNa + "&email=" + valueEncEM + "&msg=" + valueEncMsg;
        //Se enviará el mensaje por los medios establecidos
        https.open("POST", "https://testingdevelope.000webhostapp.com/response.php", true)
        sgt.innerHTML = "Enviando..."
        sgt.className = "code sending"

        https.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        https.onreadystatechange = () => {
                //console.log(request.response)
                //console.log(https.responseURL)
                //console.log(https.response)
                //Si el proceso de envío es exitoso se resta un intento
                //Sino no hay conexión o el servidor respondió de manera fracasada
                if (https.readyState == 4 && https.status == 200) {
                    sgt.innerHTML = https.response
                    console.log(parseInt(localStorage.getItem("int")) - 1)
                    localStorage.setItem("int", parseInt(localStorage.getItem("int")) - 1)
                    cont.innerHTML = localStorage.getItem("int")
                }

                if (https.status < 4) {
                    sgt.innerHTML = "Hubo un error. Por favor, comprueba tu conexión a Internet y vuelve a enviar el mensaje.";
                    sgt.className = "code error"
                } else {
                    sgt.className = "code success"
                }

            }
            //Se envían los datos...
        https.send(query)
    }
})
elemetn_form[2].addEventListener("input", function() {
    lengthE = elemetn_form[2].value.length

    if (lengthE >= 199) {
        elemetn_form[2].value = elemetn_form[2].value.slice(0, 199)
        document.getElementById("le").innerHTML = 150
    }
    document.getElementById("le").innerHTML = lengthE
})
document.addEventListener("DOMContentLoaded", function() {
    new Typed(".prot", ({
        strings: ["Desarrollador.", "Técnico.", "@LisoPro."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 2,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    }))

});

function insertAction(id, link) {
    document.getElementById(id).addEventListener("click", () => {
        window.open(link, "_blank")
    })
}

insertAction("btn-4a", "https://pressly.000webhostapp.com/talotick/");
insertAction("btn-5a", "https://pressly.000webhostapp.com/dadoo/");
insertAction("btn_g", "cv.docx")

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("int") == null && localStorage.getItem("tod") == null) {
        localStorage.setItem("int", num_int);
        let fecha = new Date()
        console.log(fecha)
        localStorage.setItem("tod", fecha.getDay())
    } else {
        if (day != localStorage.getItem("tod")) {
            //console.log("Linea ejecutada")
            localStorage.setItem("int", num_int)
            localStorage.setItem("tod", f.getDay())
        }
    }
    let cont = document.getElementById("cont")
    cont.innerHTML = localStorage.getItem("int")
})

console.log(localStorage.getItem("int"))
