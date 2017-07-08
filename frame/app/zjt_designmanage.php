<?php

 namespace app;
 use \core\db;
 use core\core;

 class zjt_designmanage extends core
 {
     function index()
     {
         $this->assign('title', '设计师管理');
         $this->display('zjt_designmanage');
     }
     function load(){
         $data=M()->query('select * from zjt_design ORDER BY id DESC ');
         echo json_encode($data);
     }
     function del(){
         M()->query("delete from zjt_design WHERE id='{$_REQUEST['id']}'");
     }


     //添加

     function add(){
         print_r($_FILES);
         $src=$_FILES['pic']['tmp_name'];
         $ext=explode('.',$_FILES['pic']['name'])[1];
         $file_name=md5(time()).'.'.$ext;
         $dist='Public/upload/' .$file_name;
         $name='/Public/upload/' .$file_name;
         move_uploaded_file($src,$dist);
         include 'Core/Db.php';
         $store=new Db();
         $stmt =$store->pdo->prepare('insert into zjt_design (name,pic,content) values (?,?,?)');
         $stmt->bindValue(1,$_REQUEST['name']);
         $stmt->bindValue(2,$name);
         $stmt->bindValue(3,$_REQUEST['content']);
         $stmt->execute();
         $id=$store->pdo->lastInsertId();
         echo json_encode($id);
     }
 }