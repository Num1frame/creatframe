/**
 * Created by Administrator on 2017/7/6.
 */
$(function () {
    var text;
    document.onkeyup=function(e){
        var val=$('.text').val();
        var len=val.length;
        if(len>300){
            $('.pu_zi').css('color','red');
            $('.text').val(text);
        }else {
            $('.pu_zi').css('color','#1E243B');
            $('.pu_zi span').html(len);
            text=val;
        }
    }

    $(".footer li").removeClass('active');
    $(".footer li:nth-child(2)").addClass('active');

    // 发表
    $(".right a").on('click',function () {
        var val=$('.publish .text').val();
        var title=val.slice(0,15);
        $.ajax({
            url:'../lyx_state/lyx_fabiao',
            data:{val:val,title:title},
            success:function(data){
                window.location.href='../lyx_state/lyx_state';
            }
        })
    })
    











})