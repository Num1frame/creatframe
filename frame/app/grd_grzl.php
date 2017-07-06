<?php
namespace app;
use core\core;

class grd_grzl extends core{
    function index(){
        $this->assign('title','个人资料');
        $this->display('grd_grzl');

    }


}