/**
 * Created by Administrator on 2017/7/5.
 */
$(function () {
    $('.main').on('click','.guan',function () {
        var id=$(this).parentsUntil(".cont").parent().attr("id");
        let that=this;
        $.ajax({
            url:'../lyx_state/lyx_guanzhu',
            data:{id:id},
            success:function(data){
                that.remove();
            }
        })
    })
    $(".footer li").removeClass('active');
    $(".footer li:nth-child(1)").addClass('active');

    // 文章列表字数
    $('.box p').each(function () {
        var lenght=$(this).html().length;
        if(lenght>74){
            var con=$(this).html().slice(0,74);
            con=con+'...';
            $(this).html(con);
        }
    })

    // 数据处理
    $(".cont .bot .time span").each(function () {
        var time=$(this).html().split(" ")[0];
        $(this).html(time);
    })


    // $('.main').on('click','.guan',function () {
    //     var id=$(this).attr("id");
    //     let that=this;
    //     $.ajax({
    //         url:'../lyx_state/lyx_guanzhu',
    //         data:{id:id},
    //         success:function(data){
    //             that.remove();
    //         }
    //     })
    // })






})