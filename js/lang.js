async function loadLanguage(lang) {
  try {
    const response = await fetch(`./lang/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
  } catch (error) {
    console.error("Error cargando idioma:", error);
  }
}

const select = document.getElementById("language-select");
select.addEventListener("change", (e) => {
  const lang = e.target.value;
  loadLanguage(lang);
});

// Cargar idioma por defecto
loadLanguage("es");
