<?php
namespace app;
use core\core;
use core\db;
class d_home extends core{

    function index(){
        $data=M('d_person')->select();
        $this->assign('data',$data);
        $this->display('d_home');
    }

}
