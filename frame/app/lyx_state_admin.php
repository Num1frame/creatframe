<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/8
 * Time: 0:07
 */
namespace app;
use \core\db;
use core\core;
class lyx_state_admin extends core{
    function index(){
        $this->assign('title','动态管理');
        $this->display('lyx_state_admin');
    }
    function select(){
        $data=M("state")->selectAll();
        echo json_encode($data);
    }
    function add(){
        $atmt=M()->pdo->prepare("insert into state (name,title,content,img,uid,num1,num2,num3) VALUES (?,?,?,?,?,0,0,0)");
        $atmt->bindValue(1,$_REQUEST['name']);
        $atmt->bindValue(2,$_REQUEST['title']);
        $atmt->bindValue(3,$_REQUEST['content']);
        $atmt->bindValue(4,$_REQUEST['img']);
        $atmt->bindValue(5,$_REQUEST['radiobutton']);
        $atmt->execute();
    }
    function delete(){;
        $data=M()->query("delete from state where id={$_REQUEST['id']}");
    }
    function update(){
        $ziduan=$_REQUEST['ziduan'];
        $val=$_REQUEST['val'];
        $id=$_REQUEST['id'];
        $atmt=M()->pdo->prepare("update state set {$ziduan}= ? where id = ?");
        $atmt->bindValue(1,$val);
        $atmt->bindValue(2,$id);
        $atmt->execute();
    }
}