/**
 * Created by guoridong on 2017/7/8.
 */
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
                //<td style=""><input class="id" type="text" value="${v.id}" style="border: none;outline: none;border-bottom: 1px solid;text-align: center "></td>
                <td><input class="name" type="text" value="${v.name}" style="border: none;outline: none;border-bottom: 1px solid;text-align: center "></td>
                <td><input class="pic" type="text" value="${v.pic}" style="border: none;outline: none;border-bottom: 1px solid;text-align: center "></td>
                <td><input class="num" type="text" value="${v.num}" style="border: none;outline: none;border-bottom: 1px solid;text-align: center "></td>
                <td><a class="delete">删除</a></td>
                </tr>
                   `;
            $(el).appendTo(tbodyEl);
        })
    }

    $.ajax({
        url:"grd_guanzhumanage/load",
        success:function(data){
            render(JSON.parse(data));
        }
    });

    //增
    $('button[type=submit]').on('click',function () {
        let id=$('input[name=id]').val();
        let pic=$('input[name=pic]').val();
        let name=$('input[name=name]').val();
        let num=$('input[name=num]').val();


        let val=$('#form').serialize();
        $.ajax({
            url:'grd_guanzhumanage/add',
            data:{id:id,pic:pic,name:name,num:num},
            success:function (data) {

            }
        })
        return false;
    })


    //删除

    $('tbody').on('click','.delete',function () {
        let tr=$(this).closest('tr')
        let id=$(this).closest('tr').attr('data-id');
        $.ajax({
            url:'grd_guanzhumanage/del',
            data:{id:id},
            success:function (data) {
                tr.remove();
            }
        })

    })

    $('tbody').on('change','input',function () {
        let key=$(this).attr('class');
        let val=$(this).val();
        let id=$(this).closest('tr').attr('data-id');
        $.ajax({
            url:'grd_guanzhumanage/update',
            data:{key:key,val:val,id:id},
            success:function (data) {

            }
        })
    })












})
