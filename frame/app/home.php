<?php
namespace app;
use \core\db;
use core\core;

class home extends core{
    function index(){
        $this->assign('title','创家居');
//        $this->display("home");
//        $this->display("d_home");
        $this->display("d_index");  //首页
    }

    function first(){
        $this->assign('title','闪屏页');
        $this->display("lhsplash");  //首页
    }
}
