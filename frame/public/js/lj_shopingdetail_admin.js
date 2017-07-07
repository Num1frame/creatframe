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
    let tbodyEl = $('tbody');

    function render(data) {
        tbodyEl.empty();
        data.forEach(function (v, i) {
            let el = `
                    <tr data-id="${v.id}">
                        <td>${v.id}</td>
                        <td>${v.name}</td>
                        <td>${v.pic}</td>
                        <td>${v.price}</td>
                        <td>${v.gid}</td>
                        <td>${v.content}</td>
                        <td><a class="lj_shoping_del" href="#">删除</a></td>
                    </tr>
                    `
            $(el).appendTo(tbodyEl);
        })
    }

    $.ajax({
        url: "lj_shopingdetail_admin/load",
        success: function (data) {
            render(JSON.parse(data));
        }
    });
    let userreg = /^[a-zA-Z][a-zA-Z0-9_]{6,20}$/;
    let pswdreg = /^(?![^a-zA-Z]+$)(?!\D+$).{6,12}$/;

    $('button[type=submit]').on('click', function () {
        let username = $('.wtf_username').val();
        let userpswd = $('.wtf_userpswd').val();
        // if(username.trim()!=''&&userpswd.trim()!=''){
        let val = $('#form').serialize();
        $.ajax({
            url: 'lj_shopingdetail_admin/add?' + val,
            success: function () {
                location.reload();
                location.href = location.pathname + '#list';
            }
        })
        /*}else{
         alert('请输入账号密码')
         }*/

        return false;
    });

    tbodyEl.on('click', '.lj_shopingdetail_admin', function () {
        let parid = $(this).closest('tr').attr('data-id');
        $.ajax({
            url: 'lj_shopingdetail_admin/del?id=' + parid,
            success: function () {
                location.reload();
            }
        })
        return false;
    })
})
