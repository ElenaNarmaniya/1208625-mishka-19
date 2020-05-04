  var burger = document.querySelector(".main-nav__burger");
  var nav = document.querySelector(".main-nav");
  nav.classList.remove("main-nav--no-js");
  burger.onclick = function() {
    burger.classList.toggle("main-nav__burger--closed");
    burger.classList.toggle("main-nav__burger--opened");
    nav.classList.toggle("main-nav--opened");
    nav.classList.toggle("main-nav--closed");
  };
