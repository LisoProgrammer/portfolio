let cloader = document.getElementById("cloader");
let http = new XMLHttpRequest();
http.open('GET','./menu/menu.json');
window.onload = () =>{
    cloader.remove()
}
let state_ord_menu = 0;
//template ORDENAR
let capa_pri = document.getElementById("capa_pri")
let capa_sec = document.getElementById("capa_sec")
let name_prod_html = document.getElementById("name_prod")
let precio_prod_html = document.getElementById("precio")
let total_prod_html = document.getElementById("total")
let input_cantidad = document.getElementById("cant")
http.onreadystatechange = () => {
    if (http.readyState == 4 && http.status == 200){
        menujson = JSON.parse(http.responseText);
        //console.log(menujson);
        
        for(let ent in menujson["entradas"]){
            console.log(ent)
            //console.log(menujson["entrada"][ent])
            generarTarjeta(menujson["entradas"],ent,"ent")
        }
        for(let ent in menujson["platosfuertes"]){
            console.log(ent)
            //console.log(menujson["entrada"][ent])
            generarTarjeta(menujson["platosfuertes"],ent,"plf")
        }
        for(let ent in menujson["postres"]){
            console.log(ent)
            //console.log(menujson["entrada"][ent])
            generarTarjeta(menujson["postres"],ent,"pos")
        }
        for(let ent in menujson["bebidas"]){
            console.log(ent)
            //console.log(menujson["entrada"][ent])
            generarTarjeta(menujson["bebidas"],ent,"beb")
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
    p_$.innerText="$";
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
    img.onerror = () =>{
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
    button_order.addEventListener("click",()=>{
        console.log("Hola, me haz presionado. Mi id es "+button_order.id);
        for(let it in cat){
            //console.log(cat[it])
            //si el codigo del producto es igual al id del boton generado
            if(cat[it]["code"]==button_order.id){
                //Mostrar el objeto del producto
                console.log(cat[it])
                name_prod_html.innerText = cat[it]["nombre"]
                precio_prod_html.innerText = cat[it]["precio"]
                input_cantidad.addEventListener("input",()=>{
                    if(input_cantidad.value.length == 0){
                        input_cantidad.value = 0;
                        //console.log(input_cantidad.value.length)
                    }
                    total_prod_html.innerText = parseInt(input_cantidad.value) * cat[it]["precio"]
                    
    
                })
                function total(){
                    
                }
                capa_pri.className = "capa_pri capa_pri_act"
                capa_sec.className = "capa_sec capa_sec_act"
                
            }
        }
    }
    )
}
let button_closer = document.getElementById("closer_orden")

document.addEventListener("click", function(e) {
    let em = e.target;
    if (em.id == "capa_pri" || em.id == "closer_orden") {
        //cierra la capa
        capa_pri.className = "capa_pri";
        capa_sec.className = "capa_sec";
        input_cantidad.value = 0;
    }
})


