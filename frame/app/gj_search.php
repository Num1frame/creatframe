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
    function shopinglist2(){
        $datas =M()->query("select * from goods where '$_REQUEST[num1]'< price AND '$_REQUEST[num2]'> price AND label='$_REQUEST[num3]'");
        $this->assign('data',$datas);
        $this->assign('title','商品列表');
        $this->display('lj_shopinglist');
    }
    function shopinglist3(){
        $datas =M()->query("select * from goods where label='$_REQUEST[num3]'");
        $this->assign('data',$datas);
        $this->assign('title','商品列表');
        $this->display('lj_shopinglist');
    }
    function shopinglist4(){
        $datas =M()->query("select * from goods where '$_REQUEST[num1]'< price AND label='$_REQUEST[num3]'");
        $this->assign('data',$datas);
        $this->assign('title','商品列表');
        $this->display('lj_shopinglist');
    }

}