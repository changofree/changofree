<?php
    // Notificar todos los errores de PHP (ver el registro de cambios)
error_reporting(E_ALL);

// Notificar todos los errores de PHP
error_reporting(-1);


    require("xmlapi.php");

    
    $cpanel_host = 'changofree.com';
    $cpanel_user = 'qbhnsk0ayqvx';
    $subdomain = $_GET["marca"];
    $cpanel_pass = 'Cristian98!';
    
    $dir = 'public_html/'.$subdomain;
    
    $xmlapi = new xmlapi($cpanel_host);
    $xmlapi->password_auth($cpanel_user, $cpanel_pass);
    $xmlapi->set_http_client('curl');
    $xmlapi->set_port(2083);
    $xmlapi->set_output('json');
    $xmlapi->set_debug(1);
    
    $opts = array('domain'    => $subdomain,
                  'rootdomain'=> $cpanel_host,
                  'dir'        => $dir,
                  'disallowdot'=> '1');
    
    $result = $xmlapi->api2_query($cpanel_user, "SubDomain", "addsubdomain", $opts);
    
    if($result){
    
         $marca = $_GET["marca"];
        copy('../../base/index.html', '../../'.$marca.'/index.html');
        copy('../../base/assets', '../../'.$marca.'/assets');
        copy('../../.htaccess', '../../'.$marca.'/.htaccess');


        echo 'se ejecuto';    
    }
?>