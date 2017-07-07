$(function(){
    $('.grd_gzpic').on('click','li',function(){
        $(this).find('.zhezhao').addClass('active');
    })
    $('.zhezhao').on('click','.qxgz',function(){
        $(this).find('.grd_gzpic li').addClass('active1');
    })

    $('.grd_gzpic').on('click','.zhezhao.active .qxgz',function(){
        if($(this).html()=='取消关注'){
//                   $(this).html('关注').addClass('grd_gzactive');
            // $('.grd_gzpic li').eq($(this).index()).css('display','none');
        }
//               else{
//                   $(this).html('取消关注').removeClass('grd_gzactive');
//               }
    })
    $(document.body).on('click',function(e){
        for(let i=0;i<$('.grd_gzpic li').length;i++){
            if($(e.target).closest('li')[0]!=$('.grd_gzpic li')[i]){
                $($('.grd_gzpic li')[i]).find('.zhezhao').removeClass('active');
            }
        }
    })




  $('.zhezhao').on('click','.qvgz',function(){







    })




















})