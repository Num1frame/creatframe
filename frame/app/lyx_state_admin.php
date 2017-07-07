<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/8
 * Time: 0:07
 */
namespace app;
use \core\db;
use core\core;
class lyx_state_admin extends core{
    function index(){
        $this->assign('title','动态管理');
        $this->display('lyx_state_admin');
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