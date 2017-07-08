window.onload = function () {

    function render(data) {
        $('.content ul').empty();
        data.forEach(function(v,i){
            var el = `
        <li>
            <div class="ctop">
                <img class='log1' src="<?php echo IMG_PATH?>lj_img/lj_shoping4_03.png" alt="">
                <img class='log2' src="<?php echo IMG_PATH?>lj_img/LOGO.png" alt="">
            </div>
            <div class="mpic">
                <a class="pic" href="<?php echo PHP_PATH?>lj_shoping/shopingdetail">
                    <img src="<?php echo IMG_PATH?>lj_img/lj_shop9_07.png" alt="">
                </a>
                <span><strong>·</strong>&nbsp;简约松软靠椅&nbsp;<strong>·</strong></span>
                <span>CONTRACTED AND LOOSE <p>&nbsp;CHAIR</p></span>
                <div class="price">
                    <div class="prices">1213.80</div>
                    RMB
                </div>
            </div>
            <div class="person">
                <div class="left">
                    <img src="<?php echo IMG_PATH?>lj_img/lj_shoping7_10.png" alt="">
                    <span>胡艳Silvia</span>
                </div>
                <div class="more">
                    <img src="<?php echo IMG_PATH?>lj_img/lj_shop8_03.png" alt="">
                </div>
            </div>
        </li>`;
            $(el).appendTo('.content ul');
        })

    }
    // render();

};

function render() {
    $('.content').empty();
    choicelist.forEach(function (value, index) {
        $('li').appendTo('.content');
        $('.nummer p span').html(getfullnum()); //  共26件
        $('.prices').html(getTotal());  //总价
        localStorage.choicelist = JSON.stringify(choicelist);
    });
}