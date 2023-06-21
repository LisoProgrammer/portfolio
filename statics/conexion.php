<?php
$server = "localhost";
$db = "id20025389_statics_porfolio";
$user = "root";
$pass = "";
$con = msqli_connect($server,$user,$pass,$db);
if(mysqli_connect_errno()){
    printf("Error en la conexión con la base de datos.",mysqli_connect_errno());
    mysqli_close($con);
    exit();
}
?>