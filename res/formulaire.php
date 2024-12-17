<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $recaptcha_secret = '6LePC54qAAAAADuskq2-ZnnNRo3s0pt3UCJUIUlp';
    $recaptcha_response = $_POST['g-recaptcha-response'];

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response");
    $response_keys = json_decode($response, true);

    if (intval($response_keys["success"]) !== 1) {
        echo 'reCAPTCHA verification failed. Please try again.';
    } else {
        // Process the form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        
        // Here, handle the form submission, like sending an email
        echo 'Form submitted successfully.';
    }
}
?>
