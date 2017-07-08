<?php
namespace app;
use \core\db;
use core\core;

class zjt_design extends core{
    function index(){
        $datas = M('zjt_design')->selectAll();
        $this->assign('data',$datas);

        $this->assign('title','设计师');
        $this->display("zjt_design");
    }
    function zjt_details(){
        //查询uid=id相同的 设计师
        $datas=M()->querys("select * from zjt_details where uid='$_REQUEST[id]'");
        $this->assign('name',$datas['name']);
        $this->assign('content',$datas['content']);
        $this->assign('notice',$datas['notice']);
        $this->assign('fans',$datas['fans']);


        $this->assign('title','设计师详情');
        $this->display("zjt_details");
    }
    function zjt_info(){
        $this->assign('title','消息');
        $this->display("zjt_info");
    }
}