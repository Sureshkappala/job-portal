let selectedRole = "";

function setRole(role){

selectedRole = role;

alert(role + " selected");

}

function login(){

let email =
document.getElementById("email").value.trim();

let password =
document.getElementById("password").value.trim();

if(selectedRole === ""){

alert("Please Select Employee, HR or Admin");

return;

}

if(email === "" || password === ""){

alert("Please Enter Username and Password");

return;

}

if(selectedRole === "employee"){

window.location.href =
"pages/employee.html";

}

else if(selectedRole === "hr"){

window.location.href =
"pages/hr.html";

}

else if(selectedRole === "admin"){

window.location.href =
"pages/admin.html";

}

}