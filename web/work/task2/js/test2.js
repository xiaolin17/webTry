/*var students = {
    id:"1",
    studentID:11703080318,
    name:任凤梅,
    college:人工智能学院,
    specialty:软件工程,
    grade:2017,
    class:2,
    age:19,};*/
/*创建学生对象*/
function Student(id,studentID,name,college,major,grade,Class,age) {
    this.id=id;
    this.studentID=studentID;
    this.name=name;
    this.college=college;
    this.major=major;
    this.grade=grade;
    this.Class=Class;
    this.age=age;
}
var page=1;
var pageStartIndex = 0;
var pageEndIndex = 10;//定义每一页的开始和结束的下标，开始下表一定为0，结束下表不大于10
var information = ["id","studentID","name","college","major","grade","Class","age"];//存放每一个学生的相关信息
var studentList=[];
var the_students;/*当前修改的学生*/
studentList.push(new Student(1,11703080301,"KOBE","人工智能","会计",2017,7,18));
studentList.push(new Student(2,11703080302,"WADE","计算机学院","计算机",2017,7,19));
studentList.push(new Student(3,11703080303,"HARDEN","计算机学院","计算机",2015,3,18));
studentList.push(new Student(4,11703080304,"CUYYR","外国语学院","英语",2018,7,18))
studentList.push(new Student(5,11703080305,"JAMES","人工智能学院","大数据",2016,7,19));
studentList.push(new Student(6,11703080306,"IBK","人工智能学院","大数据",2014,2,18));
studentList.push(new Student(7,11703080307,"DURANT","会计学院","国际贸易",2005,7,15));
studentList.push(new Student(8,11703080308,"LIN","外国语学院","英语",2017,7,19));
studentList.push(new Student(9,11703080309,"ZHOU","人工智能学院","软工",2017,1,18));
studentList.push(new Student(10,11703080310,"PUAL","文学学院","文学",2016,7,19));
studentList.push(new Student(11,11703080311,"WEST","人工智能学院","软工",2015,4,21));
studentList.push(new Student(12,11703080312,"LOVE","计算机学院","计算机",2014,7,18));
studentList.push(new Student(13,11703080313,"SMITH","人工智能学院","电科",2015,4,20));
studentList.push(new Student(14,11703080314,"BILL","人工智能学院","软件工程",2017,7,18));
studentList.push(new Student(15,11703080315,"WALL","美术学院","绘画",2016,7,18));
studentList.push(new Student(16,11703080316,"YAO","计算机学院","计算机",2017,6,20));
studentList.push(new Student(14,11703080317,"张继衡","人工智能学院","软件工程",2017,7,18));
studentList.push(new Student(14,11703080318,"李嘉诚","人工智能学院","软件工程",2017,7,18));
studentList.push(new Student(14,11703080319,"马云","人工智能学院","软件工程",2017,7,18));
studentList.push(new Student(14,11703080320,"王健林","人工智能学院","软件工程",2017,7,18));/*原始数据*/
/*加载method方法*/
window.onload=function () {
    method();
}

/*method方法将数组对象的东西写入表格中*/
function method(){
    var table=document.getElementById("information");
    for (var i=pageStartIndex;i<pageEndIndex;i++){
        var tr = document.createElement("tr");
        var checkbox = document.createElement("input");//选择
        checkbox.type = "checkbox";
        checkbox.name = "select";
        var check = document.createElement("td");//选择框
        check.appendChild(checkbox);
        tr.appendChild(check);
        for(var k=0;k<8;k++){//每一行的td
            var td=document.createElement("td");
            td.innerHTML=studentList[i][information[k]];
            tr.appendChild(td);
        }

        /*查看功能*/
        var link_search = document.createElement("a");
        var tda = document.createElement("td");//给链接创建一个td格子
        tda.appendChild(link_search);
        link_search.innerHTML="查看 ";
        link_search.style.cursor="pointer";
        link_search.style.color="red";
        //获取表格中的信息
        link_search.onclick = function() {
            document.getElementById("search_modal").style.display = "inline";
            var the_student = this.parentNode.parentNode.rowIndex;
            document.getElementById("search_studentID").value = document.getElementById("information").rows[the_student].cells[2].innerHTML;
            document.getElementById("search_name").value = document.getElementById("information").rows[the_student].cells[3].innerHTML;
            document.getElementById("search_college").value = document.getElementById("information").rows[the_student].cells[4].innerHTML;
            document.getElementById("search_major").value = document.getElementById("information").rows[the_student].cells[5].innerHTML;
            document.getElementById("search_grade").value = document.getElementById("information").rows[the_student].cells[6].innerHTML;
            document.getElementById("search_Class").value = document.getElementById("information").rows[the_student].cells[7].innerHTML;
            document.getElementById("search_age").value = document.getElementById("information").rows[the_student].cells[8].innerHTML;
        }
        /*link.onclick=search_students(this);/!*查看学生信息*!/*/

        /*修改学生信息功能*/
        var link_change = document.createElement("a");
        tda.appendChild(link_change);
        link_change.innerHTML=" 修改";
        link_change.style.cursor="pointer";
        link_change.style.color="red";
        //修改时先获取表格中的信息
        link_change.onclick = function() {
            document.getElementById("change_modal").style.display = "inline";
            the_students = this.parentNode.parentNode.rowIndex;
            document.getElementById("change_studentID").value = document.getElementById("information").rows[the_students].cells[2].innerHTML;
            document.getElementById("change_name").value = document.getElementById("information").rows[the_students].cells[3].innerHTML;
            document.getElementById("change_college").value = document.getElementById("information").rows[the_students].cells[4].innerHTML;
            document.getElementById("change_major").value = document.getElementById("information").rows[the_students].cells[5].innerHTML;
            document.getElementById("change_grade").value = document.getElementById("information").rows[the_students].cells[6].innerHTML;
            document.getElementById("change_Class").value = document.getElementById("information").rows[the_students].cells[7].innerHTML;
            document.getElementById("change_age").value = document.getElementById("information").rows[the_students].cells[8].innerHTML;
        }
        tr.appendChild(tda);
        table.appendChild(tr);
    }
    /*当前页码等信息*/
    document.getElementById("page").innerHTML = "第"+page+"页"+","+"共"+studentList.length+"条"+",(每页显示10条)";
    changeColor();
}


