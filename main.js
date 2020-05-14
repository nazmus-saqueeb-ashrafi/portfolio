$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true,
  });
});

var checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

/* phone anim */

TweenMax.to(".phone", 0.2, {
  rotation: 50,
  rotation: 7,
  zIndex: 1,
  ease: SteppedEase.config(2000),
  delay: 0.6,
});

TweenMax.to(".phone", 0.2, {
  rotation: 16,
  zIndex: 1,
  ease: SteppedEase.config(2000),
  delay: 0.5,
});

TweenMax.to(".phone", 0.2, {
  rotation: 7,
  zIndex: 1,
  ease: SteppedEase.config(2000),
  delay: 1,
});

TweenMax.to(".scr1", 1, {
  scale: 0.9,
  zIndex: 2,
  ease: Power3.easeOut,
  delay: 2,
});

TweenMax.to(".scrblk", 0.8, {
  y: 3,
  x: 0,
  opacity: 1,
  scale: 0.9,
  ease: SteppedEase.config(2000),
  zIndex: 1,
  delay: 2.3,
});

TweenMax.to(".land", 1, {
  scale: 0.9,
  zIndex: 1,
  ease: Power3.easeOut,
  delay: 4.1,
});

TweenMax.to(".scr1", 0.2, {
  y: -200,
  x: -200,
  rotation: -45,
  opacity: 0,
  ease: SteppedEase.config(2000),
  zIndex: 2,
  delay: 4,
});

TweenMax.to(".land", 2, {
  y: -200,
  x: 25,
  rotation: 0,
  opacity: 0,
  ease: SteppedEase.config(2000),
  zIndex: 2,
  delay: 6,
});

TweenMax.to(".scr2", 1, {
  scale: 0.9,
  zIndex: 2,
  ease: Power3.easeOut,
  delay: 7.1,
});

TweenMax.to(".scr2", 2, {
  y: -200,
  x: 25,
  rotation: 0,
  opacity: 0,
  ease: SteppedEase.config(2000),
  zIndex: 2,
  delay: 9,
});

TweenMax.to(".scr3", 1, {
  scale: 0.9,
  zIndex: 2,
  ease: Power3.easeOut,
  delay: 10.1,
});

TweenMax.to(".scr3", 0.2, {
  y: -200,
  x: 200,
  rotation: 45,
  opacity: 0,
  ease: SteppedEase.config(2000),
  zIndex: 2,
  delay: 12,
});

TweenMax.to(".scrblk", 0.8, {
  y: 3,
  x: 0,
  opacity: 0,
  scale: 0.9,
  ease: SteppedEase.config(2000),
  zIndex: 1,
  delay: 11,
});

TweenMax.to(".phone", 0.5, {
  x: 900,
  zIndex: 1,
  ease: SteppedEase.config(2000),
  delay: 13,
});

TweenMax.to(".computer", 0.5, {
  x: 0,
  zIndex: 1,
  ease: SteppedEase.config(2000),
  delay: 13,
});

TweenMax.to(".computer", 0.5, {
  x: -50,
  scale: 0.5,
  zIndex: 1,
  ease: SteppedEase.config(2000),
  delay: 14,
});

TweenMax.to(".phone-final", 0.5, {
  opacity: 1,
  zIndex: -1,
  x: 120,
  scale: 1,
  ease: SteppedEase.config(2000),
  delay: 14,
});

/* phone anim end*/

/* scroll lock when menu opens*/

const disScroll = () => {
  const burger = document.querySelector(".menu-toggler");
  const links = document.querySelector(".nav-list");
  const body = document.querySelector(".body");

  burger.addEventListener("click", () => {
    body.classList.toggle("scrolldis");
  });

  links.addEventListener("click", () => {
    body.classList.toggle("scrolldis");
  });
};

disScroll();

/* scroll lock when menu opens end*/

/* video popup*/
const toggle = () => {
  var trailer = document.querySelector(".trailer");
  const demobtn = document.querySelector(".cta-demo");
  const closebtn = document.querySelector(".close");
  var video = document.querySelector("video");

  demobtn.addEventListener("click", () => {
    trailer.classList.toggle("active");
  });

  closebtn.addEventListener("click", () => {
    trailer.classList.toggle("active");
  });

  video.pause();
  video.currentTime = 0;
};

toggle();

/* video popup end*/
