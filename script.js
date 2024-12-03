document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("myHeader");
  var page = document.getElementById("page");
  var openMenuButton = document.getElementById("openmenu");
  var lastScrollTop = 0;
  var isScrolling;

  window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    // Clear timeout throughout scroll
    window.clearTimeout(isScrolling);

    if (st > lastScrollTop) {
      // Scrolling down
      page.classList.remove("menuopen");
      if (window.scrollY >= 100) {
        header.classList.add("sticky");
      }
    } else {
      // Scrolling up
      page.classList.remove("menuopen");
      if (window.scrollY < 100) {
        header.classList.remove("sticky");
      } else {
        header.classList.add("sticky");
      }
    }
    lastScrollTop = st <= 0 ? 0 : st;

    // Set timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      // Run after scrolling ends
      if (window.scrollY >= 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }, 66);
  });

  openMenuButton.addEventListener("click", function () {
    page.classList.toggle("menuopen");
    if (page.classList.contains("menuopen")) {
      header.classList.remove("sticky");
    } else if (window.scrollY >= 100) {
      header.classList.add("sticky");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const language = document.querySelector(".language");
  const selectedLang = language.querySelector(".selected-lang");
  const dropdownToggle = language.querySelector(".arrow-img");
  const dropdownMenu = language.querySelector(".dropdown-menu");

  function updateDropdownVisibility() {
    // Dapatkan bahasa yang aktif dari elemen .selected-lang
    const currentLang = selectedLang.textContent.trim();

    const menuItems = dropdownMenu.querySelectorAll("li");

    menuItems.forEach((item) => {
      const link = item.querySelector("a");
      const itemLang = link.getAttribute("data-lang");

      // Update logika visibility
      if (currentLang === "EN") {
        item.style.display = itemLang === "CN" ? "block" : "none";
      } else if (currentLang === "CN") {
        item.style.display = itemLang === "EN" ? "block" : "none";
      }
    });
  }

  // Toggle dropdown when clicking arrow or selected language
  const toggleDropdown = (e) => {
    e.stopPropagation();
    language.classList.toggle("active");
    if (language.classList.contains("active")) {
      updateDropdownVisibility();
    }
  };

  dropdownToggle.addEventListener("click", toggleDropdown);
  selectedLang.addEventListener("click", toggleDropdown);

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!language.contains(e.target)) {
      language.classList.remove("active");
    }
  });

  // Handle language selection
  const dropdownLinks = dropdownMenu.querySelectorAll("a");
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const newLang = this.getAttribute("data-lang");

      // Update selected language text
      selectedLang.textContent = newLang;

      // Remove active class from all links and add to selected
      dropdownLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      localStorage.setItem("selectedLanguage", newLang);
      language.classList.remove("active");
      updateDropdownVisibility();
    });
  });

  // Set initial language and active state
  const savedLanguage = localStorage.getItem("selectedLanguage") || "EN";
  selectedLang.textContent = savedLanguage;

  // Set initial active state in dropdown
  const activeLink = dropdownMenu.querySelector(
    `[data-lang="${savedLanguage}"]`
  );
  if (activeLink) {
    dropdownLinks.forEach((l) => l.classList.remove("active"));
    activeLink.classList.add("active");
  }

  updateDropdownVisibility();
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

var swiper1 = new Swiper(".swiper-container", {
  effect: "coverflow",
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
  breakpoints: {
    640: {
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      },
    },
  },
});

// Tangani perubahan slide
swiper1.on("slideChange", function () {
  // Dapatkan slide yang aktif saat ini
  let activeSlide = swiper1.slides[swiper1.activeIndex];
  let activeBoxLocation = activeSlide.querySelector(".box-office-location");

  // Dapatkan id dari box-office-location yang aktif
  let activeId = activeBoxLocation.id;
  let officeNumber = activeId.split("-")[1];

  // Reset semua active class
  document.querySelectorAll(".box-office-location").forEach(function (el) {
    el.classList.remove("active");
  });
  document.querySelectorAll(".box-office").forEach(function (el) {
    el.classList.remove("active");
  });

  // Set active class pada elemen yang sesuai
  activeBoxLocation.classList.add("active");
  document
    .querySelector(`#description-${officeNumber}`)
    .classList.add("active");
});

// Tangani inisialisasi awal
swiper1.on("init", function () {
  let activeSlide = swiper1.slides[swiper1.activeIndex];
  let activeBoxLocation = activeSlide.querySelector(".box-office-location");
  activeBoxLocation.classList.add("active");

  let activeId = activeBoxLocation.id;
  let officeNumber = activeId.split("-")[1];
  document
    .querySelector(`#description-${officeNumber}`)
    .classList.add("active");
});

