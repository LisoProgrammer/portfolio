const btn_m = document.getElementById("btn_m")
const menu = document.getElementById("menu")
const subMe = document.getElementById("sub-menu")
const form = document.getElementById("contact-form")
let stat = 0
    /*console = {
        log: function() {},
        error: function() {}
    }*/
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

document.addEventListener("click", function(e) {
    let em = e.target;
    if (em.id == "menu" || em.id == "btn-c") {
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

const element_a = document.getElementsByClassName("a-sp")
for (let m = 0; m < element_a.length; m++) {
    element_a[m].addEventListener("click", () => {
        stat = 0
        menu.className = "menu closed";
        subMe.className = "c-menu closed";
        subMe.style.transition = "all 0.3s"
    })
}
var direction = 0
const header = document.getElementsByTagName("header")[0]
window.addEventListener("scroll", () => {
    let scroll_y = window.scrollY

    if (scroll_y < 300) {
        btn_top.style.right = "-100%"

    } else {
        btn_top.style.right = "10px"

    }
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
const btn_top = document.getElementById("b_top")
btn_top.onclick = function() {
    window.scroll({
        top: '0'
    })
}
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
const elemetn_form = document.getElementsByClassName("input")
let btn_s = document.querySelector("#btn_s")
btn_s.addEventListener("click", function(e) {
    let validation = false
    e.preventDefault()
    let sgt = document.getElementById("sgt")
    sgt.innerHTML = ""
    for (let i = 0; i < elemetn_form.length; i++) {

        if (elemetn_form[i].value.length < 1) {
            sgt.innerHTML = "Por favor complete los parámetros."
            validation = false
        } else if (elemetn_form[0].value.length > 1 && elemetn_form[1].value.length > 1 && elemetn_form[2].value.length > 1) {
            validation = true
        }

    }
    //
    if (validation == true) {
        const https = new XMLHttpRequest()
        let valueEncNa = encodeURIComponent(form.name.value)
        let valueEncEM = encodeURIComponent(form.email.value)
        let valueEncMsg = encodeURIComponent(form.msg.value)
        let query = "name=" + valueEncNa + "&email=" + valueEncEM + "&msg=" + valueEncMsg;
        https.open("POST", "https://pressly.000webhostapp.com/sourcest/response.php", true)
            //console.log(valueEncNa + valueEncEM + valueEncMsg)
        https.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        https.onreadystatechange = () => {
            //console.log(request.response)
            //console.log(https.responseURL)
            //console.log(https.response)
            sgt.innerHTML = https.response
            if (https.status < 4) {
                sgt.innerHTML = "Hubo un error. Por favor, comprueba tu conexión a internet y vuelve a enviar el mensaje."
            }

        }
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
        strings: ["Desarrollador.", "Técnico.", "Lisandro Zapata."],
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
insertAction("btn-5a", "https://pressly.000webhostapp.com/dadoo/")
