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
//        $this->assign('data', M('t_follow')->selectAll());
        $data = M()->query("select * from t_follow where aid ='1' ") ;
        $this->assign('data',$data);
        $data = M()->query("select * from t_follow where aid ='2' ") ;
        $this->assign('data1',$data);
        $data = M()->query("select * from t_follow where aid ='3' ") ;
        $this->assign('data2',$data);
        $data = M()->query("select * from t_follow where aid ='4' ") ;
        $this->assign('data3',$data);
        $this->assign('title','关注');
        $this->display("lzn_follow");
    }
    function lzn_fans(){
        $data = M()->query("select * from t_fans where aid ='1' ") ;
        $this->assign('data',$data);
        $data = M()->query("select * from t_fans where aid ='2' ") ;
        $this->assign('data1',$data);
        $data = M()->query("select * from t_fans where aid ='3' ") ;
        $this->assign('data2',$data);
        $data = M()->query("select * from t_fans where aid ='4' ") ;
        $this->assign('data3',$data);
        $this->assign('title','粉丝');
        $this->display("lzn_fans");
    }
    function lzn_news(){
        $this->assign('data', M('t_info')->selectAll());
        $this-> assign('title','消息');
        $this->display('lzn_news');
    }
    function lzn_kefu(){
        $this->assign('data', M('t_kefu')->selectAll());
        $this-> assign('title','我的客服');
        $this->display('lzn_kefu');
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

