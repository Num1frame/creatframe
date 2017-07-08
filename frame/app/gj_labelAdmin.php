<?php
namespace app;
use core\core;
use \core\db;
use MongoDB\Driver\Query;

class gj_labelAdmin extends core {
    function index(){
        $this->assign("title","商品标签");
        $this->display("gj_labelAdmin");
    }
    function select(){
        $data=M("gj_search1")->selectAll();
        echo json_encode($data);
    }
    function add(){
        $data=M()->query("insert into gj_search1 (name) values('$_REQUEST[label]')");
    }
    function delete(){
        $data=M()->query("delete from gj_search1 where id='$_REQUEST[id]'");
    }
    function update(){
        $data=M()->query("update gj_search1 set name='$_REQUEST[val]' where id='$_REQUEST[id]'");
    }
}

