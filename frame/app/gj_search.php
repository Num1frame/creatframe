<?php
namespace app;
use \core\db;
use core\core;

class gj_search extends core {
    function index(){
        $data=M("gj_search1")->selectAll();
        $this->assign('data',$data);
        $this->assign('title','创家居');
        $this->display('gj_search');
    }
    function photo(){
        $src=$_FILES['url']['tmp_name'];
        $ext=explode(".",$_FILES['url']['name'])[1];
        $file_name=md5(time()) . '.' . $ext;
        $dist="public/gj_img/".$file_name;
        $name="/creatframe/frame/public/upload/".$file_name;
        move_uploaded_file($src,$dist);
        echo $name;
    }
    function search1(){
        $text=$_REQUEST['key'];
        $data=M()->query("select * from goods where name like '%{$_REQUEST['key']}%' ");
        echo json_encode($data);
    }

}