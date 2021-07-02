<?php
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$mail = $_POST['email'];
$city = $_POST['city'];


$header = 'From: ' . $mail . " \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'aaron.plan@hotmail.com';
$asunto = 'Usuario interesado en GamingWorld';
if(mail($para, $asunto, utf8_decode($message), $header)){
    $message = "Mensaje enviado con exito."
} else {
    $message = "No se ha podido enviar el mensaje."
}

?>
