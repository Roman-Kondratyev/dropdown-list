// const active = document.querySelectorAll(`active`);

// function show(){
//      const wrapper = document.querySelector(`wrapper`)
//     if(wrapper.hidden=== true){
//         wrapper.hidden= false ;
//         img.stily ='background-image: url(./assets/Chevron2.svg)';
//     }else{
//         wrapper.hidden=== true;
//         img.stily ='background-image: url(./assets/Chevron.svg)';
//     }
// }



// const par = document.querySelectorAll('.wrapper');

// par.addEventListener(`click`, function(event){
// let paragraff = document.querySelector


// })

const active = document.querySelector(".active");

function show() {
  const wrapper = document.querySelector(".wrapper");
  let img = document.querySelector(".img");
  if (wrapper.hidden === true) {
    wrapper.hidden = false;
    img.stily ='background-image: url(./assets/Chevron2.svg)';
  } else {
    wrapper.hidden = true;
    img.stily ='background-image: url(./assets/Chevron.svg)';
  }
}

active.addEventListener("click", function () {
  show();
});

const par = document.querySelector(".wrapper");

par.addEventListener("click", function (event) {
  let paragraff = document.querySelector(".active p");
  paragraff.textContent = event.target.textContent;
  show();
});

// const active = document.querySelector('.active');

// function show() {
//     const wrapper = document.querySelector('.wrapper')
//     let img = document.querySelector('.img')
//     if (wrapper.hidden === true) {
//         wrapper.hidden = false;
//         img.style = 'background-image: url(./assets/Chevron2.svg)'
//     } else {
//         wrapper.hidden = true;
//         img.style = 'background-image: url(./assets/Chevron.svg)'
//     }
// }

// active.addEventListener('click', function () {
//     show()
// });

// const par = document.querySelector('.wrapper');

// par.addEventListener('click', function (event) {
//     let paragraph = document.querySelector('.active p');
//     paragraph.textContent = event.target.textContent;
//     show()
// })