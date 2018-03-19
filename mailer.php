<?php
require 'vendor/autoload.php';

$from = new SendGrid\Email($_POST["name"], $_POST["email"]);
$to = new SendGrid\Email("Matthew Conrad", "matthew.conrad@outlook.com");
$content = new SendGrid\Content("text/plain", $_POST["message"]);
$mail = new SendGrid\Mail($from, $subject, $to, $content);

$apiKey = getenv("SENDGRID_API_KEY");
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
print_r($response->headers());
echo $response->body();