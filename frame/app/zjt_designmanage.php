<?php

 namespace app;
 use \core\db;
 use core\core;

 class zjt_designmanage extends core
 {
     function __construct()
     {
         check_login();
     }
     function index()
     {
         $this->assign('title', '设计师管理');
         $this->display('zjt_designmanage');
     }
     //展示数据
     function load(){
         $data=M()->query('select * from zjt_design ORDER BY id DESC ');
         echo json_encode($data);
     }
     function del(){
         M()->query("delete from zjt_design WHERE id='{$_REQUEST['id']}'");
     }

     //添加

     function zjt_add(){
         $src=$_FILES['pic']['tmp_name'];
         $ext=explode('.',$_FILES['pic']['name'])[1];
         $file_name=md5(time()).'.'.$ext;
         $dist='public/upload/' .$file_name;
         $name='/creatframe/frame/public/upload/' .$file_name;
         move_uploaded_file($src,$dist);
         $stmt =M()->query("insert into zjt_design (name,pic,content) values ('$_REQUEST[name]','$name','$_REQUEST[content]')");
     }

     function zjt_up(){
         /*$key=$_REQUEST['key'];
         $value=$_REQUEST['value'];
         $id=$_REQUEST['id'];
         $data=M()->query("update zjt_design set ('{$key}'='{$value}' where id={$id}) ");*/
         $id=$_REQUEST['id'];
         $key=$_REQUEST['key'];
         $val=$_REQUEST['value'];
         $stmt=M()->pdo->prepare("update zjt_design set {$key}=? where id=?");
         $stmt->bindValue(1,$val);
         $stmt->bindValue(2,$id);
         $stmt->execute();
         echo $stmt->rowCount();
     }
 }