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