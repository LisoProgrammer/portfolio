<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
if(isset($_GET)){
    $name = $_GET["name"];
    $email = $_GET["email"];
    $msg = "Soy: $name. \nEmail: $email. \nMensaje:".$_GET["msg"];
    $send = mail("zlisandro5@gmail.com","MENSAJE NUEVO DESDE PORTAFOLIO WEB",$msg);
    if($send){
        echo "Tu mensaje se envió con éxito.";
    }else{
        echo "Hubo un error en el envío del mensaje. Por favor vuelve a enviar el mensaje sin recargar la página.";
    }
}
?>