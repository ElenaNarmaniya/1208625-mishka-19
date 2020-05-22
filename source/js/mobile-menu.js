  var burger = document.querySelector(".header__nav");
  var nav = document.querySelector(".main-nav");
  nav.classList.remove("main-nav--no-js");
  burger.onclick = function() {
    burger.classList.toggle("header__nav--closed");
    burger.classList.toggle("header__nav--opened");
    nav.classList.toggle("main-nav--opened");
    nav.classList.toggle("main-nav--closed");
  };
