<?php
define('CSS_PATH', '/frame/public/css/');
define('JS_PATH', '/frame/public/js/');
define('IMG_PATH', '/frame/public/img/');
define('VIEW_PATH', 'app/views/');
define('PHP_PATH', '/frame/index.php/');
define('DEBUG', true);
if (DEBUG) {
    include 'core/debug.php';
}
include 'core/function.php';
include 'core/core.php';

spl_autoload_register('\core\core::autoload');
\core\core::run();

