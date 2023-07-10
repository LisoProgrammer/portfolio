let cloader = document.getElementById("cloader");
let http = new XMLHttpRequest();
http.open('GET','./menu/menu.json');
http.onreadystatechange = () => {
    if (http.readyState == 4 && http.status == 200){
        menujson = JSON.parse(http.responseText);
        //console.log(menujson);
        categories = []
        for(let cat in menujson){
            categories.push(menujson[cat])
        }
        cloader.remove()
        //console.log(categories)
        for(let i in categories){
            //console.log(categories[i])
            for(prod in categories[i]){
                //console.log("categories[prod]")
                //console.log(categories[prod].length)
                for (let j = 0; j < categories[prod].length; j++) {
                    //console.log(categories[prod][j])
                    DIV_TYPE = document.getElementById("type"+i)
                    console.log(DIV_TYPE)
                    //console.log(DIV_TYPE)
                    /*let divtar = document.createElement("div");
                    divtar.className = "tar";
                    divtar.id = categories[prod][j]["code"]
                    DIV_TYPE.appendChild(divtar);*/

                    /*let div_subcontent = document.createElement("div");
                    let div_ctext = document.createElement("div");
                    let h4_name = document.createElement("div");
                    h4_name.innerText = categories[prod][j]["nombre"]
                    let p_des = document.createElement("p");
                    p_des.innerText = categories[prod][j]["descripcion"]
                    let div_cprecio = document.createElement("div");
                    let p_$ = document.createElement("p");
                    p_$.innerText="$";
                    let p_precio = document.createElement("p");
                    p_precio.innerText = categories[prod][j]["precio"]
                    let div_img = document.createElement("div");
                    let img = document.createElement("img");
                    img.src = categories[prod][j]["img"]
                    let div_cbutton = document.createElement("div");
                    let button_order = document.createElement("button");
                    button_order.innerText = "ORDENAR";*/
                }
            }
        }
            
    }
}
http.send()
