function randBgColor() {
    document.body.style.backgroundColor = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ", 0.2"+")";
    //min-max of rgb is (0, 0, 0) - (255, 255, 255) , Math.random is random float number from 0 to 1
}
function biggertext(){
    var bigbut = document.getElementById("bigbut");
    var size = parseFloat(window.getComputedStyle(bigbut, null).getPropertyValue("font-size"));
    bigbut.style.fontSize = size + 3 + "px";
}