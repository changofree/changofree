<?php
    $marca = $_GET["marca"];
    copy('../../base/index.html', '../../'.$marca.'/index.html');
    copy('../../base/assets', '../../'.$marca.'/assets');
    copy('../../.htaccess', '../../'.$marca.'/.htaccess');


?>