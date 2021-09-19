const data = [
  {
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    pic: "./images/desktop-image-hero-1.jpg",
  },

  {
    title: "We are available across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    pic: "./images/desktop-image-hero-2.jpg",
  },

  {
    title: "Manufactured with the best material",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    pic: "./images/desktop-image-hero-3.jpg",
  },
];

const hamburger = document.querySelector(".mb-menu-icon");
const closeBtn = document.querySelector(".close-btn");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slide = document.querySelector(".slide-container");
let startIndex = 0;

hamburger.onclick = () => {
  const overlay = document.querySelector(".overlay");
  const navBarMB = document.querySelector(".navBar__list-mb");
  overlay.classList.add("active");
  navBarMB.style.transform = "translateX(0)";
};
closeBtn.onclick = () => {
  const overlay = document.querySelector(".overlay");
  const navBarMB = document.querySelector(".navBar__list-mb");
  overlay.classList.remove("active");
  navBarMB.style.transform = "translateX(-100%)";
};

function render() {
  const title = document.querySelector("#title");
  const desc = document.querySelector("#desc");
  title.innerText = data[startIndex].title;
  desc.innerText = data[startIndex].desc;
  slide.style.transform = `translateX(-${(100 / 3) * startIndex}%)`;
}

function next() {
  if (startIndex < data.length - 1) {
    startIndex++;
    render();
  }
}
function prev() {
  if (startIndex > 0) {
    startIndex--;
    render();
  }
}
btnLeft.onclick = prev;
btnRight.onclick = next;
render();
