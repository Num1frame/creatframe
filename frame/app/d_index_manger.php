<?php
namespace app;
use \core\core;
use \core\db;

//更新
class d_index_manger extends core{
    function index(){
        $this->assign('title','主页商品分类');
        $this->display('d_index_manger');
    }
    function load(){
        $data=M()->query('select  * from d_homelist order by id desc');
        echo json_encode($data);

    }
    function add(){
        M()->query("insert into d_homelist (id,pic) values ('{$_REQUEST['id']}','{$_REQUEST['pic']}')");
    }

}