
var flag = 0;
var obj = document.getElementsByClassName("catelog");

function dropDown() {
    if (!flag) {
        flag = 1;
        obj[0].style.display = "block";
        obj[0].style.animation = "dropeffect 1s 0s forwards normal"
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
    root: null,
    threshold: 0,

}

var observing = new IntersectionObserver(callBackFunc, client_names_options);

client_names.forEach(ele => {
    observing.observe(ele);
});

function callBackFunc(entry) {
    entry.forEach(ment => {
        if (ment.isIntersecting) {
            ment.target.classList.add('onlyscale');
        } else {
            ment.target.classList.remove('onlyscale');

        }
    });
}

var client_heading = document.querySelectorAll('.single_element');

var client_options = {
    root: null,
    threshold: 1.0,
    rootMargin: '-50px',
}

var observer = new IntersectionObserver(callBackFunction, client_options);

client_heading.forEach(element => {
    observer.observe(element);
})

function callBackFunction(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.add('removing');
        } else {
            element.target.classList.remove('removing');

        }
    });
}

var client_heading = document.querySelector('.titling');

var client_optioning = {
    root: null,
    threshold: 0.3,

}

var observer = new IntersectionObserver(callBackFunctions, client_optioning);

observer.observe(client_heading);

function callBackFunctions(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.add('clients_design');
        } else {
            element.target.classList.remove('clients_design');

        }
    });
}


var client_checking = document.querySelector('.dsc');

var client_optionings = {
    root: null,
    threshold: 1.0,

}

var observent = new IntersectionObserver(callBackFunctioned, client_optionings);

observent.observe(client_checking);

function callBackFunctioned(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.add('clients_design');
        } else {
            element.target.classList.remove('clients_design');

        }
    });
}





var full = document.querySelector('.full-circle');

var full_optionings = {
    root: null,
    threshold: 1.0,

}

var obse = new IntersectionObserver(fullFunctioned, full_optionings);

obse.observe(full);

function fullFunctioned(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.add('chilling_prev');
        } else {
            element.target.classList.remove('chilling_prev');

        }
    });
}


var anti = document.querySelector('.half-circle');

var anti_optionings = {
    root: null,
    threshold: 1.0,

}

var obs = new IntersectionObserver(antiFunctioned, anti_optionings);

obs.observe(anti);

function antiFunctioned(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.add('chilling_next');
        } else {
            element.target.classList.remove('chilling_next');

        }
    });
}

var design = document.querySelector('.design');

var design_optionings = {
    root: null,
    threshold: 1.0,

}

var ob = new IntersectionObserver(designFunctioned, design_optionings);

ob.observe(design);

function designFunctioned(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.add('design_api');
        } else {
            element.target.classList.remove('design_api');

        }
    });
}


var right = document.querySelector('.telling-right');

var right_optionings = {
    root: null,
    threshold: 1.0,
    rootMargin: '-50px',
}

var obb = new IntersectionObserver(rightFunctioned, right_optionings);

obb.observe(right);

function rightFunctioned(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.add('telling_design');
        } else {
            element.target.classList.remove('telling_design');

        }
    });
}

var inner_text = document.querySelectorAll('.inner-text');

var inner_options = {
    root: null,
    threshold: 1.0,
    rootMargin: '-20px',

}

var ostv = new IntersectionObserver(innerFunction, inner_options);

inner_text.forEach(element => {
    ostv.observe(element);
})

function innerFunction(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.add('clients_requ');
        } else {
            element.target.classList.remove('clients_requ');

        }
    });
}

var line = document.querySelector('.line');

var line_optionings = {
    root: null,
    threshold: 1.0,
    rootMargin: '-50px',

}

var obe = new IntersectionObserver(lineFunctioned, line_optionings);

obe.observe(line);

function lineFunctioned(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {

            element.target.classList.add('onlyscale');
        } else {
            element.target.classList.remove('onlyscale');

        }
    });
}


/// animation with scroll

var transitionBox = document.querySelector('.pad-container');
scrollIntoViewPartial();

function scrollIntoViewPartial() {
    var position = transitionBox.getBoundingClientRect();
    var elementTop = position.top;
    var elementBottom = position.bottom;
    if (elementTop < window.innerHeight && elementBottom > 0) {
        return true;
    }
    return false;
}

function scrollIntoViewFully() {
    var position = transitionBox.getBoundingClientRect();
    var elementTop = position.top;
    var elementBottom = position.bottom;
    if (elementTop > 0 && elementBottom < window.innerHeight) {
        return true;
    }
    return false;
}

window.addEventListener('scroll', () => {



    if (scrollIntoViewPartial()) {
        var slider = transitionBox.getBoundingClientRect();
        var elementAbove = slider.top;
        var val = elementAbove * 0.05;
        transitionBox.style.transform = `translateX(${0.45 * val}%)`;

    }

        listings.forEach(element => {
            
            listings.forEach(element => {
                var axis = element.getBoundingClientRect();
                if (axis.top < window.innerHeight / 2 && axis.bottom > window.innerHeight / 2) {
                    element.style.opacity = `1`;
                    element.style.transform=`translateX(10%)`
                }
                else{
                    element.style.opacity = `0.5`;
                    element.style.transform=`translateX(0)`
                }
            });
            
        });
    
});

var listings = document.querySelectorAll('.only-center');


