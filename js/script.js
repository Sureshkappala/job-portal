let selectedRole = "";

/* Role Selection */
function setRole(role) {

    selectedRole = role;

    alert(role.toUpperCase() + " Selected");

}

/* Navbar Hamburger Menu */
function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    if(navLinks){
        navLinks.classList.toggle("active");
    }

}

/* Dashboard Sidebar Menu */
function toggleDashboardMenu() {

    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");

    if(sidebar){
        sidebar.classList.toggle("show");
    }

    if(overlay){
        overlay.classList.toggle("show");
    }

    /* Stop background scrolling when menu is open */
    if(sidebar && sidebar.classList.contains("show")){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto";
    }

}

/* Login */
function checkLogin() {

    let username =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value.trim();

    if (selectedRole === "") {

        alert("Please select Employee, HR or Admin");
        return;

    }

    if (username === "" || password === "") {

        alert("Please enter Username and Password");
        return;

    }

    /* Employee Dashboard */
    if (selectedRole === "employee") {

        window.location.href = "pages/employee.html";

    }

    /* HR Dashboard */
    else if (selectedRole === "hr") {

        window.location.href = "pages/hr.html";

    }

    /* Admin Dashboard */
    else if (selectedRole === "admin") {

        window.location.href = "pages/admin.html";

    }

}

/* Close Sidebar When Clicking Overlay */
document.addEventListener("DOMContentLoaded", function() {

    const overlay = document.querySelector(".overlay");

    if(overlay){

        overlay.addEventListener("click", function() {

            document.querySelector(".sidebar")
                .classList.remove("show");

            overlay.classList.remove("show");

            document.body.style.overflow = "auto";

        });

    }

});