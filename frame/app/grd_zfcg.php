<?php
namespace app;
use core\core;
class grd_zfcg extends core{
    function index(){
        $this->assign('title','确定支付');
        $this->display('grd_zfcg');
    }

}