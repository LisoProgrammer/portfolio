button_fs = document.getElementById("fs-controller")
body = document.body
icon = document.getElementById("icon-fs")
state = 0
button_fs.addEventListener("click",()=>{
    if(state==0){
        //El modo pantalla completa está desactivado.
        //Entonces, se activa
        etate=1
        body.requestFullscreen()
        icon.src="exit_fs.png"
    }else{
        //Se desactiva
        state=0
        icon.src="open_fs.png"
        body.exitFullscreen()
    }
})