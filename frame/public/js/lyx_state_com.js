/**
 * Created by Administrator on 2017/7/8.
 */
$(function () {
    $('.main').on('click','.yuedu',function () {
        var id=$(this).parentsUntil(".cont").parent().attr("id");
        var p=$(this).closest(".cont").find(".yue span").html();
        var ping=parseInt(p)+1;
        $.ajax({
            url:'../lyx_state/lyx_yuedu',
            data:{id:id,ping:ping},
        })
        localStorage['yue']='ok';
    })
    $('.main').on('click','.zan',function () {
        var zanid=$(this).parentsUntil(".cont").parent().attr("id");
        var zanp=$(this).closest(".cont").find(".zan span").html();
        var zan=parseInt(zanp)+1;
        $(this).closest(".cont").find('.zan span').html(zan)
        $.ajax({
            url:'../lyx_state/lyx_zan',
            data:{id:zanid,zan:zan},
        })
    })




})