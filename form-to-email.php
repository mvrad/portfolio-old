<?php
if(!isset($_POST["submit"]))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$message = $_POST["message"];

//Validate first
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
//Send the email.
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header("Location: thank-you.html");

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
