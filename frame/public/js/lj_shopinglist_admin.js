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
    });
    $(window).trigger('hashchange');
    let tbodyEl = $('tbody');

    function render(data) {
        tbodyEl.empty();
        data.forEach(function (v, i) {
            let el = `
                    <tr data-id="${v.id}">
                        <td>${v.id}</td>
                        <td><input type="text" value="${v.name}" name="name" class="name"></td>
                        <td><input type="text" value="${v.pic}" name="pic" class="pic"></td>
                        <td><input type="text" value="${v.price}" name="price" class="price"></td>
                        <td><input type="text" value="${v.designer}" name="designer" class="designer"></td>
                        <td><input type="text" value="${v.designerpic}" name="designerpic" class="designerpic"></td>
                        <td><input type="text" value="${v.homeid}" name="homeid" class="homeid"></td>
                        <td><input type="text" value="${v.label}" name="label" class="label"></td>
                        <td><a class="lj_shoping_del" href="#">删除</a></td>
                    </tr>
                    `;
            $(el).appendTo(tbodyEl);
        })
    }

    //修改
    tbodyEl.on('change', '.name,.pic,.price,.designer,.designerpic,.homeid,.label', function () {
        let key = $(this).attr('name');
        let values = $(this).val();
        let id = $(this).closest('tr').attr('data-id');
        $.ajax({
            url: 'lj_shoping_admin/updata',
            data: {key: key, value: values, id: id},
            success:function(data){
                alert(123);
            }

        })
    });

    $.ajax({
        url: "lj_shoping_admin/load",
        success: function (data) {
            render(JSON.parse(data));
        }
    });
    let userreg = /^[a-zA-Z][a-zA-Z0-9_]{6,20}$/;
    let pswdreg = /^(?![^a-zA-Z]+$)(?!\D+$).{6,12}$/;

    //添加
    $('button[type=submit]').on('click', function () {
        let val = $('#form').serialize();
        console.log(val);
        $.ajax({
            url: 'lj_shoping_admin/add?' + val,
            success: function () {
                location.reload();
                location.href = location.pathname + '#list';
            }
        })
        return false;
    });

    //删除
    tbodyEl.on('click', '.lj_shoping_del', function () {
        let parid = $(this).closest('tr').attr('data-id');
        $.ajax({
            url: 'lj_shoping_admin/del?id=' + parid,
            success: function () {
                location.reload();
            }
        });
        return false;
    });

})
