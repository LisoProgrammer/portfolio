let cloader = document.getElementById("cloader");
let http = new XMLHttpRequest();
http.open('GET', './menu/menu.json');
window.onload = () => {
    cloader.remove()
}
let state_ord_menu = 0;
//Cantidad maxima de productos para pedir
let cant_max = 10

//template ORDENAR
let capa_pri = document.getElementById("capa_pri")
let capa_sec = document.getElementById("capa_sec")
let name_prod_html = document.getElementById("name_prod")
let precio_prod_html = document.getElementById("precio")
let total_prod_html = document.getElementById("total")
let input_cantidad = document.getElementById("cant")
let input_code = document.getElementById("input_code")
let select_mesa = document.getElementById("select_mesa");
let alert_cantidad = document.getElementById("alert_cantidad")
//Se cargan las tarjetas con los datos de cada producto, clasificados por entradas, platosfuertes, postres y bebidas.
http.onreadystatechange = () => {
    if (http.readyState == 4 && http.status == 200) {
        menujson = JSON.parse(http.responseText);
        //console.log(menujson);

        for (let ent in menujson["entradas"]) {
            //console.log(ent)
            //console.log(menujson["entrada"][ent])
            generarTarjeta(menujson["entradas"], ent, "ent")
        }
        for (let ent in menujson["platosfuertes"]) {
            //console.log(ent)
            //console.log(menujson["entrada"][ent])
            generarTarjeta(menujson["platosfuertes"], ent, "plf")
        }
        for (let ent in menujson["postres"]) {
            //console.log(ent)
            //console.log(menujson["entrada"][ent])
            generarTarjeta(menujson["postres"], ent, "pos")
        }
        for (let ent in menujson["bebidas"]) {
            //console.log(ent)
            //console.log(menujson["entrada"][ent])
            generarTarjeta(menujson["bebidas"], ent, "beb")
        }

    }
}
http.send()

function generarTarjeta(cat, item, id_container) {
    //El json debe tener un array de objetos en cada categoria
    DIV_TYPE = document.getElementById(id_container)
    console.log(DIV_TYPE)
    console.log(DIV_TYPE)
    let divtar = document.createElement("div");
    divtar.className = "tar";
    divtar.id = cat[item]["code"] + "target"
    DIV_TYPE.appendChild(divtar);
    let div_subcontent = document.createElement("div");
    div_subcontent.className = "subcontent"
    divtar.appendChild(div_subcontent);
    let div_ctext = document.createElement("div");
    div_ctext.className = "ctext"
    div_subcontent.appendChild(div_ctext)
    let h4_name = document.createElement("h4");
    h4_name.innerText = cat[item]["nombre"]
    div_ctext.appendChild(h4_name)
    let p_des = document.createElement("p");
    p_des.innerText = cat[item]["descripcion"]
    p_des.className = "des"
    div_ctext.appendChild(p_des)
    let div_cprecio = document.createElement("div");
    div_cprecio.className = "cprecio"
    let p_$ = document.createElement("p");
    p_$.innerText = "$";
    let p_precio = document.createElement("p");
    p_precio.innerText = cat[item]["precio"]
    div_ctext.appendChild(div_cprecio)
    div_cprecio.appendChild(p_$)
    div_cprecio.appendChild(p_precio)
    let div_img = document.createElement("div");
    let img = document.createElement("img");
    img.src = cat[item]["img"]
    img.style.width = '100%'
    div_subcontent.appendChild(div_img)
    div_img.appendChild(img)
    div_img.className = "cimg"
    img.onerror = () => {
        img.src = "menu/assets/noimg.jpg";
    }
    let div_cbutton = document.createElement("div");
    div_cbutton.className = "cbutton";
    let button_order = document.createElement("button");
    button_order.className = "ord"
    button_order.id = cat[item]["code"]
    button_order.innerText = "ORDENAR";
    divtar.appendChild(div_cbutton)
    div_cbutton.appendChild(button_order)
    button_order.addEventListener("click", () => {
        //console.log("Hola, me haz presionado. Mi id es "+button_order.id);
        for (let it in cat) {
            //console.log(cat[it])
            //si el codigo del producto es igual al id del boton generado
            if (cat[it]["code"] == button_order.id) {
                //Mostrar el objeto del producto
                console.log(cat[it])
                //se accede al nombre del producto y se cambia el texto que tiene el html
                name_prod_html.innerText = cat[it]["nombre"]
                //se accede al precio del producto y se cambia el texto que tiene el html
                precio_prod_html.innerText = cat[it]["precio"]
                //se guarda el codigo en un input
                input_code.value = cat[it]["code"]
                //Se validan ciertos campos
                input_cantidad.addEventListener("input", () => {
                    if (input_cantidad.value.length == 0 || parseInt(input_cantidad.value) < 0) {
                        input_cantidad.value = 0;
                        //console.log(input_cantidad.value.length)
                    }

                    if (parseInt(input_cantidad.value) > cant_max) {
                        input_cantidad.value = cant_max;
                        alert_cantidad.innerText = "⚠ Haz sobrepasado la cantidad máxima (" + cant_max + ").";
                        alert_cantidad.className = "alert vis"
                    } else {
                        alert_cantidad.innerText = ""
                        alert_cantidad.className = "alert inv"
                    }
                    total_prod_html.innerText = parseInt(input_cantidad.value) * cat[it]["precio"]
                })
                //Se abre el menú de opciones de orden cuando se da clic en cierto prod
                capa_pri.className = "capa_pri capa_pri_act"
                capa_sec.className = "capa_sec capa_sec_act"

            }
        }
    }
    )
}
let button_closer = document.getElementById("closer_orden")

