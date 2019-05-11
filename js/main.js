$(document).ready(function(){
$(".stud-info").click(function(){
	$(".stud-data").show();
	$(".edu-data").hide();
	});
	
$(".edu-info").click(function(){
	$(".edu-data").show();
	$(".stud-data").hide();
});

	var stdarr=[];
$(".btnnext").click(function(){
	$(".edu-data").show();
	$(".stud-data").hide();
	var fname=$("#fname").val();
	var lname=$("#lname").val();
	var contact=$("#contact").val();
	
	stdarr.push(fname,lname,contact);
	console.log(stdarr);
	console.log(fname);
});
$(".btnSubmit").click(function(){
	var stream=$("#stream").val();
	var branch=$("#branch").val();
	var institute=$("#institute").val();
	stdarr.push(stream,branch,institute);

	$(".edu-data").hide();
	$(".stud-data").show();
	$("#fname").val(null);
	$("#lname").val(null);
	$("#contact").val(null);
	$("#stream").val(null);
	$("#branch").val(null);
	$("#institute").val(null);
	$(".table1").show();
	var tbody=document.getElementById("tbody");
	var tr = document.createElement('tr');
    var fname = document.createElement('td');
    var lname = document.createElement('td');
    var contact = document.createElement('td');
    var stream = document.createElement('td');
    var branch= document.createElement('td');
    var institute = document.createElement('td');
	
	fname.innerHTML=stdarr[0];
	lname.innerHTML=stdarr[1];
	contact.innerHTML=stdarr[2];
	stream.innerHTML=stdarr[3];
	branch.innerHTML=stdarr[4];
	institute.innerHTML=stdarr[5];
	tr.appendChild(fname);
	tr.appendChild(lname);
	tr.appendChild(contact);
	tr.appendChild(stream);
	tr.appendChild(branch);
	tr.appendChild(institute);
	tbody.appendChild(tr);
	stdarr=[]
	return tr;
});
});