var swiper2 = new Swiper(".swiper-workflow", {
  slidesPerView: 1.7,
  centeredSlides: true,
  loop: true,
  spaceBetween: 50,
});

swiper2.on("slideChange", function () {
  var activeSlideIndex = swiper2.activeIndex;
  var boxRnzElements = document.querySelectorAll(".box-content-mobile");

  boxRnzElements.forEach(function (element, index) {
    if (index === activeSlideIndex) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});

var swiper3 = new Swiper(".swiper-location", {
  slidesPerView: 1.1,
  centeredSlides: true,
  loop: false,
  spaceBetween: 5,
});
var swiper4 = new Swiper(".swiper-profile", {
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
});

var swiper5 = new Swiper(".swiper-container-mobile", {
  effect: "coverflow",
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
swiper5.on("slideChange", function () {
  var activeSlideIndex = swiper5.activeIndex;
  var boxRnzElements = document.querySelectorAll(".box-office-location-mobile");

  boxRnzElements.forEach(function (element, index) {
    if (index === activeSlideIndex) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});

var swiper6 = new Swiper(".swiper-work", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  initialSlide: 2,
  pagination: {
    el: ".swiper-works",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
    },
  },
  on: {
    init: function () {
      setTimeout(function () {
        updateActiveSlide();
      }, 100);
    },
  },
});

// Menambahkan event listener untuk slideChange
swiper6.on("slideChange", function () {
  setTimeout(function () {
    updateActiveSlide();
  }, 100);
});

// Menambahkan event listener untuk klik pada box-work
document.querySelectorAll(".box-work").forEach(function (box) {
  box.addEventListener("click", function (e) {
    // Hanya jalankan jika lebar window > 640px
    if (window.innerWidth > 640) {
      e.preventDefault();

      // Hapus kelas active dari semua box
      document.querySelectorAll(".box-work").forEach(function (el) {
        el.classList.remove("active");
      });

      // Tambah kelas active ke box yang diklik
      this.classList.add("active");
    }
  });
});

// Fungsi untuk mengupdate status active
function updateActiveSlide() {
  if (window.innerWidth <= 640) {
    var realIndex = swiper6.realIndex;
    var boxSlideElements = document.querySelectorAll(".box-work");

    boxSlideElements.forEach(function (element, index) {
      element.classList.remove("active");
    });

    var activeSlide = document.querySelector(".swiper-slide-active .box-work");
    if (activeSlide) {
      activeSlide.classList.add("active");
    }
  }
}

// Tambahkan event listener untuk resize window
window.addEventListener("resize", function () {
  if (window.innerWidth <= 640) {
    updateActiveSlide();
  }
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
const ctabox = document.querySelector(".title-cta");
const ctaimg = document.querySelector(".cta-img");
const img1 = document.querySelector(".img-1");
const img2 = document.querySelector(".img-2");
const text1 = document.querySelector(".text-1");
const text2 = document.querySelector(".text-2");

// Tambahkan event listener untuk peristiwa mouseenter pada ctabox
ctabox.addEventListener("mouseenter", function () {
  // Sembunyikan text-1 dengan mengatur opacity menjadi 0
  img1.style.opacity = "0";
  text1.style.opacity = "0";
  // Tampilkan img-2 dan text-2 dengan mengatur opacity menjadi 1
  img2.style.opacity = "1";
  text2.style.opacity = "1";
});

// Tambahkan event listener untuk peristiwa mouseleave pada ctabox
ctaimg.addEventListener("mouseleave", function () {
  // Tampilkan kembali text-1 dengan mengatur opacity menjadi 1
  img1.style.opacity = "1";
  text1.style.opacity = "1";
  // Sembunyikan img-2 dan text-2 dengan mengatur opacity menjadi 0
  img2.style.opacity = "0";
  text2.style.opacity = "0";
});
// Tambahkan event listener untuk peristiwa mouseenter pada ctabox
ctaimg.addEventListener("mouseenter", function () {
  // Sembunyikan text-1 dengan mengatur opacity menjadi 0
  img1.style.opacity = "0";
  text1.style.opacity = "0";
  // Tampilkan img-2 dan text-2 dengan mengatur opacity menjadi 1
  img2.style.opacity = "1";
  text2.style.opacity = "1";
});

// Tambahkan event listener untuk peristiwa mouseleave pada ctabox
ctabox.addEventListener("mouseleave", function () {
  // Tampilkan kembali text-1 dengan mengatur opacity menjadi 1
  img1.style.opacity = "1";
  text1.style.opacity = "1";
  // Sembunyikan img-2 dan text-2 dengan mengatur opacity menjadi 0
  img2.style.opacity = "0";
  text2.style.opacity = "0";
});
