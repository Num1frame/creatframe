
window.onload = function(){
    $('.foot a span').on('click',function(){
        $('.contentbye').addClass('active');
    });
    $('.contentbye .close img').on('click',function(){
        $('.contentbye').removeClass('active');
    });
};