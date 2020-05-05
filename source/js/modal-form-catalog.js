    var basket = document.querySelectorAll(".list__item-boxbasket");
    var popup = document.querySelector(".modal-form");
    var backup = document.querySelector(".modal-form__back");
    var form = popup.querySelector("form");

    for (var i=0; i <= basket.length -1; i++) {
    basket[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      backup.classList.add("modal-show");
    });
    }

    backup.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      backup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
      evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        backup.classList.remove("modal-show");
        }
      }
    });
