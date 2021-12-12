if (validation == true) {
    const https = new XMLHttpRequest()
    let valueEncNa = encodeURIComponent(form.name.value)
    let valueEncEM = encodeURIComponent(form.email.value)
    let valueEncMsg = encodeURIComponent(form.msg.value)
    https.open("GET", "https://pressly.000webhostapp.com/sourcest/response.php?name=" + valueEncNa + "&email=" + valueEncEM + "&msg=" + valueEncMsg, true)
        //console.log(valueEncNa + valueEncEM + valueEncMsg)
    https.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    https.onreadystatechange = () => {
        //console.log(request.response)
        //console.log(https.responseURL)
        //console.log(https.response)
        sgt.innerHTML = https.response
        if (https.status < 4) {
            sgt.innerHTML = "Hubo un error. Por favor, comprueba tu conexión a internet y vuelve a enviar el mensaje."
        }

    }
    https.send()
}