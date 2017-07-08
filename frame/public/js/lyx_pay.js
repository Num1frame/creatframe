/**
 * Created by Administrator on 2017/7/8.
 */
$(function () {
    $(".password").on('keyup',function () {
        var val=$(".password").val().length;
        if(val==6){
            location.href='../grd_zfcg/index';
        }
    })
})