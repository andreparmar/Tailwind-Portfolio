<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="Name: $name \nContact Email: $email \n\nMessage: $message";
$recipient = "contact@andreparmar.com";
$subject = "New Form Response";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader);
// Redirect to
header("Location:index.html");
?>