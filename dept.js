const name=document.getElementById("name");
const description=document.getElementById("description"); 
const table=document.getElementById("response"); 
const addButton=document.getElementById("sub"); 
const editbutton = document.querySelector("#edit");
const form = document.querySelector("#form");

let result=[]; 

result = JSON.parse(localStorage.getItem("dept"));
var i;
console.log(result);
if(result == null){
	i = 1;
}
else{
	arr = result.length;
	for(var j = 0; j < arr; j++) {
		var obj = result[j];
		var i = obj.id;
		i++;
	}
}



function loadFromLocal(){
	if(localStorage.getItem("dept") != undefined && localStorage.getItem("dept") !=""){
		result = JSON.parse(localStorage.getItem("dept"));
	} else {
		result = [];
	}
}
form.addEventListener("submit",(event)=>{
	event.preventDefault();
	let id = form.getAttribute("value");
	console.log("ID:"+ id)
	if(id == 0){
		console.log("add");
		add();
		i++;
		form.style.display="none";
	} else {
		console.log("edit");
		editValue(id);
	}
	name.value=""; 
	description.value="";
	form.setAttribute("value",0);
});
function add(){ 
	var objname=name.value; 
	var objdescription=description.value; 
 
	let obj;
	if(objname!=""&&objdescription!="" ){
		obj={
			id:i,
			name: objname,
			description:objdescription,
		} 
		result.push(obj); 
		console.log(i);
		name.value=""; 
		description.value=""; 

	}
	else{ 
		console.log("no data"); 
	}            
	
	
	LoadData(result);
	console.log(result); 
	saveLocal(result);
}

function myfunction1(){
	document.getElementById("form").reset();
	form.style.display="block";
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
	let objdescription = description.value;

	var obj = {
		id:id,
		name:objname,
		description:objdescription,
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
	addButton.classList.remove("hide");
	saveLocal(result);		
};

const LoadData=(values)=>{ 
	table.innerHTML=""; 
	var response=""; 
	for(value of values){ 
		response=response+ `<tr  class="jst"><td>${value.name}</td> 
		<td>${value.description}</td>
		<td><button  class="deptedit" Onclick=edit(${value.id});loadDept();loadproj()><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
		<td><button class="deptrash" id="${value.id}" Onclick=myfunction3(${value.id});><i class="fa fa-trash" aria-hidden="true"></i></button></td></tr>`; 


	} 
	table.innerHTML=response; 
};

function remove(id){
	console.log(id);
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
			name.value = value.name;
			description.value = value.description;
			form.setAttribute("value",value.id);
			editbutton.classList.remove("hide");
			addButton.classList.add("hide");
		}
	}
}


function saveLocal(json){
	localStorage.setItem("dept", JSON.stringify(json));
}
loadFromLocal();
LoadData(result);