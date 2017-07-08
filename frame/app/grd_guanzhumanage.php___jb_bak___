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
        $data=M()->query('select  * from guanzhu');
        echo json_encode($data);
    }
    function add(){
        dump($_FILES);
        $src=$_FILES['pic']['tmp_name'];
        $ext=explode('.',$_FILES['pic']['name'])[1];
        $file_name=md5(time()).'.'.$ext;
        $dist='public/upload/'.$file_name;
        $name1='/creatframe/frame/public/upload/'.$file_name;
        move_uploaded_file($src, $dist);



        M()->query("insert into guanzhu (name,pic,num) values ('{$_REQUEST['name']}','$name1','{$_REQUEST['num']}')");
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

