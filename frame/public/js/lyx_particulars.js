/**
 * Created by Administrator on 2017/7/7.
 */
$(function () {
    $(".cont .bot .time span").each(function () {
        var time=$(this).html().split(" ")[0];
        $(this).html(time);
    })
})