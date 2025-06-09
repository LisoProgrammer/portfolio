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
loadLanguage(localStorage.lang);
select.addEventListener("change", (e) => {
  const lang = e.target.value;
  loadLanguage(lang);
  localStorage.lang = lang;
});
