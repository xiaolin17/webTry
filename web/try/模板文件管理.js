
var row=1;
function insert() {
    window.location="insert.html"
}
function change0() {
    var change_name="table1";
    var change_mark="report01";
    var change_title="table1";
    var change_link="https://www.w3school.com.cn/html/html_tables.asp";
    var change_tip="";
    var change_Array=[change_name,change_mark,change_title,change_link,change_tip];
    window.location="change.html?=A="+change_Array;
}

function Delete0(){
    var delete0=document.getElementById("row0");
    delete0.style.display="none";
}

function AddRow(newArray){
   var nowrow=row;
   var table=document.getElementById("newInput");
   var tr=document.createElement("tr");
   var tdArray=[];
   var changebox=document.createElement("input");
   changebox.type="button";
   changebox.value="编辑";
   changebox.addEventListener('click',function () {
       var new_name=document.getElementById("0").value;
       var new_mark=document.getElementById("0").value;
       var new_title=document.getElementById("2").value;
       var new_link=document.getElementById("3").value;
       var new_tip=document.getElementById("4").value;
       var new_Array=[new_name,new_title,new_link,new_tip];
       window.location="change.html?=B="+new_Array;
   });
   var deletebox=document.createElement("input");
   deletebox.type="button";
   deletebox.value="删除";
   deletebox.addEventListener('click',function () {
       table.removeChild(tr);
   });
   for(var i=0;i<6;i++){
       if(i <4){
       tdArray[i]=document.createElement("td");
       tdArray[i].id=i;
       tdArray[i].innerHTML=newArray[i];
       tr.appendChild(tdArray[i]);
       }
       else{
           tdArray[i]=document.createElement("td");
           tdArray[i].id=i;
       }
   }
   tdArray[4].appendChild(changebox);
   tr.appendChild(tdArray[4]);
   tdArray[5].appendChild(deletebox);
   tr.appendChild(tdArray[5]);
   table.appendChild(tr);
   row++;
}
function Add() {
    var new_name=document.getElementById("name").value;
    var new_mark=document.getElementById("mark").value;
    var new_title=document.getElementById("model_title").value;
    var new_link=document.getElementById("link").value;
    var new_tip=document.getElementById("tip").value;
    var new_Array=[new_name,new_title,new_link,new_tip];
    window.open("模板文件管理.html?=A="+new_Array);
}

function ChangeRow(newArray){
    AddRow(newArray);
}




