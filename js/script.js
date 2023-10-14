function menuShow() {
  const menuMobile = document.querySelector(".mobile-menu");
  const icon = document.querySelector(".icon");

  menuMobile.classList.toggle("open");
  icon.src = menuMobile.classList.contains("open")
    ? "img/icons/x-lg.svg"
    : "img/icons/list.svg";
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
