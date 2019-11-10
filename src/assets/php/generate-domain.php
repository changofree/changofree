<?php
    // Notificar todos los errores de PHP (ver el registro de cambios)
error_reporting(E_ALL);

// Notificar todos los errores de PHP
error_reporting(-1);

    $email = $_GET["email"];
    $marca = $_GET["marca"];
    copy('../../base/index.html', '../../'.$marca.'/index.html');

    
    $cpanel_host = 'changofree.com';
    $cpanel_user = 'e0o4xmog4cxm';
    $subdomain = $_GET["marca"];
    $cpanel_pass = 'Cristian98!';

    $src = "../../copy_data";
    $dest = "../../".$marca;
    
    shell_exec("cp -r $src $dest");

    $dataIndex ='<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    
        <title>Tienda '.$marca.'</title>
        <base href="/'.$marca.'/">
        <meta name="description" content="Visitá mi negocio online '.$marca.'"/>
    
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="stylesheet" href="http://changofree.com/base/styles.css">
    </head>
    
    <body>
        <app-root></app-root>
        <script src="http://changofree.com/base/runtime.js" type="module"></script>
        <script src="http://changofree.com/base/runtime2.js" nomodule></script>
        <script src="http://changofree.com/base/polyfills.js" type="module"></script>
        <script src="http://changofree.com/base/polyfills2.js" nomodule></script>
        <script src="http://changofree.com/base/main.js" type="module"></script>
        <script src="http://changofree.com/base/main2.js" nomodule></script>
    </body>
    
    </html>';
    
  
    file_put_contents('../../'.$marca.'/index.html', $dataIndex);

  
?>