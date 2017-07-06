/**
 * Created by WTF on 2017/7/6.
 */
$(function(){
    let userreg=/^[a-zA-Z][a-zA-Z0-9_]{6,20}$/;
    let pswdreg=/^(?![^a-zA-Z]+$)(?!\D+$).{6,12}$/;
    let pswdreg1=/\w/g;
    let successuser,successpswd;
    $('.wtf_eye1').add('.wtf_eye2').on('click',function(){
        if($(this).hasClass('active')){
            $(this).prev().prop('type','password');
        }else{
            $(this).prev().prop('type','text');
        }
        $(this).toggleClass('active');
    })
    $('.wtf_regadmin').on('input',function(){
        let user=$('.wtf_regadmin').val();
        let timeId;
        clearTimeout(timeId);
        if(userreg.test(user)){
            timeId=setTimeout(function(){
                $.ajax({
                    url:'../wtflogin/reguser',
                    data:{user:user},
                    success:function(data){
                        if(data=='have'){
                            $('.wtf_usertxt').html('此账号已存在').css('color','red')
                            $('.wtf_usergo').removeClass('wtf_useractive');
                        }else{
                            $('.wtf_usertxt').html('此账号可用').css('color','green')
                            $('.wtf_usergo').addClass('wtf_useractive');
                        }
                    }
                })
            },600);

        }else if(user.length<6){
            clearTimeout(timeId);
            $('.wtf_usertxt').html('用户名只能由字母开头,6-20个字符(可以包括数字,字母，下划线)').css('color','#9B9CA1');
            $('.wtf_usergo').removeClass('wtf_useractive');
        }
    })
    $(document.body).on('click','.wtf_useractive',function(){
        successuser=$('.wtf_regadmin').val();
        if(successuser.trim()!=''){
            $(this).parent().removeClass('active');
            $(this).parent().next().addClass('active');
        }
    })
    $('.wtf_regpswd').on('input',function(){
        $('.wtf_regpswdtext').css('color','red');
        if($(this).val().trim()==''){
            $('.wtf_regpswdtext').css('color','#9B9CA1');
        }
        if(pswdreg.test($(this).val().trim())){
            $('.wtf_pswdgo').addClass('wtf_pswdactive')
        }else{
            $('.wtf_pswdgo').removeClass('wtf_pswdactive')
        }
    })
    $(document.body).on('click','.wtf_pswdactive',function(){
        let pswd=$('.wtf_regpswd').val().trim();
        if(pswdreg.test(pswd)&&pswdreg1.test(pswd)){
            successpswd=$('.wtf_regpswd').val().trim();
            $(this).parent().removeClass('active');
            $(this).parent().next().addClass('active');
        }else{
            $('.wtf_regpswdtext').html('密码格式输入错误');
        }
    })
    $('.wtf_aginpswd').on('input',function(){
        if($(this).val().trim().length>=6){
            $('.wtf_lastgo').addClass('wtf_aginpswdactive');
        }else{
            $('.wtf_lastgo').removeClass('wtf_aginpswdactive');
        }
    })
    $(document.body).on('click','.wtf_aginpswdactive',function(){
        let aginpswd=$('.wtf_aginpswd').val().trim();
        if(aginpswd==successpswd){
            $.ajax({
                url:'../wtflogin/regadd',
                data:{user:successuser,password:aginpswd},
                method:'post',
                success:function(){
                    $('.wtf_mask').animate({height:'100%',width:'100%'})
                }
            })
        }else{
            $('.wtf_aginpswdtext').html('两次密码输入不一致').css('color','red');
        }
    })
})
