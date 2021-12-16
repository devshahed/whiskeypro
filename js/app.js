let sidebar = document.getElementById("sidebar");
let header = document.getElementsByTagName("HEADER")[0];

function showSidebar(){
    if(sidebar.classList.contains("sidebar")){
        sidebar.classList.remove("sidebar");
        header.classList.remove("blackbg");
    }else{
        sidebar.classList.add("sidebar");
        header.classList.add("blackbg");
    }
}