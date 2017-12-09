<?php

if(!isset($_POST["submit"]))
{
	echo "error; you need to submit the form!";
}
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$message = $_POST["message"];

if(empty($name)||empty($visitor_email))
{
  echo "Name and email are mandatory!";
  exit;
}

if(IsInjected($visitor_email))
{
  echo "Bad email value!";
  exit;
}

$email_from = "mattconrad@gator4128.hostgator.com";
$email_subject = "New Message";
$email_body = "From: $name\n\n".
  "Message: $message\n\n".
	"Visitor Email: ".
$headers .= "$visitor_email \n";
$to = "matthew.conrad@outlook.com";

mail($to,$email_subject,$email_body,$headers);

header("Location: thank-you.html");
}

?>
