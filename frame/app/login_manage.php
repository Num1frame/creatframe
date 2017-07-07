<?php

namespace app;
use \core\db;
use \core\core;

class login_manage extends core
{
    function index()
    {
        //通过 $REQUERT  获取表单中的数据
//        $this->assign('login', M('login_manage')->where($_REQUEST)->selectAll());
        $this->display('login_manage');
    }

    //判断用户名和密码是否正确
    function check()
    {
        $username=$_REQUEST['username'];
        $password=$_REQUEST['password'];
        $data = M()->query("select * from login_manage where username='{$username}'");
        echo json_encode($data);
        if (isset($data['password'])&&$data['password']==md5($_REQUEST['password'])) {
            echo 'ok';
        } else {
            echo 'error';

        }
    }
}