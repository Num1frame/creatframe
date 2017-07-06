<?php
namespace app;
use \core\db;
use core\core;

class lzn_my extends core{
    function index(){
        $this->assign('title','我的');
        $this->display("lzn_my");
    }
    function lzn_follow(){
        $this->assign('title','我的关注');
        $this->display("lzn_follow");
    }
    function lzn_news(){
        $this-> assign('title','消息');
        $this->display('lzn_news');
    }
    function lzn_talk(){
        $this->assign('title','在线客服');
        $this->display('lzn_talk');
    }
    function lzn_talk2(){
        $this->assign('title','胡艳Sliva');
        $this->display('lzn_talk2');
    }
}
