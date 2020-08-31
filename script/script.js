window.addEventListener("scroll", test);
var paralex1 = document.getElementById("paralex1");
var paralex3 = document.getElementById("paralex3");

function test() {
    var x = document.documentElement.scrollTop;
    console.log("translate(0," + x +")");
    paralex1.style.backgroundPositionY = -x/3 + "px";
    paralex3.style.backgroundPositionY = -x/3+300 + "px";

}