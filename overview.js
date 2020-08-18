function overview(){

    // emp
    employeeList = JSON.parse(localStorage.getItem("data"));
    var count = Object.keys( employeeList).length;
    // console.log(count);
    var h3=document.createElement("h3");
    h3.innerHTML= count;
    var child = document.getElementById("employee-count");
    child.after(h3);

    // proj
    projectList = JSON.parse(localStorage.getItem("project"));
    var count = Object.keys( projectList).length;
    // console.log(count);
    var h3=document.createElement("h3");
    h3.innerHTML= count;
    var child = document.getElementById("project-count");
    child.after(h3);


    // dept
    departmentList = JSON.parse(localStorage.getItem("dept"));
    var count = Object.keys(departmentList).length;
    // console.log(count);
    var h3=document.createElement("h3");
    h3.innerHTML= count;
    var child = document.getElementById("department-count");
    child.after(h3);

    // project assigned

    departmentList = JSON.parse(localStorage.getItem("data"));
    console.log(departmentList[0]);
    var project_assigned = 0;
    for(result of departmentList){
        console.log(result.project);
        if(result.project != ''){
            project_assigned++;
        }
    } 
    
    console.log(project_assigned);
    var h3=document.createElement("h3");
    h3.innerHTML= project_assigned;
    var child = document.getElementById("project-assign");
    child.after(h3);




}