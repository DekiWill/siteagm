<?php

    //var_dump($_POST);
    //die();
    $to = "nayjaras.watanabe@gmail.com";
    $from = 'contato@kamikazetokko.gq';
    $name = $_POST['name'];
    $headers = "From: $from";
    $subject = "You have a message from your Right Firm.";

    $fields = array();
    $fields["name"] = "name";
    $fields["email"] = "email";
    $fields["phone"] = "phone";
    $fields["message"] = "message";
    

    $body = "Here is the message you got:\n\n"; 
    foreach($fields as $a => $b)[   $body .= sprintf("%20s: %s\n",$b,$_POST[$a])]; 

    $send = mail($to, $subject, $body, $headers);
//var_dump($send);
?>