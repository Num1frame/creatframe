/**
 * Created by Administrator on 2017/7/7.
 */
$(function () {
    $(".cont .bot .time span").each(function () {
        var time=$(this).html().split(" ")[0];
        $(this).html(time);
    })
    var yue=localStorage.getItem('yue')
    if(yue=='ok'){
        document.location.reload('ture');
        localStorage['yue']='no';
    }

    // ping
    $('.p_more').on('click',function () {
        var nei=$('.myping').val();
        let time=new Date();
        let nian=time.getFullYear()
        let yue=parseInt(time.getMonth())+1;
        let ri=time.getDate();
        let nowtime=nian+"-"+yue+"-"+ri;
        let biaoqian=`
            <li>
                <img src="../../public/img/lyximg/lyx_fen.png" class="fen">
                <div class="p_img"><img src="../../public/img/lyximg/lyx_peoimg.png" alt=""></div>
                <div class="p_con">
                    <h1>胡艳Silvia</h1>
                    <h2>${nowtime}</h2>
                    <p>${nei}</p>
                </div>
                <img src="../../public/img/lyximg/lyx_ping.png" class="p_xiaoxi">
            </li>
        `
        $(biaoqian).appendTo($('.pingcon'));
        $('.myping').val('');
    })

})