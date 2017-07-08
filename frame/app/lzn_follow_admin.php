<?php
namespace app;
use \core\db;
use core\core;

class lzn_follow_admin extends core{
    function __construct()
    {
        check_login();
    }
    function index(){
        $this->assign('title','关注管理');
        $this->display('lzn_follow_admin');
    }
    function load(){
        $data=M()->query('select * from t_follow ORDER BY id DESC ');
        echo json_encode($data);
    }
    function add(){
        $pswd=md5($_REQUEST['pic']);
        M()->query("insert into t_follow (name,pic) VALUES ('{$_REQUEST['name']}','{$pswd}')");
    }
    function del(){
        M()->query("delete from t_follow WHERE id='{$_REQUEST['id']}'");
    }
}
