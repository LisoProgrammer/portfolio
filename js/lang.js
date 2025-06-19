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
if (!localStorage.lang) {
  localStorage.lang = "es";
}
const select = document.getElementById("langSelector");
select.value = localStorage.lang;
let button_download_cv = document.getElementById("btn_g");
button_download_cv.addEventListener("click",download_cv)
loadLanguage(localStorage.lang);
select.addEventListener("change", (e) => {
  const lang = e.target.value;
  loadLanguage(lang);
  localStorage.lang = lang;
  button_download_cv.addEventListener("click", download_cv);
});

function download_cv(){
  if(localStorage.lang == "en"){
    window.open("assets/cv/en/CVLISANDRO_ZAPATA.pdf", "_blank");
  }else{
    window.open("assets/cv/es/CVLISANDRO_ZAPATA.pdf", "_blank");
  }
}
