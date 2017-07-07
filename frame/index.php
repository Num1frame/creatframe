<?php
define('CSS_PATH', '/creatframe/frame/public/css/');
define('JS_PATH', '/creatframe/frame/public/js/');
define('IMG_PATH', '/creatframe/frame/public/img/');
define('PHP_PATH', '/creatframe/frame/index.php/');
<<<<<<< HEAD
//define('CSS_PATH', '/creatframe/frame/public/css/');
//define('JS_PATH', '/creatframe/frame/public/js/');
//define('IMG_PATH', '/creatframe/frame/public/img/');
//define('PHP_PATH', '/creatframe/frame/index.php/');
=======
>>>>>>> 42f4a55f57aef9fff009a0e268adae7e596c9af1

define('VIEW_PATH', 'app/views/');
define('DEBUG', true);
if (DEBUG) {
    include 'core/debug.php';
}
include 'core/function.php';
include 'core/core.php';

spl_autoload_register('\core\core::autoload');
\core\core::run();

