<?php 

  if(isset($_GET['createAccountImage']))
if(isset($_GET['submit'])){
  echo $firstName = $_GET['firstname'];
  echo $lastName = $_GET['lastname'];
  echo $email = $_GET['email'];
  $password = $_GET['password'];
  $phone = $_GET['phone'];
}

  $data = array(
        'token' => 'sadfhjka;sdfhj;asdfjh;hadfshj',
        'firstName' => $firstName,
        'lastName' => $lastName,
        'email' => $email,
        'password' => $password,
        'phone' => $phone

    );


  $postvars = http_build_query($data) . "\n";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://api.com/foo/bar?');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  $server_output = curl_exec ($ch);

  curl_close ($ch);

 ?> 