/*增加页码*/
function addPage() {
    if(pageEndIndex===studentList.length){
        alert("这已经是最后一页！");
        return -1;
    }
    page++;
    change();
    method();
}


/*减少页码*/
function subPage(){
    if(page===1){
        alert("这已经是第一页！")
        return -1;
    }
    page--;
    change();
    method();
}


/*改变当前页码*/
function change() {
    pageStartIndex = (page - 1) * 10;
    pageEndIndex = pageStartIndex + Math.min(studentList.length - (page - 1) * 10, 10);
    remove();
    // noinspection JSAnnotator
    document.getElementById("selectAll").checked=false;
}


/*删除一个学生*/
function remove() {
    var table=document.getElementById("information");
    var list=table.getElementsByTagName("tr");
    for (var i=list.length-1;i>0;i--) {
        table.removeChild(list[i]);
    }
    sort();
}


/*全选功能*/
function selectAll(obj) {
    if(obj.checked){
        var list=document.getElementsByName("select");
        for(var i=0;i<list.length;i++){
            list[i].checked=true;
        }
    }
    else{
        var list=document.getElementsByName("select");
        for(var i=0;i<list.length;i++){
            list[i].checked=false;
        }
    }
    sort();
}


/*删除一个学生*/
function del(){
    var list=document.getElementsByName("select");
    for(var i=list.length-1;i>=0;i--){
        if(list[i].checked===true){
            studentList.splice(pageStartIndex+i,1);
        }
    }
    if(page===1){
        page = 1;
        console.log(studentList.length/10-page+1);

    }
    else if(studentList.length/10-page+1 === 0){

        console.log("!1");
        page--;
    }
    var msg = "您真的确定要删除吗？\n\n请确认！";
    if (confirm(msg)===true){
        change();
        method();
        sort();
    }
    else{
        document.getElementById("selectAll").checked=false;
    }
}


/*显示增加模态框*/
function display_add() {
    document.getElementById("add_modal").style.display="inline";

}

/*添加取消后隐藏模态框*/
function close_add() {
    document.getElementById("add_modal").style.display="none";
    /*取消后重置表单信息*/
    reset();
}

/*新增学生*/
function add_students(){
    var id=studentList.length + 1;
    var studentID=document.getElementById("add_studentID").value;
    var name=document.getElementById("add_name").value;
    var college=document.getElementById("add_college").value;
    var major=document.getElementById("add_major").value;
    var grade=document.getElementById("add_grade").value;
    var Class=document.getElementById("add_Class").value;
    var age=document.getElementById("add_age").value;
    studentList.push(new Student(id,studentID,name,college,major,grade,Class,age));
    document.getElementById("add_modal").style.display="none";
    change();
    method();
    /*提交成功以后重置表单中的信息*/
    reset();
    /*对序号进行重新排序*/
    sort();
}

/*查看取消后隐藏模态框*/
function close_search() {
    document.getElementById("search_modal").style.display = "none";

}

/*修改学生信息*/
function change_students() {
    /*获取表单中的信息*/
    var id = studentList.length;
    var studentID = document.getElementById("change_studentID").value;
    var name = document.getElementById("change_name").value;
    var college = document.getElementById("change_college").value;
    var major = document.getElementById("change_major").value;
    var grade = document.getElementById("change_grade").value;
    var Class = document.getElementById("change_Class").value;
    var age = document.getElementById("change_age").value;
    /*将表单中的信息修改到表格中*/
    document.getElementById("information").rows[the_students].cells[1].innerHTML = id;
    document.getElementById("information").rows[the_students].cells[2].innerHTML = studentID;
    document.getElementById("information").rows[the_students].cells[3].innerHTML = name;
    document.getElementById("information").rows[the_students].cells[4].innerHTML = college;
    document.getElementById("information").rows[the_students].cells[5].innerHTML = major;
    document.getElementById("information").rows[the_students].cells[6].innerHTML = grade;
    document.getElementById("information").rows[the_students].cells[7].innerHTML = Class;
    document.getElementById("information").rows[the_students].cells[8].innerHTML = age;
    document.getElementById("change_modal").style.display = "none";
}

/*隐藏修改模态框*/
function close_change() {
    document.getElementById("change_modal").style.display = "none";
}

/*重置表单信息*/
function reset(){
    document.getElementById("add_studentID").value=null;
    document.getElementById("add_name").value=null;
    document.getElementById("add_college").value=null;
    document.getElementById("add_major").value=null;
    document.getElementById("add_grade").value=null;
    document.getElementById("add_Class").value=null;
    document.getElementById("add_age").value=null;
}

/*对序号进行重新排序*/
function sort(){
    for(var i=0; i<studentList.length;i++){
        studentList[i].id =i+1;
    }
}

/*隔行改变背景颜色*/
function changeColor(){
    var line = document.getElementById("information").getElementsByTagName("tr");
    for(let j=1;j<=pageEndIndex-pageStartIndex;j++) {

        if (j % 2 === 0) {
            line[j].style.backgroundColor = "#eef1f8";
        }
        else {
            line[j].style.backgroundColor = "#ffffff";
        }
    }
}


