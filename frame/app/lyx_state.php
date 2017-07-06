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
    function lyx_state(){
        $this->assign('title','动态');
        $this->display("lyx_state");
    }
    function lyx_particulars(){
        $this->assign('title','详情');
        $this->display("lyx_particulars");
    }
    function lyx_publish(){
        $this->assign('title','发表');
        $this->display("lyx_publish");
    }
    function lyx_atten(){
        $this->assign('title','我的关注');
        $this->display("lyx_atten");
    }
    function lyx_pay(){
        $this->assign('title','确定支付');
        $this->display("lyx_pay");
    }
}
