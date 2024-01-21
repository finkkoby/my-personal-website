window.onload = function() {
    const selfie = document.getElementById("selfie");
    selfie.addEventListener('click', function() {
        selfie.style = "border-color:white;";
    });
    const logo = document.getElementById("initals");
    logo.addEventListener('mouseover', function() {
        logo.style = "opacity:100%";
    });
    logo.addEventListener('mouseout', function() {
        logo.style = "opacity:50%";
    });
}