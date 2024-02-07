function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  toggleBacktop();
});

// let backtop = document.getElementById("backtop");

// function toggleBacktop() {
//   if (
//     document.body.scrollTop > 300 ||
//     document.documentElement.scrollTop > 300
//   ) {
//     backtop.classList.add("backtop-show");
//   } else {
//     backtop.classList.remove("backtop-show");
//   }
// }

// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel();
// });
const loginForm = document.getElementById(`login-form`);
const toggleBtn = document.getElementById("toggle");

toggleForm.addEventListener(`click`, function (e) {
  loginForm.classList.toggle(`open`);
});
