<?php
use \core\db;


function M($table="")
{
    return new db($table);
}
function check_login(){
    if(!isset($_COOKIE['login'])){
        header('location:/creatframe/frame/index.php/wtf_isboss');
    }
}