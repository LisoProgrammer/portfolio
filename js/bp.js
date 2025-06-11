window.addEventListener("storage",()=>{
    sgt.className = "code error";
    let lang = localStorage.lang;
    if(lang == "en"){
        sgt.innerHTML = messages_en["alternative_message_error"];
    }else{
        sgt.innerHTML = messages_es["alternative_message_error"];
    }
    
    setTimeout(() => {
        localStorage.int = 0
        window.location.reload()
        localStorage.setItem("e",0);
    }, 3000)
})