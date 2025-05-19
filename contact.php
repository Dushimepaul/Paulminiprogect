<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $sujet = htmlspecialchars($_POST['sujet']);
    $message = htmlspecialchars($_POST['message']);

    $to = "dushimeyesupaulin@gmail.com"; // 🔁 remplace par ton email
    $subject = "Message depuis le portfolio - $sujet";
    $body = "Nom : $nom\nEmail : $email\nSujet : $sujet\n\nMessage :\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message envoyé avec succès.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de l\'envoi du message.'); window.history.back();</script>";
    }
}
?>
