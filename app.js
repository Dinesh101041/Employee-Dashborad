const name=document.getElementById("name");
const dob=document.getElementById("dob");
const experience=document.getElementById("experience"); 
const address=document.getElementById("address"); 
const phone=document.getElementById("phone");
const department=document.getElementById("department"); 
const project=document.getElementById("project");
const table=document.getElementById("response"); 
const addButton=document.getElementById("sub"); 
const editbutton = document.querySelector("#edit");
const form = document.querySelector("#form");


let result=[]; 
result = JSON.parse(localStorage.getItem("data"));
console.log(result);
var i;
if(result == null || result == ""){
	i = 1;
}
else{
	arr = result.length;
	//sconsole.log(arr);
	for(var j = 0; j < arr; j++) {
		var obj = result[j];
		// console.log(obj);
		var i = obj.id;
		//console.log(i);
		i++;
	}
}



function loadFromLocal(){
	if(localStorage.getItem("data") != undefined && localStorage.getItem("data") !=""){
		result = JSON.parse(localStorage.getItem("data"));
	} else {
		result = [];
	}
}
form.addEventListener("submit",(event)=>{
	event.preventDefault();
	let id = form.getAttribute("value");
	// console.log("ID:"+ id)
	if(id == 0){
		// console.log("add");
		add();
		i++;
		form.style.display="none";
	} else {
		 console.log("edit");
		editValue(id);
		form.style.display="none";
	}
	name.value=""; 
	dob.value=""; 
	experience.value="";
	address.value=""; 
	phone.value=""; 
	department.value="";
	project.value="";  
	form.setAttribute("value",0);
});
function add(){ 
	var objname=name.value; 
	var objdob=dob.value; 
	var objexperience=experience.value;
	var objaddress=address.value;
	var objphone=phone.value; 
	var objdepartment=department.value; 
	var objproject=project.value; 
	let obj;
	if(objname!=""&& objdob!=""&& objexperience!=""&& objaddress!=""&&objphone!="" ){
		obj={
			id:i,
			name: objname,
			dob: objdob,
			experience: objexperience,
			address: objaddress,
			phone:objphone,
			department:objdepartment,
			project:objproject
		} 
		result.push(obj); 
		name.value=""; 
		dob.value=""; 
		experience.value="";
		address.value=""; 
	 	phone.value="";
		department.value="";
		project.value=""; 

	}
	else{ 
		console.log("no data"); 
	}            
	
	
	LoadData(result);
	// console.log(result); 
	saveLocal(result);
}




function myfunction1(){
	document.getElementById("form");
	form.style.display = "block";
}

// delete popup

function myfunction3(delete_id){
	delpop.style.display = "block";
	document.getElementById("delpop").innerHTML = '<h2>Are you want to Delete</h2><button  onclick="remove('+ delete_id +')" id="yes">YES</button><button onclick="myfunction4()" id="No">No</button>';
	
}

// on click no button

function myfunction4(){
	document.getElementById("delpop");
	delpop.style.display = "none";
}



function editValue(id){
	let objname = name.value;
	let objdob = dob.value;
	let objexperience = experience.value;
	let objaddress = address.value;
	let objphone = phone.value;
	console.log(objphone);
	let objdepartment = department.value;
	console.log(objdepartment);
	let objproject = project.value;
	console.log(objproject);

	var obj = {
		id:i,
		name:objname,
		dob:objdob,
		experience:objexperience,
		address:objaddress,
		phone:objphone,
		department:objdepartment,
		project:objproject
	}
	let temp = [];
	for (value of result){
		if (value.id == id)
		{
			temp.push(obj);
		}
		else {
			temp.push(value);
		}
	}
	result=temp;
	LoadData(temp);
	editbutton.classList.add("hide");
	addButton.remove("hide");
	saveLocal(result);		
};

const LoadData=(values)=>{ 
	table.innerHTML=""; 
	var response=""; 
	for(value of values){ 
		response=response+ `<tr class="jst"><td>${value.name}</td> 
		<td>${value.dob}</td> 
		<td>${value.experience}</td>
		<td>${value.address}</td>
		<td>${value.phone}</td>
		<td>${value.department}</td>
		<td>${value.project}</td>
		<td><button  class="btnjs" Onclick=edit(${value.id});loadDept();loadproj();><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
		<td><button class="btndel" id="${value.id}" Onclick=myfunction3(${value.id});><i class="fa fa-trash" aria-hidden="true"></i></button></td></tr>`; 


	} 
	table.innerHTML=response; 
};

function remove(id){
	// console.log(id);
	var arr=[];
	for (value of result){
		if (value.id != id){
			arr.push(value);
		}
	}
	result= arr;
	LoadData(arr);
	saveLocal(arr);
	delpop.style.display = "none";
}

function edit(id){
	 form.style.display="block";
	 console.log(id);

	for (value of result){
		if (value.id == id){
			console.log(value.department);
			name.value = value.name;
			dob.value = value.dob;
			experience.value= value.experience;
			address.value =value.address;
			phone.value = value.phone;
			department.value = value.department;

			console.log(phone.value);
			project.value = value.project;
			form.setAttribute("value",value.id);
			editbutton.classList.remove("hide");
			addButton.classList.add("hide");
		}
	}
	
}


function saveLocal(json){
	localStorage.setItem("data", JSON.stringify(json));
}
loadFromLocal();
LoadData(result);



















function loadDept(){
	result1 = JSON.parse(localStorage.getItem("dept"));
	var ele = document.getElementById('department');
	ele.options.length = 0;
	ele.innerHTML = ele.innerHTML +
			'<option value="">-- Select --</option>';
	for (var i = 0; i < result1.length; i++) {
		ele.innerHTML = ele.innerHTML +
			'<option value="' + result1[i]['name'] + '">' + result1[i]['name'] + '</option>';
	}
}

function loadproj(){
	result1 = JSON.parse(localStorage.getItem("project"));
	var ele = document.getElementById('project');
	ele.options.length = 0;
	ele.innerHTML = ele.innerHTML +
			'<option value="">-- Select --</option>';
	for (var i = 0; i < result1.length; i++) {
		ele.innerHTML = ele.innerHTML +
			'<option value="' + result1[i]['name'] + '">' + result1[i]['name'] + '</option>';
	}
}

