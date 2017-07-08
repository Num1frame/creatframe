<?php
namespace app;

use \core\db;
use \core\core;
class wtf_isboss extends core{
    function index(){
        $this->display('wtf_boss');
    }
    function checkbos(){
        $name=$_REQUEST['name'];
        $password=$_REQUEST['password'];
        $data=M()->querys("select * from boss where account = '$name'");
        if(isset($data['password'])&&$data['password']==$password){
            setcookie('login','true',time()+60*60*24*1,'/');
            echo "ok";
        }else{
            echo "erroy";
        }
    }
}