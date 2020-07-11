function change_over() {
    var new_name=document.getElementById("name").value;
    var new_mark=document.getElementById("mark").value;
    var new_title=document.getElementById("model_title").value;
    var new_link=document.getElementById("link").value;
    var new_tip=document.getElementById("tip").value;
    var new_Array=[new_name,new_title,new_link,new_tip];
    window.open("模板文件管理.html?=B="+new_Array);
}