/**
 * Created by Administrator on 2017/7/8.
 */
$(function () {
    if (!location.hash){
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
                        <td>${v.name}</td>
                        <td>${v.title}</td>
                        <td>${v.content}</td>
                        <td>${v.img}</td>
                        <td>${v.uid}</td>
                        <td>${v.num1}</td>
                        <td>${v.num2}</td>
                        <td>${v.num3}</td>
                        <td><a class="delete">删除</a></td>
                    </tr>
                    `
            $(el).appendTo(tbodyEl);
        })
    }
    $.ajax({
        url:"../lyx_state_admin/select",
        success:function(data){
            // console.log(data);
            render(JSON.parse(data));
        }
    });





})