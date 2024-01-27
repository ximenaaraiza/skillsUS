var shadeButton = document.getElementById(theme);
var bodyColor = document.getElementById(body);

function changeBackground(){
    bodyColor.style.backgroundColor = "blue";
}

shadeButton.addEventListener("click", changeBackground);