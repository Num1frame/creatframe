<?php
namespace app;
use \core\core;
use \core\db;

//更新
class d_index_manger extends core{
    function index(){
        $this->assign('title','主页商品分类');
        $this->display('d_index_manger');
    }
    function load(){
        $data=M()->query('select  * from d_homelist order by id desc');
        echo json_encode($data);

    }
    function add(){
        M()->query("insert into d_homelist (pic) values ('{$_REQUEST['pic']}')");
    }


    function del(){
        $id=$_REQUEST['id'];
        M()->query("delete from d_homelist where id={$id}");
    }
    function update(){
        $id=$_REQUEST['id'];
        $key=$_REQUEST['key'];
        $val=$_REQUEST['val'];
        $stmt=M()->pdo->prepare("update d_homelist set {$key}=? where id=?");
        $stmt->bindValue(1,$val);
        $stmt->bindValue(2,$id);
        $stmt->execute();
        echo $stmt->rowCount();
//        M()->querys("update d_index_manger set ('{$key}'='{$val}' where id={$id})");
    }


}