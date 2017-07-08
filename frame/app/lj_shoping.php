<?php
namespace app;
use \core\db;
use core\core;

class lj_shoping extends core{
    function index(){
        $o = M('goods')->selectAll();
        $this->assign('data',$o);
        $this->assign('title','购物车');
        $this->display('lj_shoping');
    }
    function dingdan(){
        $o = M('goods')->selectAll();
        $this->assign('data',$o);
        $this->assign('title','我的订单');
        $this->display('lj_dingdan');
    }
    function shopinglistall(){
        $o = M('goods')->selectAll();
        $this->assign('data',$o);
        $this->assign('title','商品列表');
        $this->display('lj_shopinglist');
    }
    function shopinglist(){
        $datas =M()->query("select * from goods where name like '%{$_REQUEST['key']}%' ");
        $this->assign('data',$datas);
        $this->assign('title','商品列表');
        $this->display('lj_shopinglist');
    }
    function shopinglist1(){
    $datas =M()->query("select * from goods where label=".$_REQUEST['id']);
    $this->assign('data',$datas);
    $this->assign('title','商品列表');
    $this->display('lj_shopinglist');
    }
    function loading(){
        $o = M('goods')->selectAll();
        $data = json($o);
    }
    function shopingdetail(){
        $datas =  M('goods')->selectAll();
        $this->assign('data', $datas);

        $this->assign('title','商品详情');
        $this->display('lj_shopingdetail');
    }

    function byedetail(){
        $this->assign('title','购买详情');
        $this->display('lj_byedetail');
    }


}