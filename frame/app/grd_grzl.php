<?php
namespace app;
use core\core;

class grd_grzl extends core{
    function index(){
        $datas =M()->query("select * from guanzhu where uid=1");
        $this->assign('data1',M('fensi')->selectALL());
        $this->assign('data',$datas);
        $this->assign('title','个人资料');
        $this->display('grd_grzl');

    }
    function delete(){




    }

}