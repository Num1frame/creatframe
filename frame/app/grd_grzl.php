<?php
namespace app;
use core\core;

class grd_grzl extends core{
    function index(){
        $this->assign('data1',M('fensi')->selectALL());
        $this->assign('data', M('guanzhu')->selectAll());
        $this->assign('title','个人资料');
        $this->display('grd_grzl');

    }


}