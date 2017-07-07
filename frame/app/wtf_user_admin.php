<?php
/**
 * Created by PhpStorm.
 * User: WTF
 * Date: 2017/7/7
 * Time: 10:42
 */
namespace app;
use \core\db;
use core\core;

class wtf_user_admin extends core{
    function index(){
        $this->assign('title','用户管理');
        $this->display('wtf_user_admin');
    }
    function load(){
       $data=M()->query('select * from user ORDER BY id DESC ');
       echo json_encode($data);
    }
    function add(){
        $pswd=md5($_REQUEST['password']);
        M()->query("insert into user (account,password) VALUES ('{$_REQUEST['account']}','{$pswd}')");
    }
    function del(){
        M()->query("delete from user WHERE id='{$_REQUEST['id']}'");
    }
}