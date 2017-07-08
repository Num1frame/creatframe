
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



    let shuliang  = Number($('.contentbye .nums .num').html());
    let danjia = Number($('.total>span').html());

    $('.contentbye .nums').on('click','.add',function(){
        shuliang += 1;
        let total = (shuliang * danjia).toFixed(2);
        $(this).prev().html(shuliang);
        $('.total>span').html(total);
    });

    let total;
    var o, r;
    let shuzu = localStorage.shanpinxiangqing;
    shuzu = [];

    let color=$('.contentbye .color li.active p').html();
    let size =$('.contentbye .sizes li.active').html();
    let name =$('.content .sofa span').html();

    $('.contentbye .nums').on('click','.min',function(){
        if(shuliang>0){
            shuliang -= 1;
            total = (shuliang * danjia).toFixed(2);
            $(this).next().html(shuliang);
            $('.total>span').html(total);
        }
        total = (shuliang * danjia).toFixed(2);
        shuzu = [
            {shuliang:shuliang},
            {zongjia:total},
            {color:color},
            {size:size},
            {name:name},
        ];
        localStorage.shanpinxiangqing = JSON.stringify(shuzu);
        console.log(localStorage.shanpinxiangqing);
    });

    $('.total .pay').on('click',function(){
        localStorage.shanpinxiangqing = JSON.stringify(shuzu);
        total = (shuliang * danjia).toFixed(2);
        shuzu = [
            {shuliang:shuliang},
            {zongjia:total},
            {color:color},
            {size:size},
            {name:name},
        ];

        localStorage.shanpinxiangqing = JSON.stringify(shuzu);
        console.log(localStorage.shanpinxiangqing);
    })

};