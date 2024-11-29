document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('myHeader');
  var page = document.getElementById('page');
  var openMenuButton = document.getElementById('openmenu');

  window.addEventListener('scroll', function() {
    page.classList.remove('menuopen');
    if (window.scrollY >= 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Event listener to remove the sticky class when the button is clicked
  openMenuButton.addEventListener('click', function() {
    header.classList.remove('sticky');
    page.classList.add('menuopen');
  });

  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Prevent the default action
      event.preventDefault();

      // Get the target element
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);

      // Smooth scroll to target
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel, .panel-2");

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const locationBoxes = document.querySelectorAll(".box-image-location");

  locationBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      removeActiveClasses();
      box.classList.add("active");

      // Menemukan dan menambahkan kelas "active" pada location-description yang bersangkutan
      const description = box.querySelector(".location-description");
      if (description) {
        description.classList.add("active");
      }
    });
  });

  function removeActiveClasses() {
    locationBoxes.forEach((box) => {
      box.classList.remove("active");

      // Menghapus kelas "active" dari semua location-description
      const description = box.querySelector(".location-description");
      if (description) {
        description.classList.remove("active");
      }
    });
  }
});


var swiper1 = new Swiper('.swiper-container', {
  effect: 'coverflow',
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});
swiper1.on('slideChange', function () {
  var activeSlideIndex = swiper1.activeIndex;
  var boxRnzElements = document.querySelectorAll('.box-office-location');

  boxRnzElements.forEach(function (element, index) {
    if (index === activeSlideIndex) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
});

var swiper2 = new Swiper('.swiper-workflow', {
  slidesPerView: 1.7,
  centeredSlides: true,
  loop: true,
  spaceBetween: 90,
});

swiper2.on('slideChange', function () {
  var activeSlideIndex = swiper2.activeIndex;
  var boxRnzElements = document.querySelectorAll('.box-content-mobile');

  boxRnzElements.forEach(function (element, index) {
    if (index === activeSlideIndex) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
});

var swiper3 = new Swiper('.swiper-location', {
  slidesPerView: 1.1,
  centeredSlides: true,
  loop: false,
  spaceBetween: 5,
});
var swiper4 = new Swiper('.swiper-profile', {
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
});

var swiper5 = new Swiper('.swiper-container-mobile', {
  effect: 'coverflow',
  slidesPerView: 1.3,
  centeredSlides: true,
  loop: true,
  spaceBetween: -30,
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});
swiper5.on('slideChange', function () {
  var activeSlideIndex = swiper5.activeIndex;
  var boxRnzElements = document.querySelectorAll('.box-office-location-mobile');

  boxRnzElements.forEach(function (element, index) {
    if (index === activeSlideIndex) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
});

var swiper6 = new Swiper('.swiper-work', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true, // Perhatikan penulisan "loop" yang benar
    centeredSlides: true
});

swiper6.on('slideChange', function () {
    var activeSlideIndex = swiper6.activeIndex;
    var boxSlideElements = document.querySelectorAll('.box-work');

    boxSlideElements.forEach(function (element, index) {
        if (index === activeSlideIndex) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
});



$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true,
  clickable: false,
});

$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});


// Dapatkan elemen img-1, img-2, text-1, dan text-2
const ctabox = document.querySelector('.title-cta');
const ctaimg = document.querySelector('.cta-img');
const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const text1 = document.querySelector('.text-1');
const text2 = document.querySelector('.text-2');

// Tambahkan event listener untuk peristiwa mouseenter pada ctabox
ctabox.addEventListener('mouseenter', function() {
  // Sembunyikan text-1 dengan mengatur opacity menjadi 0
  img1.style.opacity = '0';
  text1.style.opacity= '0';
  // Tampilkan img-2 dan text-2 dengan mengatur opacity menjadi 1
  img2.style.opacity= '1';
  text2.style.opacity = '1';
});

// Tambahkan event listener untuk peristiwa mouseleave pada ctabox
ctaimg.addEventListener('mouseleave', function() {
  // Tampilkan kembali text-1 dengan mengatur opacity menjadi 1
  img1.style.opacity = '1';
  text1.style.opacity = '1';
  // Sembunyikan img-2 dan text-2 dengan mengatur opacity menjadi 0
  img2.style.opacity = '0';
  text2.style.opacity = '0';
});
// Tambahkan event listener untuk peristiwa mouseenter pada ctabox
ctaimg.addEventListener('mouseenter', function() {
  // Sembunyikan text-1 dengan mengatur opacity menjadi 0
  img1.style.opacity = '0';
  text1.style.opacity = '0';
  // Tampilkan img-2 dan text-2 dengan mengatur opacity menjadi 1
  img2.style.opacity = '1';
  text2.style.opacity = '1';
});

// Tambahkan event listener untuk peristiwa mouseleave pada ctabox
ctabox.addEventListener('mouseleave', function() {
  // Tampilkan kembali text-1 dengan mengatur opacity menjadi 1
  img1.style.opacity = '1';
  text1.style.opacity = '1';
  // Sembunyikan img-2 dan text-2 dengan mengatur opacity menjadi 0
  img2.style.opacity = '0';
  text2.style.opacity = '0';
});

