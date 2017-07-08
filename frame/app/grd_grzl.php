<?php
namespace app;
use core\core;
//use core\db;
class grd_grzl extends core{
    function index(){
        $datas =M()->query("select * from guanzhu where uid=1");
        $this->assign('data1',M('fensi')->selectALL());
        $this->assign('data',$datas);
        $this->assign('title','个人资料');
        $this->display('grd_grzl');

    }
    function delete1(){
        $id=$_REQUEST['id'];
        M()->query("delete from guanzhu WHERE id=".$id);
    }
    function delete(){
        $id=$_REQUEST['id'];
        M()->query("delete from fensi WHERE id=".$id);

//        include 'Core/Db.php';
//        $db=new Db();
//        $stmt=$db->pdo->prepare("delete from guanzhu where id ='{$_REQUEST['id']}'");
////        $stmt->bindValue(1,$_REQUEST['id']);
//        $stmt->execute();
//        if($stmt->rowCount()){
//            echo 'ok';
//        }else{
//            echo 'error';
//        }

//            include 'Core/Db.php';
//            $db=new Db();
//            $datas =M()->query("delete * from guanzhu where id=".$_REQUEST['id']);
//            $this->assign('data',$datas);
//            dump(data);



//        echo $stmt->rowCount();//受影响的行数  值为 0 或者 1




    }

}