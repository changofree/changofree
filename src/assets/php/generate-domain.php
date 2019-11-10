<?php
    // Notificar todos los errores de PHP (ver el registro de cambios)
error_reporting(E_ALL);

// Notificar todos los errores de PHP
error_reporting(-1);

    $email = $_GET["email"];
    $marca = $_GET["marca"];
    copy('../../base/index.html', '../../'.$marca.'/index.html');

    
    $subdomain = $_GET["marca"];

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
        <script src="http://changofree.com/base/runtime-es5.js" type="module"></script>
        <script src="http://changofree.com/base/runtime-es2015.js" nomodule></script>
        <script src="http://changofree.com/base/polyfills-es5.js" type="module"></script>
        <script src="http://changofree.com/base/polyfills-es2015.js" nomodule></script>
        <script src="http://changofree.com/base/main-es5.js" type="module"></script>
        <script src="http://changofree.com/base/main-es2015.js" nomodule></script>
    </body>
    
    </html>';
    
  
    file_put_contents('../../'.$marca.'/index.html', $dataIndex);

    header('Location: http://changofree.com/'.$marca.'/back/'.$email.'|'.$marca.'/login');

  
?>