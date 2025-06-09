function get_semester_by_lang() {
  let ordinarios_es = [
    "primer",
    "segundo",
    "tercer",
    "cuarto",
    "quinto",
    "sexto",
    "septimo",
    "octavo",
    "noveno",
    "décimo",
    "[editar código fuente date.js]",
  ];
  let ordinarios_en = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "[edit source code date.js]",
  ];
  let f = new Date();
  let mes = f.getMonth();
  let day = f.getDate();
  let year_nac = 2005;
  let mes_nac = 2 - 1;
  let day_nac = 23;
  let year_act = f.getFullYear();

  let semestre = (mes + 1) / 6;
  let semestre_completed = Math.floor(semestre);
  let year_ini = 2022;

  //x es el año actual
  //((x-2022)*12)/6+1
  let s_carr = Math.floor(((year_act - year_ini) * 12) / 6);
  s_carr = s_carr + semestre_completed;
  //s_carr =

  let age = year_act - year_nac;
  console.log(age);
  if (mes < mes_nac) {
    age--;
  } else if (mes == mes_nac) {
    if (day < day_nac) {
      age--;
    }
  }
  let html_scape = document.createElement("span");

  let span_s_tr = document.getElementById("s_tr") || html_scape;

  let span_s_or = document.getElementById("s_or") || html_scape;

  let span_s_carr = document.getElementById("s_carr") || html_scape;

  let span_s_carr_or = document.getElementById("s_carr_or") || html_scape;

  let span_age = document.getElementById("ag") || html_scape;
  let lang = localStorage.lang;
  if (lang == "en") {
    span_s_tr.innerHTML = semestre_completed;
    span_s_or.innerHTML = ordinarios_en[semestre_completed] + " semestre";
    span_s_carr.innerHTML = s_carr;
    span_s_carr_or.innerHTML = ordinarios_en[s_carr - 1] + " semestre";
    span_age.innerHTML = age;
  } else {
    span_s_tr.innerHTML = semestre_completed;
    span_s_or.innerHTML = ordinarios_es[semestre_completed] + " semestre";
    span_s_carr.innerHTML = s_carr;
    span_s_carr_or.innerHTML = ordinarios_es[s_carr - 1] + " semestre";
    span_age.innerHTML = age;
  }
}
