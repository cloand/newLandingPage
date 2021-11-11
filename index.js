
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


var client_names = document.querySelectorAll('.logan');

var client_names_options = {
    root:null,
    threshold:0,
        
}

var observing = new IntersectionObserver(callBackFunc , client_names_options);

client_names.forEach(ele=>{
    observing.observe(ele);
});

function callBackFunc(entry){
    entry.forEach(ment => {
        if(ment.isIntersecting){
            ment.target.classList.add('onlyscale');
        }else{
            ment.target.classList.remove('onlyscale');
            
        }
    });
}

var client_heading = document.querySelector('.upper');

var client_options = {
    root:null,
    threshold:0.3,
    rootMargin:'-50px',
}

var observer = new IntersectionObserver(callBackFunction , client_options);

observer.observe(client_heading);

function callBackFunction(entries){
    entries.forEach(element => {
        if(element.isIntersecting){
            
            element.target.classList.add('removing');
        }else{
            element.target.classList.remove('removing');
            
        }
    });
}

var client_heading = document.querySelector('.titling');

var client_optioning = {
    root:null,
    threshold:0.3,
    rootMargin:'-50px',
}

var observer = new IntersectionObserver(callBackFunctions , client_optioning);

observer.observe(client_heading);

function callBackFunctions(entries){
    entries.forEach(element => {
        if(element.isIntersecting){
            
            element.target.classList.add('clients_design');
        }else{
            element.target.classList.remove('clients_design');
            
        }
    });
}


var client_checking = document.querySelector('.dsc');

var client_optionings = {
    root:null,
    threshold:0.3,
    rootMargin:'-50px',
}

var observent = new IntersectionObserver(callBackFunctioned , client_optionings);

observent.observe(client_checking);

function callBackFunctioned(entries){
    entries.forEach(element => {
        if(element.isIntersecting){
            
            element.target.classList.add('clients_design');
        }else{
            element.target.classList.remove('clients_design');
            
        }
    });
}

var positioning = document.querySelector('.middlers');

var positioning_options = {
    root:null,
    threshold:1.0,
}

var watching = new IntersectionObserver(positionFunction , positioning_options);

watching.observe(positioning);

var sideways = document.getElementsByClassName('chilling');

function positionFunction(entries){
    entries.forEach(element => {
        if(element.isIntersecting){
        
            element.target.classList.add('addposition');
        }else{
            element.target.classList.remove('addposition');
            
        }
    });
}





