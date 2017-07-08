<?php
/**
 * Created by PhpStorm.
 * User: WTF
 * Date: 2017/7/5
 * Time: 16:29
 */
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
            echo "ok";
        }else{
            echo "erroy";
        }
    }
}