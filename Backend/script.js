
const targetsRight = document.querySelectorAll('[data-anime="right"]');
const targetsDown = document.querySelectorAll('[data-anime="down"]');


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
    const windowTop2 = window.pageYOffset + -600;
    console.log("Window Top for Down:", windowTop2); 
    targetsDown.forEach(function(element) {
        console.log("Down Element:", element); 
        if (windowTop2 > element.offsetTop) {
            element.classList.add("animation2");
        } else {
            element.classList.remove("animation2");
        }
    });
}
window.addEventListener('scroll', function() {
    animeScroll();
    animeScroll2();
    animeScroll3() ;
    animeScroll4();
});

document.addEventListener("keydown", function(event){
    if(event.key === 'Backspace'){
        localStorage.clear()
        event.preventDefault()
    }
})
