/*----HEADER CART BUTTON AND SEARCH BUTTON HAS GIVEN EVENTLISTENER TO ADD AND REMOVE CLASSLIST----*/
const searchIcon = document.querySelector(".search_icon");
const searchForm = document.querySelector(".search-btn");
const cartIcon = document.querySelector(".cart-icon")
const cartItemCollecton = document.querySelector(".cart-item-container");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

function hideBoth() {
  searchForm.classList.remove("active");
  cartItemCollecton.classList.remove("active");
  navbar.classList.remove("active");
};

document.addEventListener("click", hideBoth);

searchIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  searchForm.classList.add("active");
  cartItemCollecton.classList.remove("active");
  navbar.classList.remove("active");
});


cartIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  cartItemCollecton.classList.add("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
})

menuIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  navbar.classList.add("active");
  cartItemCollecton.classList.remove("active");
  searchForm.classList.remove("active");

})


//________________________________________validating form___________________________________________
document.getElementById("contactForm").addEventListener("submit", function (event) {
  const nameInput = document.getElementsByName("name")[0];
  const emailInput = document.getElementsByName("email")[0];
  const phoneInput = document.getElementById("phone_number").value.trim();

  // Check if the name contains only letters
  if (!/^[a-zA-Z\s]+$/.test(nameInput.value.trim())) {
    alert("Please enter a valid name (only letters and spaces).");
    event.preventDefault(); // Prevent form submission
    return;
  }

  // Check if the email is in a valid format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    event.preventDefault(); // Prevent form submission
    return;
  }

  // Check if the phone number contains only numeric characters
  const phonePattern = /^\d+$/;
  if (!phonePattern.test(phoneInput)) {
    alert("Please enter a valid phone number (only digits).");
    event.preventDefault(); // Prevent form submission
    return;
  }
});












