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
                        <td class="gai" id="name">${v.name}</td>
                        <td class="gai" id="title">${v.title}</td>
                        <td class="gai" id="content">${v.content}</td>
                        <td class="gai" id="img">${v.img}</td>
                        <td class="gai" id="uid">${v.uid}</td>
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


    //添加
    $("button[type=submit]").on("click",function(e){
        // e.preventDefault();
        let formData=$("#form").serialize();
        // console.log(formData);//label=e&label=q&label=e&label=q&radiobutton=1
        $.ajax({
            url:"../lyx_state_admin/add?"+formData,
            // data:formData,
            success:function(){
                location.reload();
                location.href=location.pathname+'#list';
            }
        })
        return false;
    })


    // 删除
    $("tbody").on("click",".delete",function(){
        let id=$(this).closest("tr").attr("data-id");
        $(this).closest("tr").remove();
        $.ajax({
            url:"../lyx_state_admin/delete",
            data:{id:id},
            success:function(){
                    location.href=location.pathname+'#list';
            }
        })
    })

    //修改
    $("tbody").on('click','.gai',function(){
        let id=$(this).closest("tr").attr("data-id");
        var ziduan=$(this).attr("id");
        let cont=$(this).html();//原内容
        $(this).html("");
        $('<textarea cols="5" class="gaibox"></textarea>').appendTo($(this)).focus();
        $(".gaibox").focusout(function () {
            var newcont=$(this).val();
            if(newcont.length==0){
                // console.log(1)
                $(this).closest("td").html(cont);
            }else {
                $(this).closest("td").html(newcont);
                $.ajax({
                    url:"../lyx_state_admin/update",
                    data:{id:id,ziduan:ziduan,val:newcont},
                      success:function(data){
                    }
                })
            }
        })
    })





})