/**
 * Created by WTF on 2017/7/7.
 */
$(function () {
    if (!location.hash){
        location.href = location.pathname + '#list'
    }
    $(window).on('hashchange', function () {
        $('#myTabs li, .panel').removeClass('active');
        $(location.hash + '-tab').parent().addClass('active');
        $(location.hash).addClass('active');
    })
    $(window).trigger('hashchange');
    let tbodyEl=$('tbody');
    function render(data){
        tbodyEl.empty();
        data.forEach(function(v,i){
            let el=`
                    <tr data-id="${v.id}">
                        <td>${v.id}</td>
                        <td>${v.account}</td>
                        <td>${v.password}</td>
                        <td>${v.ctime}</td>
                        <td><a class="wtf_user_del" href="#">删除</a></td>
                    </tr>
                    `
            $(el).appendTo(tbodyEl);
        })
    }
    $.ajax({
        url:"wtf_user_admin/load",
        success:function(data){
            render(JSON.parse(data));
        }
    });
    let userreg=/^[a-zA-Z][a-zA-Z0-9_]{6,20}$/;
    let pswdreg=/^(?![^a-zA-Z]+$)(?!\D+$).{6,12}$/;
    $('button[type=submit]').on('click',function(){
        let username=$('.wtf_username').val();
        let userpswd=$('.wtf_userpswd').val();
        if(username.trim()!=''&&userpswd.trim()!=''){
            if(userreg.test(username)&&pswdreg.test(userpswd)){
                let val=$('#form').serialize();
                $.ajax({
                    url:'wtf_user_admin/add?'+val,
                    success:function(){
                        location.reload();
                        location.href=location.pathname+'#list';
                    }
                })
            }else if(userreg.test(username)&&!pswdreg.test(userpswd)){
                $('.wtf_kong2').html('密码格式错误').css('color','red');
                setTimeout(function(){
                    $('.wtf_kong2').html('请设置6-12位密码(必须包含字母,数字) 字符').css('color','#000000');
                },1000)
            }else if(!userreg.test(username)){
                $('.wtf_kong1').html('账号格式错误').css('color','red');
                setTimeout(function(){
                    $('.wtf_kong1').html('用户名只能由字母开头,6-20个字符(可以包括数字,字母，下划线)').css('color','#000000');
                },1000)
            }else{
                alert('输入错误')
            }
        }else{
            alert('请输入账号密码')
        }

        return false;
    })
    tbodyEl.on('click','.wtf_user_del',function(){
        let parid=$(this).closest('tr').attr('data-id');
        $.ajax({
            url:'wtf_user_admin/del?id='+parid,
            success:function(){
                location.reload();
            }
        })
        // return false;
    })
})
