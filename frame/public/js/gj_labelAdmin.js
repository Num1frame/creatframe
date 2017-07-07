/**
 * Created by gj on 2017/7/7.
 */
$(function(){
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
                        <td>${v.id}</td>
                        <td>
                           <input type="text" value="${v.name}" name="name" class="input"></td>
                        <td><a class="delete">删除</a></td>
                    </tr>
                    `
            $(el).appendTo(tbodyEl);
        })
    }
    $.ajax({
        url:"../gj_labelAdmin/select",
        success:function(data){
            console.log(data);
            render(JSON.parse(data));
        }
    });

    //添加
    $("button[type=submit]").on("click",function(e){
        e.preventDefault();
        let formData=$("#form").serialize();
        if($("#form input").val()){
            $.ajax({
                url:"../gj_labelAdmin/add",
                data:formData,
                success:function(data){
                    location.reload();
                    location.href=location.pathname+'#list';
                }
            })
        }
    })

    //删除
    $("tbody").on("click",".delete",function(){
        let id=$(this).closest("tr").attr("data-id");
        $(this).closest("tr").remove();
        $.ajax({
            url:"../gj_labelAdmin/delete",
            data:{id:id},
            success:function(){
                location.href=location.pathname+'#list';
            }
        })
    })

    //修改
    $("tbody").on('change','.input',function(){
        let id=$(this).closest("tr").attr("data-id");
        let val=$(this).val();
        let cla=$(this).attr("name");
        $.ajax({
            url:"../gj_labelAdmin/update",
            data:{id:id,name:cla,val:val},
            success:function(data){
            }
        })
    })

})