$(function () {
    //输入搜索
    $("#find").on("keyup",function(){
        $(".entry").addClass("active");
        let i=setInterval(function(){
            let val=$("#find").val();
            if(!val){
                $(".entry").removeClass("active");
                return;
            }
            $.ajax({
                url:"../index.php/gj_search/search1",
                data:{text:val},
                success:function(data){
                    console.log(data);
                }
            })
        },2000)
    })

    //搜索
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
    function render(data){
    $(".photo .img .history").remove();
    photoList.forEach(function(v,i){
        $("<li class='history'>").css({
            width: 2 + "rem",
            height: 2 + "rem",
            backgroundImage:"url("+v+")",
            backgroundSize:100+"%"+""+100+"%"
        }).prependTo($(".photo .img"));
    })
}
    var photoList=[];
    if(localStorage.photoList){
        photoList=JSON.parse(localStorage.photoList)
        render(photoList);
    }else{
        photoList=[];
    }

        $("#file").on("change", function () {
            var form = $("#form");
            var formData = new FormData(form[0]);
            $.ajax({
                url: "/frame/index.php/gj_search/photo",
                processData: false,
                contentType: false,
                type: 'post',
                data: formData,
                success: function (data) {
                    let r=photoList.filter(function(v,i){
                        return v==data;
                    });
                    if(!r.length){
                        photoList.push(data);
                    }
                    localStorage.photoList=JSON.stringify(photoList);
                    render(photoList);
                }
            })
        })

    //精准搜索
    $(".price li").on("click", function () {
        $(".price li").removeClass("active hot");
        $(this).addClass("active hot");
        let text=$(this).html();

    })
    $(".style li").on("click", function () {
        $(".style li").removeClass("active hot");
        $(this).addClass("active hot");
    })

})
