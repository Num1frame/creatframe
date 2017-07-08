
window.onload = function(){
    var o, r;
    let choicelist = localStorage.choicelist;
    let totalprice = localStorage.totalprice;
    choicelist = [];
    totalprice = [];

    $('.content ul').on('click','li .styles .nums .add',function(){
        o = JSON.parse($(this).closest('li').attr('data'));
        r = choicelist.filter(function(v,i){
            return v.id == o.id;
        });

        if (!r.length) {
            o.num = 2;  //把这个的Num改成1
            choicelist.push(o);
            $(this).prev().html('0'+o.num);
        } else {
            r[0].num += 1;
            $(this).prev().html('0'+r[0].num);
        }

        total();
    });

    $('.content ul').on('click','li .styles .nums .min',function(){
        o = JSON.parse($(this).closest('li').attr('data'));
        r = choicelist.filter(function(v,i){
            return v.id == o.id;
        });
        if(r.length>0){
            r[0].num-=1;
            if(r[0].num==0){
                choicelist = choicelist.filter(function (v, i) {
                    return v.id != o.id
                });
            }
            $(this).next().html(r[0].num);
            total();
        }
    });

    function total(){
        let sum = 0;
        choicelist.forEach(function(v,i){
            sum += v.num * v.price;
        });
        sum = sum.toFixed(2);
        totalprice = [];
        totalprice.push(sum);
        $('.total>span').html(sum);
    }

    $('.total .pay').on('click',function(){
        localStorage.totalprice = JSON.stringify(totalprice);
        localStorage.choicelist = JSON.stringify(choicelist);
    });














};
