<?php
namespace app;
use \core\core;
use \core\db;

class grd_guanzhumanage extends core{
    function index(){
        $this->assign('title','我的关注管理');
        $this->display('grd_guanzhumanage');

    }
    function load(){
        $data=M()->query('select  * from guanzhu where uid=1');
        echo json_encode($data);

    }
    function add(){
        M()->query("insert into guanzhu (name,pic,num) values ('{$_REQUEST['name']}','{$_REQUEST['pic']}','{$_REQUEST['num']}')");
    }
    function del(){
        $id=$_REQUEST['id'];
        M()->query("delete from guanzhu where id={$id}");
    }
    function update(){
        $id=$_REQUEST['id'];
        $key=$_REQUEST['key'];
        $val=$_REQUEST['val'];
        $stmt=M()->pdo->prepare("update guanzhu set {$key}=? where id=?");
        $stmt->bindValue(1,$val);
        $stmt->bindValue(2,$id);
        $stmt->execute();
        echo $stmt->rowCount();
//        M()->querys("update d_index_manger set ('{$key}'='{$val}' where id={$id})");
    }






}

