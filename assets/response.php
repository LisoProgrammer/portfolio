<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

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
