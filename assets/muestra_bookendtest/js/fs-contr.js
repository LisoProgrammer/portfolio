button_fs = document.getElementById("fs-controller")
body = document.body
icon = document.getElementById("icon-fs")
state = 0
button_fs.addEventListener("click",()=>{
    if(state==0){
        //El modo pantalla completa está desactivado.
        //Entonces, se activa
        etate=1
        console.log(state)
        body.requestFullscreen()
        icon.src="resources/exit_fs.png"
    }
    if(state==1 && document.exitFullscreen){
        //Se desactiva
        state=0
        console.log(state)
        icon.src="resources/open_fs.png"
        body.exitFullscreen()
    }
    
})