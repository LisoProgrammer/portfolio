let button_fs = document.getElementById("fs-controller")
let warning_popup = document.getElementsByClassName("popup")[0];
let body = document.body
let icon = document.getElementById("icon-fs")
let state = 0

button_fs.addEventListener("click",()=>{
    if(state==0){
        //El modo pantalla completa está desactivado.
        //Entonces, se activa
        state=1
        console.log(state)
        body.requestFullscreen()
        icon.src="resources/exit_fs.png"
        document.body.style.overflowY = "scroll";
        warning_popup.style.zIndex = -2;
        warning_popup.style.opacity = 0;
    }
    else if(state==1 && document.exitFullscreen){
        //Se desactiva
        state=0
        console.log(state)
        icon.src="resources/open_fs.png"
        document.body.style.overflowY = "hidden";
        warning_popup.style.zIndex = 2;
        warning_popup.style.opacity = 1;
        document.exitFullscreen()
    }
    
})