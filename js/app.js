let dd = document.getElementById("drop-down");
dd.style.display = "none";
function dropDownTgl(){
    if(dd.style.display == "none"){
        dd.style.display = "block";
    }else{
        dd.style.display = "none";
    }
}
let sidebar = document.getElementById("sidebar");
function showSideBar(){
    if(sidebar.classList.contains("sidebar")){
        sidebar.classList.remove("sidebar");
    }else{
        sidebar.classList.add("sidebar");
    }
}