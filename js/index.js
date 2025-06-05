// function showcontent(){
//     $("#content").toggleClass("showcontent");
//     $("#lessbtn").toggleClass("lessbutton");
//     $("#morebtn").toggleClass("morebutton");
// }
function toggleContent() {
  const content = document.getElementById("content");
  const lessBtn = document.getElementById("lessbtn");
  const moreBtn = document.getElementById("morebtn");

  content.classList.toggle("show-content");

  if (content.classList.contains("show-content")) {
    lessBtn.classList.add("d-none");
    moreBtn.classList.remove("d-none");
  } else {
    lessBtn.classList.remove("d-none");
    moreBtn.classList.add("d-none");
  }
}
// function toggleContent() {
//   const content = document.getElementById("contentpro");
//   const PlusBtn = document.getElementById("Plusbtn");
//   const CrossBtn = document.getElementById("Crossbtn");

//   content.classList.toggle("show-content");

//   if (content.classList.contains("show-content")) {
//     PlusBtn.classList.add("d-none");
//     CrossBtn.classList.remove("d-none");
//   } else {
//     PlusBtn.classList.remove("d-none");
//     CrossBtn.classList.add("d-none");
//   }
// }
// function toggleContent(btn) {
//   const li = btn.closest("li");
//   const content = li.querySelector(".contentpro");
//   const plusBtn = li.querySelector(".Plusbtn");
//   const crossBtn = li.querySelector(".Crossbtn");

//   content.classList.toggle("d-none");

//   if (!content.classList.contains("d-none")) {
//     plusBtn.classList.add("d-none");
//     crossBtn.classList.remove("d-none");
//   } else {
//     plusBtn.classList.remove("d-none");
//     crossBtn.classList.add("d-none");
//   }
// }
function toggleContent(button) {
  const parentLi = button.closest("li");
  const content = parentLi.querySelector(".contentpro");
  const plusBtn = parentLi.querySelector(".Plusbtn");
  const crossBtn = parentLi.querySelector(".Crossbtn");

  content.classList.toggle("d-none");
  plusBtn.classList.toggle("d-none");
  crossBtn.classList.toggle("d-none");
}


const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', function () {
    const allIcons = document.querySelectorAll('.accordion-button .icon');
    allIcons.forEach(icon => icon.textContent = '+'); // Reset all

    const icon = this.querySelector('.icon');
    const expanded = this.getAttribute('aria-expanded') === 'true';

    icon.textContent = expanded ? '+' : '−';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const accordion = document.getElementById('accordionExample');

  accordion.addEventListener('show.bs.collapse', function (event) {
    const button = event.target.previousElementSibling.querySelector('.accordion-button');
    const icon = button.querySelector('.custom-icon');
    icon.textContent = '−';
  });

  accordion.addEventListener('hide.bs.collapse', function (event) {
    const button = event.target.previousElementSibling.querySelector('.accordion-button');
    const icon = button.querySelector('.custom-icon');
    icon.textContent = '+';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const accordion = document.getElementById('accordionExample');

  accordion.addEventListener('show.bs.collapse', function (event) {
    const button = event.target.previousElementSibling.querySelector('.accordion-button');
    const icon = button.querySelector('.custom-icon');
    icon.textContent = '−';
  });

  accordion.addEventListener('hide.bs.collapse', function (event) {
    const button = event.target.previousElementSibling.querySelector('.accordion-button');
    const icon = button.querySelector('.custom-icon');
    icon.textContent = '+';
  });
});


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 5 },
      1200: { items: 6 }
    },
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ]
  });
});




function addClass(el) {
  $(el).toggleClass('act');
  $(el).find('.inneerr').slideToggle(500, function () {
    console.log('done');
  });
}










