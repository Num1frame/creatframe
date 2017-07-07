/**
 * Created by WTF on 2017/7/7.
 */
$(function () {
    if (!location.hash) {
        location.href = location.pathname + '#list'
    }
    $(window).on('hashchange', function () {
        $('#myTabs li, .panel').removeClass('active');
        $(location.hash + '-tab').parent().addClass('active');
        $(location.hash).addClass('active');
    })
    $(window).trigger('hashchange');
    let tbodyEl=$('tbody');
    function render(data){
        tbodyEl.empty();
        data.forEach(function(v,i){
            let el=`
                    <tr data-id="${v.id}">
                        <td>${v.id}</td>
                        <td>${v.account}</td>
                        <td>${v.password}</td>
                        <td>${v.ctime}</td>
                        <td><a class="wtf_user_del" href="#">删除</a></td>
                    </tr>
                    `
            $(el).appendTo(tbodyEl);
        })
    }
    $.ajax({
        url:"wtf_user_admin/load",
        success:function(data){
            render(JSON.parse(data));
        }
    })
    $('button[type=submit]').on('click',function(){
        let val=$('#form').serialize();
        $.ajax({
            url:'wtf_user_admin/add?'+val,
            success:function(){
                location.reload();
                location.href=location.pathname+'#list';
            }
        })
        return false;
    })
    tbodyEl.on('click','.wtf_user_del',function(){
        let parid=$(this).closest('tr').attr('data-id');
        $.ajax({
            url:'wtf_user_admin/del?id='+parid,
            success:function(){
                location.reload();
            }
        })
        return false;
    })
})
