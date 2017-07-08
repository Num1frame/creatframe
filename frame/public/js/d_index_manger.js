/**
 * Created by Administrator on 2017/7/7.
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
    function render(data) {
        tbodyEl.empty();
        data.forEach(function (v,i) {
            let el=`
                    <tr data-id="${v.id}">
                        <td>${v.id}</td>
                        <td>${v.pic}</td>
                        <td><a class="delete">删除</a></td>
                    </tr>
                   `;
            $(el).appendTo(tbodyEl);
        })
    }

    $.ajax({
        url:"d_index_manger/load",
        success:function(data){
            render(JSON.parse(data));
        }
    });

    //增
    $('button[type=submit]').on('click',function () {
        let id=$('input[name=num]').val();
        let pic=$('input[name=fenlei]').val();
        let val=$('#form').serialize();
        $.ajax({
            url:'d_index_manger/add',
            data:{id:id,pic:pic},
            success:function (data) {

            }
        })
        return false;
    })












})