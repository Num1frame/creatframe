<?php
namespace app;

use \core\db;
use \core\core;
class wtf_isboss extends core{
    function index(){
        if(!isset($_COOKIE['login'])){
            $this->display('wtf_boss');
        }else{
            header('location:/creatframe/frame/index.php/wtf_user_admin');
        }
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