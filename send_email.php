<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recolectamos los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Dirección de correo de destino (MailHog en este caso)
    $to = "someone@somemail.com";  // MailHog usará esta dirección ficticia

    // Asunto del correo
    $mail_subject = "Nuevo mensaje de contacto de: " . $name;

    // Cuerpo del mensaje
    $mail_body = "
        Nombre: $name
        Correo: $email
        Asunto: $subject

        Mensaje:
        $message
    ";

    // Cabeceras del correo
    $headers = "From: $email" . "\r\n" . 
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8" . "\r\n";

    // Enviar el correo (MailHog intercepta este correo)
    if (mail($to, $mail_subject, $mail_body, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Error al enviar el mensaje. Por favor, intenta nuevamente.";
    }
}
?>