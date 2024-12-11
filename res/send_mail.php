<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Préparez l'email
    $to = "lucasdjtpro@gmail.com";
    $mail_subject = "Nouvelle demande de contact";
    $mail_body = "Nom Prénom: $name\nEmail: $email\nTitre de la demande: $subject\nMessage: $message";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-type: text/plain; charset=UTF-8" . "\r\n";

    // Stocker les données dans un fichier demande.txt
    $file = fopen("demande.txt", "a");
    fwrite($file, "Nom Prénom: " . $name . "\n");
    fwrite($file, "Email: " . $email . "\n");
    fwrite($file, "Titre de la demande: " . $subject . "\n");
    fwrite($file, "Message: " . $message . "\n");
    fwrite($file, "-------------------------------\n");
    fclose($file);

    // Envoyer l'email
    if (mail($to, $mail_subject, $mail_body, $headers)) {
        echo "Votre message a été envoyé.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre message.";
    }
} else {
    echo "Méthode de requête non supportée.";
}
?>
