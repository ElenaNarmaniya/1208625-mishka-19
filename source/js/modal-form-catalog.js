    var basket = document.querySelector(".list__item-boxbasket");
    var popup = document.querySelector(".modal-form");
    var S = popup.querySelector("[name=size_S]");
    var M = popup.querySelector("[name=size_M]");
    var L = popup.querySelector("[name=size_L]");
    var form = popup.querySelector("form");
    var close = popup.querySelector(".modal-form__button");

    var isStorageSupport = true;
    var size_S_storage = "";
    var size_M_storage = "";
    var size_L_storage = "";
    try {
    name_S_storage = localStorage.getItem("size_S");
    name_M_storage = localStorage.getItem("size_M");
    name_L_storage = localStorage.getItem("size_L");
    } catch (err) {
    isStorageSupport = false;
    }

    basket.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      if ((size_S_storage==true) || (size_M_storage==true) || (size_L_storage==true)) {
      S.value = size_S_storage;
      M.value = size_M_storage;
      L.value = size_L_storage;
      } else {
          S.focus();
        }
    });

    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    form.addEventListener("submit", function (evt) {
      if (isStorageSupport) {
      localStorage.setItem("size_S", S.value);
      localStorage.setItem("size_M", M.value);
      localStorage.setItem("size_L", L.value);
       }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
      evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        }
      }
    });
