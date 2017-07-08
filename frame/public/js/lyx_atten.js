/**
 * Created by Administrator on 2017/7/6.
 */
$(function () {
    $(".footer li").removeClass('active');
    $(".footer li:nth-child(3)").addClass('active');

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
})