<?php
define('CSS_PATH', '/creatframe/frame/public/css/');
define('JS_PATH', '/creatframe/frame/public/js/');
define('IMG_PATH', '/creatframe/frame/public/img/');
define('PHP_PATH', '/creatframe/frame/index.php/');


define('VIEW_PATH', 'app/views/');
define('DEBUG', true);
if (DEBUG) {
    include 'core/debug.php';
}
include 'core/function.php';
include 'core/core.php';

spl_autoload_register('\core\core::autoload');
\core\core::run();

