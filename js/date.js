ordinarios = ["primer","segundo","tercer","cuarto","quinto","sexto","septimo","octavo","noveno","décimo","[editar código fuente date.js]"];
f = new Date()
mes = f.getMonth()
day = f.getDate()
year_nac = 2005
mes_nac = 2-1
day_nac = 23
year_act = f.getFullYear()

semestre = (mes+1) / 6
semestre_completed = Math.floor(semestre)
year_ini = 2022

//x es el año actual
//((x-2022)*12)/6+1
s_carr = Math.floor((((year_act-year_ini)*12)/6))
s_carr = s_carr + semestre_completed
//s_carr = 

age = (year_act - year_nac)
console.log(age)
if(mes<mes_nac){
    age--
}else if(mes==mes_nac){
    if(day<day_nac){
        age--
    }
}
html_scape = document.createElement("span")

span_s_tr = document.getElementById("s_tr") || html_scape

span_s_or = document.getElementById("s_or") || html_scape

span_s_carr = document.getElementById("s_carr") || html_scape

span_s_carr_or = document.getElementById("s_carr_or") || html_scape

span_age = document.getElementById("ag") || html_scape

span_s_tr.innerHTML=semestre_completed
span_s_or.innerHTML=ordinarios[semestre_completed]+" semestre"
span_s_carr.innerHTML=s_carr
span_s_carr_or.innerHTML=ordinarios[s_carr-1]+" semestre"
span_age.innerHTML=age