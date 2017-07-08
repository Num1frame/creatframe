<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/5
 * Time: 14:56
 */
namespace app;
use \core\core;
class lyx_state extends core{
//    动态
    function lyx_state(){
        $state=M('state')->selectAll();
        $this->assign('title','动态');
        $this->assign('state',$state);
        $this->display("lyx_state");

    }
    function lyx_guanzhu(){
        $id= $_REQUEST['id'];
        M()->query("update state set guanzhu = '1' WHERE id='{$id}'");
    }
//    详情
    function lyx_particulars(){
        $id=$_REQUEST["id"];
        $state=M()->query("select * from state where id=$id");
        $this->assign('state',$state);
        $this->assign('title','详情');
        $this->display("lyx_particulars");

    }
    function lyx_publish(){
        $this->assign('title','发表');
        $this->display("lyx_publish");
    }
    function lyx_atten(){
        $this->assign('title','我的关注');
        $state=M()->query("select * from state where guanzhu=1");
        $this->assign('state',$state);
        $this->display("lyx_atten");
    }
    function lyx_pay(){
        $this->assign('title','确定支付');
        $this->display("lyx_pay");
    }
}
