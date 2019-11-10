<?php
    // Notificar todos los errores de PHP (ver el registro de cambios)
error_reporting(E_ALL);

// Notificar todos los errores de PHP
error_reporting(-1);

    $email = $_GET["email"];
  //  require("xmlapi.php");

    
    $cpanel_host = 'changofree.com';
    $cpanel_user = 'e0o4xmog4cxm';
    $subdomain = $_GET["marca"];
    $cpanel_pass = 'Cristian98!';
    
    $dir = 'public_html/'.$subdomain;
  /**  
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
    **/
   
    $dir = "../../".$subdomain;
    
    

    //$f = fopen(".htaccess", "a+");
   /** fwrite($f, '
        RewriteEngine on
        RewriteCond %{HTTP_HOST} ^(www\.)?changofree\.com$
        RewriteRule ^blog/(.*)$ http://'.$subdomain.'.changofree.com/$1 [L,QSA,R=301]
        
        RewriteCond %{HTTP_HOST} ^'.$subdomain.'\.changofree\.com$
        RewriteCond %{REQUEST_URI} !^'.$subdomain.'/
        RewriteRule ^(.*)$ /'.$subdomain.'/$1 [L,QSA]');
   // fclose($f);
    
   
 //   $content_to_write = ;
    
    if( is_dir($dir) === false )
    {
        mkdir($dir);
    }
    
    

    $file = fopen($dir . '/' . $file_to_write,"w");
    
    // a different way to write content into
    // fwrite($file,"Hello World.");
    
    fwrite($f, $content_to_write);
    
    // closes the file
    fclose($file);

    **/
   // if($result){
        print_r($result);
        $marca = $_GET["marca"];
       

        $src = "../../base/assets";
        $dest = "../../".$marca;
    
        shell_exec("cp -r $src $dest");
     copy('../../base/index.html', '../../'.$marca.'/index.html');
        copy('../../.htaccess', '../../'.$marca.'/.htaccess');
  //  sleep(3);
       echo '<script type="text/javascript">';
       // echo 'window.location.href= "http://changofree.com/'.$marca.'./back/'.$email.'|'.$marca.'/login"';
        echo '</script>';
        echo '<noscript>';
        echo '<meta http-equiv="refresh" content="0;url='.$url.'" />';
        echo '</noscript>'; exit;
 //   }else{
//        echo 'error';
  //  }
?>