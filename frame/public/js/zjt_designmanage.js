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
                        <td>
                            <input type="" class="name" value="${v.name}">
                        </td>
                        <td>
                            <img src="${v.pic}" alt="" style="width: 60px;">
                        </td>
                        <td>
                            <input type="" class="content" value="${v.content}">
                        </td>
                        <td>
                            <a class="zjt_user_del" href="#"href="javascript:void(0)">删除</a>
                        </td>
                    </tr>
                `
            $(el).appendTo(tbodyEl);
        })
    }

    $.ajax({
        url: "../zjt_designmanage/load",
        success: function (data) {
            data=JSON.parse(data);  //将字符串转化为数组
            render(data);
        }
    });

    tbodyEl.on('click', '.zjt_user_del', function () {
        let parid = $(this).closest('tr').attr('data-id');
        $.ajax({
            url: '../zjt_designmanage/del?id=' + parid,
            success: function () {
                location.reload();
            }
        })
        return false;
    })

    //添加
    $("button[type=submit]").on('click',function(){
        var form=$('form').serializeArray();
        var formData = new FormData($('#form').get(0));
        $.ajax({
            url:'../zjt_designmanage/zjt_add',
            processData: false,
            contentType: false,
            type: 'post',
            data: formData,
            success:function(data){
                location.reload();
                location.href=location.pathname + '#list';
            }
        })
        return false;
    })
    $('input[name=pic]').on('change',function(){
        $(this).prev().html($(this).val());
    })




    //修改
    tbodyEl.on('change','.name,.content',function(){
        value=$(this).val();
        id=$(this).closest('td').parent('tr').attr('data-id');
        key=$(this).attr('class');
        $.ajax({
            url:'../zjt_designmanage/zjt_up',
            data:{id:id,value:value,key:key},
            success:function(data){
                location.reload();
            }
        })
    })



















   /* if (!location.hash) {
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
                        <td>${v.content}</td>
                        <td><a class="zjt_user_del" href="#">删除</a></td>
                    </tr>
                `
            $(el).appendTo(tbodyEl);
        })
    }

    $.ajax({
        url: "zjt_designmanage/load",
        success: function (data) {
            render(JSON.parse(data));
        }
    });

    tbodyEl.on('click', '.zjt_user_del', function () {
        let parid = $(this).closest('tr').attr('data-id');
        $.ajax({
            url: 'zjt_designmanage/del?id=' + parid,
            success: function () {
                location.reload();
            }
        })
        return false;
    })

    //添加

    $('button').on('click',function (e) {
        e.preventDefault();
        var form = $('#form');
        var formData = new FormData(form[0]);
        console.log(formData);
        if ($("#form input").val()) {
            $.ajax({
                url: 'zjt_designmanage/add',
                processData: false,
                contentType: false,
                type: 'post',
                data: formData,
                success: function (data) {
                    location.reload();
                    location.href=location.pathname + '#list';
                }
            })
        }
    })*/
})