const hideHeader1 = document.querySelector(".hide-header1");
const hideHeader2 = document.querySelector(".hide-header2");
const shop = document.getElementById("shop");
const lookBook = document.getElementById("look-book");
const secondHeader = document.querySelector(".dropdown-second-header");

// Initial hiding
hideHeader1.style.display = "none";
hideHeader2.style.display = "none";
secondHeader.style.display = "none";

// Show hideHeader1 on mouseover
shop.addEventListener("mouseover", function () {
  hideHeader1.style.display = "flex";
  secondHeader.style.display = "flex";
});

// Show hideHeader2 on mouseover
lookBook.addEventListener("mouseover", function () {
  hideHeader2.style.display = "flex";
  secondHeader.style.display = "flex";
});

// Hide hideHeader1 when mouse leaves the .dropdown-second-header section
secondHeader.addEventListener("mouseleave", function () {
  hideHeader1.style.display = "none";
});

// Hide hideHeader2 when mouse leaves the .dropdown-second-header section
secondHeader.addEventListener("mouseleave", function () {
  hideHeader2.style.display = "none";
});
