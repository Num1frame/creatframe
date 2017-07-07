
window.onload = function(){
    var o, r;
    let choicelist = localStorage.choicelist;
    choicelist = [];

    $('.content ul').on('click','li .styles .nums .add',function(){
        o = JSON.parse($(this).closest('li').attr('data'));
        console.log(o);
        r = choicelist.filter(function(v,i){
            return v.id == o.id;
        });
        if (!r.length) {
            o.num = 1;  //把这个的Num改成1
            choicelist.push(o);
            $(this).prev().html(o.num);
        } else {
            r[0].num += 1; //
            $(this).prev().html(r[0].num);
        }
        console.table(choicelist);
    });

    function render(){
        choicelist.forEach(function(v,i){

        })
    }

    function total(){

    }














};
