  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".main-nav");
  nav.classList.remove("main-nav--no-js");
  burger.onclick = function() {
    burger.classList.toggle("burger__nav--closed");
    burger.classList.toggle("burger__nav--opened");
    nav.classList.toggle("main-nav--opened");
    nav.classList.toggle("main-nav--closed");
  };