document.addEventListener("click", function (e) {
    let em = e.target;
    //Se cierra el menu de opciones de orden
    if (em.id == "capa_pri" || em.id == "closer_orden") {
        //cierra la capa
        capa_pri.className = "capa_pri";
        capa_sec.className = "capa_sec";
        input_cantidad.value = 0;
    }
})
//Se cargan las mesas en el select
let http_mesas = new XMLHttpRequest();
http_mesas.open('GET', './menu/mesas.json');
http_mesas.onreadystatechange = () => {

    if (http_mesas.readyState == 4 && http_mesas.status == 200) {
        mesas_json = JSON.parse(http_mesas.responseText)
        //console.log(mesas_json)
        for (let op in mesas_json["mesas"]) {
            let opt = document.createElement("option")
            opt.value = op
            opt.innerText = mesas_json["mesas"][op]
            select_mesa.appendChild(opt)
            console.log(op)
        }
    }
}
http_mesas.send()

let form_ordenar = document.getElementById("form-ordenar")
//Se validan los campos antes de enviar
form_ordenar.addEventListener("submit", (e) => {
    let alert_mesa = document.getElementById("alert_mesa");
    let alert_cantidad = document.getElementById("alert_cantidad");
    let select_mesa = document.getElementById("select_mesa");
    let input_cantidad = document.getElementById("cant");

    if (parseInt(select_mesa.value) === 0) {
        e.preventDefault();
        window.location.href = "#" + select_mesa.id;
        select_mesa.style.border = "1px solid #ff0000";
        alert_mesa.className = "alert vis";
        alert_mesa.innerText = "⚠ Seleccione una mesa.";
        //console.log("mesa = 0? "+(parseInt(select_mesa.value) == 0))
    } else {
        alert_mesa.className = "alert inv";
        alert_mesa.innerText = "";
        select_mesa.style.border = "none";
    }

    if (parseInt(input_cantidad.value) === 0) {
        e.preventDefault();
        //console.log("Cantidad = 0? "+(parseInt(input_cantidad.value) == 0))
        alert_cantidad.className = "alert vis";
        alert_cantidad.innerText = "⚠ Pida por lo menos uno.";
    } else {
        alert_cantidad.className = "alert inv";
        alert_cantidad.innerText = "";
        input_cantidad.value = parseInt(input_cantidad.value)
    }
    //Se escribe la fecha
    input_fecha = document.getElementById("datetime-local")
    input_fecha.value = fecha_formateada_iso()
    /*let alert_form_sent_equal = document.getElementById("alert_form_sent_qual")
    if (window.location.href == localStorage.getItem("url")) {
        alert_form_sent_equal.innerHTML = "⚠ Esta solicitud fue anteriormente procesada.";
        alert_form_sent_equal.className = "alert vis"
        setTimeout(() => {
            alert_form_sent_equal.innerHTML = "";
            alert_form_sent_equal.className = "alert inv"
        }, 3000)
        e.preventDefault()
    }
    localStorage.setItem("url", window.location.href)*/
});
function fecha_formateada_iso() {

    // Crear un objeto Date con la fecha y hora deseada
    let fecha = new Date(); // Los meses van de 0 a 11, por lo que 5 representa junio
    //Obtener los componentes de la fecha
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1; // Se le suma 1 porque los meses van de 0 a 11
    let dia = fecha.getDate();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();

    // Formatear los componentes para que tengan dos dígitos si es necesario
    mes = mes < 10 ? '0' + mes : mes;
    dia = dia < 10 ? '0' + dia : dia;
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    // Crear la cadena de fecha en el formato adecuado
    let fechaFormateada = año + '-' + mes + '-' + dia + 'T' + hora + ':' + minutos;

    // Establecer el valor del input
    return fechaFormateada;

}
