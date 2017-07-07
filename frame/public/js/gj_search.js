$(function () {
    //输入搜索
    function renderList(data) {
        $(".entry .bottom").empty();
        data.forEach(function (v,i) {
            let el =
                `
        <li data=${v} name=${v.name}>
               <div class="left">
                    <img src='${v.pic}' alt="" style="width:100%;height:100%">
                </div>
                <div class="right">
                    <span>${v.name}</span>
                    <div class="dashed">
                </div>
                <div class="designBox">
                    <div class="headPhoto" style="background-image: url(${v.designerpic});background-size: cover">
                    </div>
                    <span class="design">${v.designer}</span>
                </div>
             </div>
             <!--</a>-->
        </li>
       
                `
            $(el).prependTo($(".entry .bottom"));
        })
    }

    var time;
    $("#find").on("input", function () {
        if(!$(this).val()){
            $(".entry").removeClass("active");
            return;
        }else{
            $(".entry").addClass("active");
            let that=this;
            clearTimeout(time);
            let key=$(this).val();
            time=setTimeout(function(){
                $.ajax({
                    url: "../gj_search/search1",
                    data:{key:key},
                    success:function(data){
                        data=JSON.parse(data);
                        renderList(data);
                    }
                })
            },800)
        }
        // $(".entry").addClass("active");
        // let i = setInterval(function () {
        //     let val = $("#find").val();
        //     if (!val) {
        //         $(".entry").removeClass("active");
        //         return;
        //     }
        //     $.ajax({
        //         url: "../gj_search/search1",
        //         data: {text: val},
        //         success: function (data) {
        //             data = JSON.parse(data);
        //             historyLi(data);
        //         }
        //     })
        // }, 2000)
    })

    ///点击跳转按钮记录信息
    function render(data){
        $(".top .label").empty();
            data.forEach(function(v,i){
                $(`<li data=${v}>`).addClass("li").html(v).prependTo($(".top .label"));
            })
    }
    var list=[];
    if(localStorage.home){
        $(".top").removeClass("active");
        list=JSON.parse(localStorage.home);
        render(list);
    }else{
        list=[];
    }
    $(".entry .bottom").on("click",'li',function(){
        let text=$(this).attr("name");
        let r=list.filter(function(v,i){
            return v == text;
        });
        if(!r.length){
            list.push(text);
        }
        localStorage.home=JSON.stringify(list);
        location.href="../lj_shoping/shopinglist?key="+text;
    })
    $(".search2").on("click",function() {
        if ($("#find").val()) {
            let text = $("#find").val();
            let r = list.filter(function (v, i) {
                return v == text;
            });
            if (!r.length) {
                list.push(text);
            }
            localStorage.home = JSON.stringify(list);
            $("#find").val("");
            location.href = "../lj_shoping/shopinglist?key="+text;
        }
    })

    //历史搜索
    $(".top .label").on("click",".li",function(){
        let text=$(this).attr('data');
        location.href = "../lj_shoping/shopinglist?key="+text;
    })
    $(".bottom .label").on("click",".li",function(){
        let text=$(this).attr("id");
        location.href = "../lj_shoping/shopinglist1?key="+text;
    })

    //选项卡
    var item = $(".gj_nav .item"),
        img = $(".gj_nav .item img"),
        con = $(".gj_con .content");
    item.on("click", function () {
        img.removeClass("active");
        $(this).find("img").addClass("active");
        con.removeClass("active");
        con.eq(item.index($(this))).addClass("active");
    })

    //图片搜索
    function renderPhoto(data) {
        $(".photo .img .history").remove();
        photoList.forEach(function (v, i) {
            $("<li class='history'>").css({
                width: 2 + "rem",
                height: 2 + "rem",
                backgroundImage: "url(" + v + ")",
                backgroundSize: 100 + "%" + "" + 100 + "%"
            }).prependTo($(".photo .img"));
        })
    }

    var photoList = [];
    if (localStorage.photoList) {
        photoList = JSON.parse(localStorage.photoList)
        renderPhoto(photoList);
    } else {
        photoList = [];
    }

    $("#file").on("change", function () {
        var form = $("#form");
        var formData = new FormData(form[0]);
        $.ajax({
            url: "../gj_search/photo",
            processData: false,
            contentType: false,
            type: 'post',
            data: formData,
            success: function (data) {
                let r = photoList.filter(function (v, i) {
                    return v == data;
                });
                if (!r.length) {
                    photoList.push(data);
                }
                localStorage.photoList = JSON.stringify(photoList);
                renderPhoto(photoList);
            }
        })
    })

    //精准搜索
    function add(){
        $(".style li:eq(0)").addClass("active hot");
    }
    add();
    $(".price li").on("click", function () {
        $(".price li").removeClass("active hot");
        $(this).addClass("active hot");
        let text = $(this).find("input").val();
        let arr=text.split("-");
        $(".accuracy .price .input1").val(arr[0])
        $(".accuracy .price .input2").val(arr[1])
    })
    $(".style li").on("click", function () {
        $(".style li").removeClass("active hot");
        $(this).addClass("active hot");
    })

})
