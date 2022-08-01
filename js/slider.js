const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];
const btnSliderR = document.getElementById("btn_slider--right");
const btnSliderL = document.getElementById("btn_slider--left");

slider.insertAdjacentElement('afterbegin', sliderSectionLast) //para traer el ultimo y ponerlo al principio

//funciones

function traslateR(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function traslateL(){
    
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnSliderR.addEventListener("click", function(){
    traslateR();
})
btnSliderL.addEventListener("click", function(){
    traslateL();
})
//para que avance automaticamente sin click
setInterval(function(){
    traslateR();
}, 5000);
