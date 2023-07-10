let cloader = document.getElementById("cloader");
let http = new XMLHttpRequest();
http.open('GET','./menu/menu.json');
window.onload = () =>{
    cloader.remove()
}
http.onreadystatechange = () => {
    if (http.readyState == 4 && http.status == 200){
        menujson = JSON.parse(http.responseText);
        console.log(menujson);
        
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
}

