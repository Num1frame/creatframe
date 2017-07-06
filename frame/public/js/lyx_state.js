/**
 * Created by Administrator on 2017/7/5.
 */
$(function () {
    $('.guan').click(function () {
        this.remove();
    })
    $(".footer li").removeClass('active');
    $(".footer li:nth-child(1)").addClass('active');
})