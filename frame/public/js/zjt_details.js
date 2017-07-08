$(function(){
    $('.zjt_fourTwo').on('click','.zjt_fourDemo1',function(){
        $(this).find('.zjt_cancel').addClass('active');
    })
    $('.zjt_cancel').on('click',function(){
        $(this).closest('.zjt_fourDemo1').css('display','none');
    })
})

