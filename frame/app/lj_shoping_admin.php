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

class lj_shoping_admin extends core{
    function index(){
        $this->assign('title','商品列表管理');
        $this->display('lj_shopinglist_admin');
    }
    function load(){
       $data=M()->query('select * from goods ORDER BY id DESC ');
       echo json_encode($data);
    }
    function add(){
        M()->query("insert into goods (name,pic,price,designer,designerpic,label) VALUES ('{$_REQUEST['name']}','{$_REQUEST['pic']}','{$_REQUEST['price']}','{$_REQUEST['designer']}','{$_REQUEST['designerpic']}','{$_REQUEST['label']}')");
    }
    function del(){
        M()->query("delete from goods WHERE id='{$_REQUEST['id']}'");
    }
}