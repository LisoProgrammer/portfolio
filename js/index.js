const observer = new IntersectionObserver(an, {
  root: null,
  rootMargin: "0px 0px 50px 0px",
  threshold: 0.2,
});

for (let e = 1; e < 5; e++) {
  observer.observe(document.getElementById("t" + e));
  /*console.log("t" + e)
        console.log(document.getElementById("t" + e))
        console.log(observer)*/
}

function an(entries, observer) {
  //console.log("entries")
  //console.log(entries)
  /*console.log("observer")
    console.log(observer)*/
  try {
    entries.forEach((entries) => {
      if (entries.isIntersecting) {
        for (let i = 0; i < 2; i++) {
          document
            .getElementsByClassName(entries.target.id)
            [i].classList.add("spc-a-focuss");

          //console.log(observer)
          //console.log(entries)
          //console.log(entries.target.id)
        }
      } else {
        for (let i = 0; i < 2; i++) {
          document
            .getElementsByClassName(entries.target.id)
            [i].classList.remove("spc-a-focuss");
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
}
const a = document.getElementsByClassName("a-sp");
for (let m = 0; m < a.length; m++) {
  a[m].addEventListener("click", () => {
    //Se le da click al elemento,cambia de estilo y se omiten los otros elementos en este proceso. Si no tiene la clase de estilo el elemento clickeado, se le añade y a la vez se evita que quede con la clase permanentemente al ser seleccionado otro elemento <a>.
    if (!a[m].classList[2]) {
      for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("spc-a-focuss");
      }
      a[m].classList.add("spc-a-focuss");
    }
  });
}
const elements = document.getElementsByTagName("*");
//console.log(elements)
window.onload = () => {
  let loader = document.getElementById("progress");
  let loading = document.getElementById("loading");
  let sub_loa = document.querySelector(".sub-load");
  //let aud = document.getElementById("ini")
  if (sub_loa !== null) {
    sub_loa.style.animation = "scalemax 1s";
  }
  //aud.play()
  setTimeout(() => {
    setTimeout(() => {
      loading.remove();
    }, 500);
    loading.style.animation = "parp 0.5s";
  }, 1000);
  //

  /*let num_element = 0
    let porcent = 0
    try {
        for (let j = 0; j < elements.length; j++) {
            //console.log(elements[j] == null)
            if (elements[j] !== null) {
                num_element++
                //console.log((num_element * 100) / elements.length)
                porcent = Math.floor(num_element * 100 / elements.length)
                loader.style.width = porcent + "%"
            }
        }
    } catch (e) {
        console.error(e)
    }*/
  //console.log(num_element)
};

/*nst imgs = ["", "assets/b_1ken.png", "assets/s_6m.png"]
for (let mm = 1; mm < 3; mm++) {
    document.getElementsByClassName("num" + mm + "img")[0].src = imgs[mm]
}*/
//Botón de apertura y cierre de menú
const btn_m = document.getElementById("btn_m");
//Menú objeto de pantalla completa
const menu = document.getElementById("menu");
//menú real de opciones
const subMe = document.getElementById("sub-menu");
//formulario de contacto
const form = document.getElementById("contact-form");
//banner
const ban = document.getElementById("ban");
//
//Estado inicial del menú: cerrado -> 0. Abierto -> 1
let stat = 0;
//Intento de envío de mensajes por #contact-form
let num_int = 3;
/*console = {
        log: function() {},
        error: function() {}
    }*/
//EL menu se abre cambiando de estado: 1; asignando las clases correspondientes.
btn_m.addEventListener("click", function () {
  if (stat == 0) {
    //menú abierto
    stat = 1;
    /*menu.style.right = "0"
            subMe.style.right = "0"*/
    menu.className = "menu opened";
    subMe.className = "c-menu opened";
    subMe.style.transition = "all 0.3s";
  }
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  ban.style.transform = "translate3d(0px,-" + scrollY * 0.08 + "px, 0px)";
});
//cuando se detecta que se dió click al menu objeto, el menú objeto cambia de estado: 0.
document.addEventListener("click", function (e) {
  let em = e.target;
  if (em.id == "menu" || em.id == "btn-c" || em.id == "img-close") {
    stat = 0;
    menu.className = "menu closed";
    subMe.className = "c-menu closed";
    subMe.style.transition = "all 0.3s";

    //console.log(em);
    /*menu.style.right = "-100%"
        subMe.style.right = "-100%"*/
  }
});

let f = new Date();
//número de Día de la semana en que ingresa el usuario a la página
let day = f.getDay();
//Por cada etiqueta <a> que el usuario presiona se cierra el menú cambiando de estado: cerrado -> 0
const element_a = document.getElementsByClassName("a-sp");
for (let m = 0; m < element_a.length; m++) {
  element_a[m].addEventListener("click", () => {
    stat = 0;
    menu.className = "menu closed";
    subMe.className = "c-menu closed";
    subMe.style.transition = "all 0.3s";
  });
}
//Se asigna una variable inicial de valor 0, que corresponde al scroll inicial del usuario
var direction = 0;
//El encabezado de la página
const header = document.getElementsByTagName("header")[0];

//Se asigna un evento scroll a la ventana del navegador
window.addEventListener("scroll", () => {
  //Se lee el valor del scroll de eje Y
  let scroll_y = window.scrollY;
  //Si dicho valor es menor a 300, se asigna un estilo para que el botón que da la funcionalidad de subir arriba desaparezca de la pantalla, puesto que el usuario está en el principio de la pagina web. Sino se deduce que no está en el principio de la pantalla, y termina siendo opcional volver arriba de la pág.

  if (scroll_y < 300) {
    btn_top.style.right = "-100%";
  } else {
    btn_top.style.right = "10px";
  }
  //Si el scroll Y del usuario es mayor a la variable direction, el escabezado de la pág. desaparece de la pantalla, puesto que el usuario está en dirección negativa del scroll Y. Sino está en dirección positiva.
  if (scroll_y > direction) {
    //Abajo
    //console.log("Abajo")
    direction = scroll_y;
    header.style.top = "-100%";
  } else {
    //Arriba
    //console.log("Arriba")
    header.style.top = "0";
    direction = scroll_y;
  }
});
//Si se presiona el botón "Volver arriba", el scroll Y es cero.
const btn_top = document.getElementById("b_top");
btn_top.onclick = function () {
  window.scroll({
    top: "0",
  });
};
//Se asignan a todos los elementos del formulario de contacto, un evento de focus y blur con sus respectivas funciones, teniendo como objetivo no tapar la pantalla con elementos innecesarios
for (let j = 0; j < form.elements.length; j++) {
  form.elements[j].addEventListener("focus", focus);
  form.elements[j].addEventListener("blur", blur);
}

function focus() {
  if (window.innerWidth < 700) {
    header.style.top = "-100%";
    btn_top.style.right = "-100%";
  }
}

function blur() {
  if (window.innerWidth < 700) {
    header.style.top = "0";
    btn_top.style.right = "10px";
  }
}
let messages_en = {
  complete_params: "Please complete the fields correctly.",
  error_sending_message:
    "Hubo un error. Puede deberse a una saturación del servidor.",
  success_sending_message:
    "Your message was sent successfully. I will get in touch with you as soon as I read it.",
  alternative_message_error:
    "An unexpected error occurred. The page will reload automatically...",
  no_ints:
    "You have no submission attempts left for today. Please try sending the message again tomorrow...",
  sending: "Sending...",
};
let messages_es = {
  complete_params: "Por favor complete los parámetros correctamente.",
  error_sending_message: "An error occurred. It may be due to server overload.",
  success_sending_message:
    "Tu mensaje se envió con éxito, me pondré en contacto contigo apenas lea tu mensaje.",
  alternative_message_error:
    "Ocurrió un error inesperado, se recargará la página automáticamente...",
  no_ints:
    "No tienes intentos de envío hoy. Por favor envía el mensaje mañana...",
  sending: "Enviando...",
};
//breakpoint
const _0xca7083=_0x1b52;(function(_0x5eb0f6,_0x394797){const _0x12de1c=_0x1b52,_0x4575d2=_0x5eb0f6();while(!![]){try{const _0x4cd5d3=-parseInt(_0x12de1c(0x1ed))/0x1+-parseInt(_0x12de1c(0x1ef))/0x2+parseInt(_0x12de1c(0x1f0))/0x3*(parseInt(_0x12de1c(0x1f9))/0x4)+-parseInt(_0x12de1c(0x1fc))/0x5+-parseInt(_0x12de1c(0x1fb))/0x6+-parseInt(_0x12de1c(0x1f1))/0x7+parseInt(_0x12de1c(0x1eb))/0x8*(parseInt(_0x12de1c(0x1ee))/0x9);if(_0x4cd5d3===_0x394797)break;else _0x4575d2['push'](_0x4575d2['shift']());}catch(_0x2d9b7b){_0x4575d2['push'](_0x4575d2['shift']());}}}(_0x10f6,0x6487a),window[_0xca7083(0x1f3)](_0xca7083(0x1f5),()=>{const _0x1a35c8=_0xca7083;sgt['className']=_0x1a35c8(0x1fa);let _0x261e3a=localStorage['lang'];_0x261e3a=='en'?sgt[_0x1a35c8(0x1ec)]=messages_en['alternative_message_error']:sgt[_0x1a35c8(0x1ec)]=messages_es[_0x1a35c8(0x1f2)],setTimeout(()=>{const _0x1798ce=_0x1a35c8;localStorage[_0x1798ce(0x1f6)]=0x0,window[_0x1798ce(0x1f7)][_0x1798ce(0x1f4)](),localStorage[_0x1798ce(0x1f8)]('e',0x0);},0xbb8);}));function _0x1b52(_0x5a3aea,_0x5949d4){const _0x10f63b=_0x10f6();return _0x1b52=function(_0x1b52cc,_0x296c3a){_0x1b52cc=_0x1b52cc-0x1eb;let _0x46c38e=_0x10f63b[_0x1b52cc];return _0x46c38e;},_0x1b52(_0x5a3aea,_0x5949d4);}function _0x10f6(){const _0x2e2068=['34732sIHiHd','code\x20error','3763272hYtAcZ','2911440ygIuyX','3984KinJnH','innerHTML','542727sJiBnX','39114skoBYH','337574Ixoxgq','279eVkdVK','4473301XpDbiM','alternative_message_error','addEventListener','reload','storage','int','location','setItem'];_0x10f6=function(){return _0x2e2068;};return _0x10f6();}
//Se valida la información para preparar el envío
const elemetn_form = document.getElementsByClassName("input");
console.log(elemetn_form);
let btn_s = document.querySelector("#btn_s");
btn_s.addEventListener("click", async function (e) {
  //Se verifica que los campor del formulario están debidamente diligenciados
  let validation = false;
  e.preventDefault();
  let sgt = document.getElementById("sgt");
  sgt.innerHTML = "";
  let lang = localStorage.lang;
  let messages;
  if (lang == "en") {
    messages = messages_en;
  } else {
    messages = messages_es;
  }
  for (let i = 0; i < elemetn_form.length; i++) {
    if (elemetn_form[i].value.length <= 1) {
      sgt.innerHTML = messages["complete_params"];
      validation = false;
      //codigo de color para sugerir
      sgt.className = "code suggestion";
    } else if (
      elemetn_form[0].value.length > 1 &&
      elemetn_form[1].value.length > 1 &&
      elemetn_form[2].value.length > 1
    ) {
      //Todo los valores de formularios están diligenciados
      validation = true;
    }
  }
  //Codigo de seguridad
  /*if (parseInt(localStorage.int) > num_int || parseInt(localStorage.int) < 0) {

        sgt.className = "code error"
        sgt.innerHTML = "Ocurrió un error inesperado, se recargará la página automáticamente...";

        setTimeout(() => {
            localStorage.int = 0
            window.location.reload()
        }, 3000)

    }*/
  //No hay intentos de envio cuando llega a cero.
  if (localStorage.getItem("int") == 0) {
    sgt.className = "code suggestion";
    sgt.innerHTML = messages["no_ints"];
    localStorage.setItem("tod", f.getDay());
  }
  //Se prepara la información y se valida si hay opciones de envío
  if (
    validation == true &&
    localStorage.getItem("int") > 0 &&
    localStorage.getItem("int") <= num_int
  ) {
    let form = new FormData();
    console.log(elemetn_form.name.value);
    form.append("name", elemetn_form.name.value);
    form.append("contact", elemetn_form.email.value);
    form.append("mensaje", elemetn_form.msg.value);
    form.append("_captcha", "false");
    console.log(form);
    sgt.innerHTML = messages["sending"];
    sgt.className = "code sending";
    let request_email_sending = await fetch(
      "https://formsubmit.co/009daebb4d56a450d89c9666f86b629d",
      {
        method: "POST",
        body: form,
      }
    );
    if (request_email_sending.ok) {
      localStorage.setItem("int", parseInt(localStorage.getItem("int")) - 1);
      cont.innerHTML = localStorage.getItem("int");
      console.log("Envío exitoso");
      sgt.className = "code success";
      sgt.innerHTML = messages["success_sending_message"];
      elemetn_form.name.value = "";
      elemetn_form.email.value = "";
      elemetn_form.msg.value = "";
    } else {
      sgt.innerHTML = messages["error_sending_message"];
      sgt.className = "code error";
      console.error("Envío con problemas.");
    }
  }
});
elemetn_form[2].addEventListener("input", function () {
  lengthE = elemetn_form[2].value.length;

  if (lengthE >= 399) {
    elemetn_form[2].value = elemetn_form[2].value.slice(0, 399);
    document.getElementById("le").innerHTML = 150;
  }
  document.getElementById("le").innerHTML = lengthE;
});
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".prot", {
    strings: ["Dev.", "Tech.", "@LisoPro."],
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
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
});

function insertAction(id, link) {
  try {
    document.querySelector(id).addEventListener("click", () => {
      window.open(link, "_blank");
    });
  } catch (e) {
    console.error(e);
  }
}

insertAction("#btn_g", "assets/cv/CVLISANDRO_ZAPATA.pdf");
let links = [
  "",
  "https://html.com",
  "https://developer.mozilla.org/es/docs/Web/CSS",
  "https://javascript.com",
  "https://php.net",
  "https://python.org",
  "https://learn.microsoft.com/es-es/cpp/cpp/welcome-back-to-cpp-modern-cpp?view=msvc-170",
  "https://www.mysql.com",
];
for (let m = 1; m < 8; m++) {
  insertAction("#tc" + m, links[m]);
}
let links_cards = [
  "",
  "https://www.linkedin.com/in/lisandro-zapata-paternina-dev/details/projects/",
  "https://github.com/LisoProgrammer/minibanner_front",
  "https://github.com/ISCOUTB/AS_dashboard_learning_styles",
];
for (let m = 1; m < 4; m++) {
  insertAction("#pro" + m, links_cards[m]);
}
document.addEventListener("DOMContentLoaded", () => {
  let e = localStorage.getItem("e");
  if (
    localStorage.getItem("int") == null &&
    localStorage.getItem("tod") == null
  ) {
    //localStorage.setItem("int", num_int);
    let fecha = new Date();
    console.log(fecha);
    localStorage.setItem("tod", fecha.getDay());
    localStorage.setItem("int", num_int);
  } else {
    //con intención de que haya nuevos intentos
    if (f.getDay() != localStorage.getItem("tod") && e == null) {
      //console.log("Linea ejecutada")
      //localStorage.setItem("int", num_int)
      localStorage.setItem("tod", f.getDay());
      localStorage.setItem("int", num_int);
      console.log(day);
    }
  }
  let cont = document.getElementById("cont");
  cont.innerHTML = localStorage.getItem("int");
});
