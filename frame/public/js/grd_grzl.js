$(function(){
    $('.grd_gzpic').on('click','li',function(){
        $(this).find('.zhezhao').addClass('active');
    })
    $('.zhezhao').on('click','.qxgz',function(){
        $(this).find('.grd_gzpic li').addClass('active1');
    })

    $('.grd_gzpic').on('click','.zhezhao.active .qxgz',function(){
        if($(this).html()=='取消关注'){
            //$(this).html('关注').addClass('grd_gzactive');
            //$('.grd_gzpic li').eq($(this).index()).css('display','none');
        }
        //else{
        //    $(this).html('取消关注').removeClass('grd_gzactive');
        //}
    })
    //$('.grd_gzpic li').on('click','.qxgz',function(){
    //    $(this).closest('li').css('display','none');
    //})
    $(document.body).on('click',function(e){
        for(let i=0;i<$('.grd_gzpic li').length;i++){
            if($(e.target).closest('li')[0]!=$('.grd_gzpic li')[i]){
                $($('.grd_gzpic li')[i]).find('.zhezhao').removeClass('active');
            }
        }
    })

    //$('.grd_gzpic li').on('click','.qxgz',function(){
    //    var trEl=$(this).closest('tr');
    //    var dizhi=trEl.attr('data-id');
    //    $.ajax({
    //        url:'/php/KTV/index.php/songsmanage/delete',
    //        data:{id:dizhi},
    //        success:function(data){
    //            if(data==='ok'){
    //                trEl.remove();
    //            }else{43
    //                alert('删除失败');
    //            }
    //        }
    //    })
    //});


    $('.grd_gzpic li').on('click','.qxgz',function(){

        var o = JSON.parse($(this).closest('li').attr('data'));
        var da= o.id;
        $(this).closest('li').remove();
        $.ajax({
            url:'grd_grzl/delete',
            data:{id:da},
            success:function(data){

                //if(data=='ok'){
                //    alert(1)
                //   $(this).closest('li').remove();
                //}else{
                //    alert('删除失败');
                //}
            }
        });


        //$(this).closest('li').css('display','none');
    })





    $('.grd_gzpic1 li').on('click','.qxgz',function(){

        var o = JSON.parse($(this).closest('li').attr('data'));
        var da= o.id;
        $(this).closest('li').remove();
        $.ajax({
            url:'grd_grzl/delete1',
            data:{id:da},
            success:function(data){

                //if(data=='ok'){
                //    alert(1)
                //   $(this).closest('li').remove();
                //}else{
                //    alert('删除失败');
                //}
            }
        });


        //$(this).closest('li').css('display','none');
    })


















})