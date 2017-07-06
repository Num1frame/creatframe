<?php
namespace core;
class core
{
    public $assigns = Array();

    static function run()
    {
        if (!isset($_SERVER['PATH_INFO']) || $_SERVER['PATH_INFO'] == '/' || $_SERVER['PATH_INFO'] == '') {
            $class_name = "\\app\\home";
            $fn = 'index';
            $o=new $class_name();
            $o->$fn();
        } else {
            $path_info = explode('/', substr($_SERVER['PATH_INFO'], 1));
            $class_name = "\\app\\" . $path_info[0];
            $fn = (isset($path_info[1])) ? $path_info[1] : 'index';
            if (file_exists("app/{$path_info[0]}.php")) {
                if(class_exists($class_name)) {
                    $page = new $class_name();;
                    if (method_exists($class_name, $fn)) {
                        $page->$fn();
                    } else {
                        include "app/views/404.html";
                    }
                }else{
                    include "app/views/404.html";
                }
            }else{
                include "app/views/404.html";
            }
        }
    }
    static function autoload($path)
    {
        include str_replace("\\", "/", $path) . '.php';
    }

    function assign($k, $v)
    {
        $this->assigns[$k] = $v;
    }

    function display($file)
    {
        if (count($this->assigns)) {
            extract($this->assigns);
        }
        include VIEW_PATH . $file . '.html';
    }

    function redirect($url)
    {
        header("Location:{$url}");
    }

    function json($data)
    {
        header('Content-Type:text/json');
        echo json_encode($data);
    }

}