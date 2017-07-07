<?php
namespace app;
use \core\db;
use core\core;

class home extends core{
    function index(){
        $this->assign('data', M('d_homelist')->selectAll());
        $this->assign('title','创家居');
//        $this->display("home");
//        $this->display("d_home");
        $this->display("d_index");  //首页
    }

    function first(){
        $this->assign('title','闪屏页');
        $this->display("lhsplash");  //首页
    }
    function d_shoplist(){
        $id=$_REQUEST['id'];
        $data=M()->query("select * from goods where homeid=".$id);
//        dump($data);
        $this->assign('data','$data');
        $this->display("lj_shopinglist");
    }
}
