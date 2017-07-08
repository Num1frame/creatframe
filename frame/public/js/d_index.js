/**
 * Created by Administrator on 2017/7/8.
 */
$(function () {


    $(window).on('hashchange',function () {
        if (!location.hash) {
            location.href = location.pathname + '#index1'
        }
        // if(location.hash){
        //     location.hash=
        // }
        $('.fenlei').removeClass('active');
        $(location.hash).addClass('active');
    })
})
$(window).trigger('hashchange');