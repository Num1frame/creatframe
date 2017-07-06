<?php
namespace app;
use \core\db;
use core\core;

class gj_search extends core {
    function index(){
        $this->assign('title','创家居');
        $this->display('gj_search');
    }
    function photo(){
        $src=$_FILES['url']['tmp_name'];
        $ext=explode(".",$_FILES['url']['name'])[1];
        $file_name=md5(time()) . '.' . $ext;
        $dist="public/upload/".$file_name;
        $name="/frame/public/upload/".$file_name;
        move_uploaded_file($src,$dist);
        echo $name;
    }
}