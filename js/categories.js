const loginForm = document.getElementById(`login-form`);
const toggleBtn = document.getElementById("toggle");

toggleForm.addEventListener(`click`, function (e) {
  loginForm.classList.toggle(`open`);
});

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

const products = [
  {
    images: ["../assets/images/categories/1.png"],
    name: "Молоко, сыр, яйцо",
  },
  {
    images: ["../assets/images/categories/2.png"],
  },
  {
    images: ["../assets/images/categories/3.png"],
  },
  {
    images: ["../assets/images/categories/4.png"],
  },
  {
    images: ["../assets/images/categories/5.png"],
  },
  {
    images: ["../assets/images/categories/6.png"],
  },
  {
    images: ["../assets/images/categories/7.png"],
  },
  {
    images: ["../assets/images/categories/8.png"],
  },
  {
    images: ["../assets/images/categories/9.png"],
  },
  {
    images: ["../assets/images/categories/10.png"],
  },
  {
    images: ["../assets/images/categories/11.png"],
  },
  {
    images: ["../assets/images/categories/12.png"],
  },
  {
    images: ["../assets/images/categories/13.png"],
  },
];
const cards = document.querySelector(`.cards`);

function displayProducts(products) {
  let str = ``;
  products.forEach((product) => {
    str += `
        <div class ="card">
        <img src=${product.images[0]} />
        <h3>${product.name}</h3>
        </div>
    `;
  });
  cards.innerHTML = str;
}
displayProducts(products);
