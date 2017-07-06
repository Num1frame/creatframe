/**
 * Created by WTF on 2017/7/5.
 */
$(function(){
    if(localStorage.user!=undefined){
        let user=JSON.parse(localStorage.user);
        $('.wtf_remenberbtn').addClass('active')
        $('.wtf_login1peo').val(user[0].name);
        $('.wtf_login1pswd').val(user[0].password);
    }
    let userdata=[];
    $('.wtf_remenberme').on('click',function(){
        $('.wtf_remenberbtn').toggleClass('active')
    })

    $('.wtf_gogogo').on('click',function(){
        let name=$('.wtf_login1peo').val();
        let pswd=$('.wtf_login1pswd').val();
        $.ajax({
            url:'../wtflogin/loginjc',
            method:'post',
            data:{account:name,password:pswd},
            success:function(data){
                if(data=='ok'){
                    if($('.wtf_remenberbtn').hasClass('active')){
                        userdata.push({'name':`${name}`,'password':`${pswd}`});
                        localStorage.user=JSON.stringify(userdata);
                    }else{
                        localStorage.clear();
                    }
                    location.href = '../../';
                }else if(data=='erroy'){
                    $('.wtf_loginprompt').html('账号或密码错误');
                    $('.wtf_login1pswd').val('');
                    setTimeout(function(){
                        $('.wtf_loginprompt').html('');
                    },2000)
                }else if(data=='no'){
                    $('.wtf_loginprompt').html('账号不存在');
                    setTimeout(function(){
                        $('.wtf_loginprompt').html('');
                    },2000)
                }
            }
        })
        return false;
    })
    $('.wtf_eye').on('click',function(){
        if($(this).hasClass('active')){
            $('#wtf_password').prop('type','password');
        }else{
            $('#wtf_password').prop('type','text');
        }
        $(this).toggleClass('active');

    })

})
