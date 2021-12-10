const btn_m = document.getElementById("btn_m")
const menu = document.getElementById("menu")
const subMe = document.getElementById("sub-menu")
let stat = 0

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

window.addEventListener("scroll", () => {
    let scroll_y = window.scrollY
    if (scroll_y < 300) {
        btn_top.style.right = "-100%"

    } else {
        btn_top.style.right = "10px"

    }
})
const btn_top = document.getElementById("b_top")
btn_top.onclick = function() {
    window.scroll({
        top: '0'
    })
}
const elemetn_form = document.getElementsByClassName("input")
let btn_s = document.querySelector("#btn_s")
btn_s.addEventListener("click", function(e) {
    let sgt = document.getElementById("sgt")
    for (let i = 0; i < elemetn_form.length; i++) {

        if (elemetn_form[i].value.length < 1) {
            sgt.innerHTML = "Por favor complete los parámetros."
            e.preventDefault()
        }
    }
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
        cursorChar: "|",
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