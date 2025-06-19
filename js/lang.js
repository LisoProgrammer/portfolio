if (!localStorage.lang) {
  localStorage.lang = "es";
}
let typed = null;
let strings = {
  "es": ["Desarrollador.", "Programador.", "@LisoProgrammer."],
  "en": ["Developer.", "Programmer.", "@LisoProgrammer."]
}
document.addEventListener("DOMContentLoaded", type);
const select = document.getElementById("langSelector");
select.value = localStorage.lang;
let button_download_cv = document.getElementById("btn_g");
button_download_cv.onclick = download_cv;
loadLanguage(localStorage.lang);

select.addEventListener("change", (e) => {
  const lang = e.target.value;
  loadLanguage(lang);
  localStorage.lang = lang;
  // Re-crear la animación con el nuevo idioma
  if (typed) typed.destroy();
  type();
  button_download_cv.onclick = download_cv;
});

async function loadLanguage(lang) {
  try {
    const response = await fetch(`./lang/${lang}.json`);
    const translations = await response.json();
    console.log(translations);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
    document.querySelectorAll(".skills .element").forEach((el) => {
      el.setAttribute("data-tooltip", translations["qsm"]);
    })
    //editar semestre en el parrafo
    get_semester_by_lang();
  } catch (error) {
    console.error("Error cargando idioma:", error);
  }
}
function download_cv(){
  if(localStorage.lang == "en"){
    window.open("assets/cv/en/CVLISANDRO_ZAPATA.pdf", "_blank");
  }else{
    window.open("assets/cv/es/CVLISANDRO_ZAPATA.pdf", "_blank");
  }
}
function type() {
  typed = new Typed(".prot", {
    strings: strings[localStorage.lang],
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
}