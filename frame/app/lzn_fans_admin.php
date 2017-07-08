<?php
namespace app;
use \core\db;
use core\core;

class lzn_fans_admin extends core{
    function index(){
        $this->assign('title','粉丝管理');
        $this->display('lzn_fans_admin');
    }
    function load(){
        $data=M()->query('select * from t_fans ORDER BY id DESC ');
        echo json_encode($data);
    }
    function add(){
        $pswd=md5($_REQUEST['pic']);
        M()->query("insert into t_fans (name,pic) VALUES ('{$_REQUEST['name']}','{$pswd}')");
    }
    function del(){
        M()->query("delete from t_fans WHERE id='{$_REQUEST['id']}'");
    }
}
