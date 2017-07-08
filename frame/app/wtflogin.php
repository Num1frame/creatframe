<?php
namespace app;

use \core\db;
use \core\core;
class wtflogin extends core{
    function index(){
        $this->display('wtf_loginmain');
    }
    function wtflogin1(){
        $this->display('wtf_login1');
    }
    function wtfregister(){
        $this->display('wtf_register');
    }
    function loginjc(){
        $account=$_REQUEST['account'];
        $password=$_REQUEST['password'];
        $data=M()->querys("select * from user WHERE account='{$account}'");
        if(!$data&&$password!=''){
            echo "erroy";
        }else if(!$data){
            echo 'no';
        }else{
            if(isset($data['password'])&&$data['password']==md5($password)){
                echo "ok";
            }else{
                echo "erroy";
            }
        }
    }
    function reguser(){
        $user=$_REQUEST['user'];
        $data=M()->querys("select * from user WHERE account ='{$user}'");
        if($data){
            echo "have";
        }else{
            echo "nohave";
        }
    }
    function regadd(){
        $user=$_REQUEST['user'];
        $pswd=md5($_REQUEST['password']);
        $data=M()->querys("insert into user (account,password) VALUES ('{$user}','{$pswd}')");
    }
    function logout(){
        unset($_COOKIE['login']);
        setcookie('login',null,"-1",'/');
        header('location:../wtf_isboss');
    }
}