const targetsRight = document.querySelectorAll('[data-anime="right"]');
const targetsRight2 = document.querySelectorAll('[data-anime="right2"]');
const targetsLeft = document.querySelectorAll('[data-anime="left"]');

function animeScroll() {
    const windowTop = window.pageYOffset + 170;
    console.log("Window Top:", windowTop); 
    targetsRight.forEach(function(element) {
        console.log("Right Element:", element); 
        if (windowTop > element.offsetTop) {
            element.classList.add("animation");
        } else {
            element.classList.remove("animation");
        }
    });
}

function animeScroll2() {
    const windowTop2 = window.pageYOffset + +800;
    console.log("Window Top:", windowTop2); 
    targetsRight2.forEach(function(element) {
        console.log("Right Element:", element); 
        if (windowTop2 > element.offsetTop) {
            element.classList.add("animation");
        } else {
            element.classList.remove("animation");
        }
    });
}
function animeScroll3() {
    const windowTop3 = window.pageYOffset + +800;
    console.log("Window Top for Down:", windowTop3); 
    targetsLeft.forEach(function(element) {
        console.log("Down Element:", element); 
        if (windowTop3 > element.offsetTop) {
            element.classList.add("animation3");
        } else {
            element.classList.remove("animation3");
        }
    });
}


window.addEventListener('scroll', function() {
    animeScroll();
    animeScroll2();
    animeScroll3();
    
});
