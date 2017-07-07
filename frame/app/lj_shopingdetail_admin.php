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

class lj_shopingdetail_admin extends core{
    function index(){
        $this->assign('title','商品详情管理');
        $this->display('lj_shopingdetail_admin');
    }
    function load(){
       $data=M()->query('select * from goodsdetail ORDER BY id DESC ');
       echo json_encode($data);
    }
    function add(){
        M()->query("insert into goodsdetail (name,pic,price,gid,content) VALUES ('{$_REQUEST['name']}','{$_REQUEST['pic']}','{$_REQUEST['price']}','{$_REQUEST['gid']}','{$_REQUEST['content']}')");
    }
    function del(){
        M()->query("delete from goodsdetail WHERE id='{$_REQUEST['id']}'");
    }
}