
var flag = 0;
var obj = document.getElementsByClassName("catelog");

function dropDown() {
    if (!flag) {
        flag = 1;
        obj[0].style.display = "block";
        obj[0].style.animation="dropeffect 1s 0s forwards normal"
    } else {
        flag = 0;
        
        obj[0].style.animation = "closing 1s 0s forwards normal";
      
    }
}

var x = window.matchMedia('(min-width:750px)');

function checkSize(x) {
    if (x.matches) {
        flag = 1;
        obj[0].style.display = "none";
        dropDown();
    } else {
        flag = 0;
        console.log("hello");
    }
}

checkSize(x);
x.addListener(checkSize);