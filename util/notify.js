function myFunction(param) {
    var x = document.getElementById("snackbar");
    x.innerHTML=param;
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}