const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];
const btnSliderR = document.getElementById("btn_slider--right");
const btnSliderL = document.getElementById("btn_slider--left");

slider.insertAdjacentElement('afterbegin', sliderSectionLast) //para traer el ultimo y ponerlo al principio

//funciones

function trasladarR(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
}

function traslateL(){

}