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
}