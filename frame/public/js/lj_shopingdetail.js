
window.onload = function(){
    $('.foot a span').on('click',function(){
        $('.contentbye').addClass('active');
    });
    $('.contentbye .close img').on('click',function(){
        $('.contentbye').removeClass('active');
    });

    $('.contentbye .color').on('click','li',function(){
        $('.contentbye .color li').removeClass('active');
        $(this).addClass('active');
    });

    $('.contentbye .sizes').on('click','li',function(){
        $('.contentbye .sizes li').removeClass('active');
        $(this).addClass('active');
    });

    var o, r;
    let shanpinxiangqing = localStorage.shanpinxiangqing;
    let totalprice = localStorage.totalprice;
    shanpinxiangqing = [];
    totalprice = [];

    let shuliang  = Number($('.contentbye .nums .num').html());
    let danjia = Number($('.total>span').html());
    console.log(danjia);


    $('.contentbye .nums').on('click','.add',function(){
        shuliang += 1;
        let total = (shuliang * danjia).toFixed(2);
        $(this).prev().html(shuliang);
        $('.total>span').html(total);
    });

    $('.contentbye .nums').on('click','.min',function(){
        if(shuliang>0){
            shuliang -= 1;
            let total = (shuliang * danjia).toFixed(2);
            $(this).next().html(shuliang);
            $('.total>span').html(total);
        }
    });

};