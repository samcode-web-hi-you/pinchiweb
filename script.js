/*----HEADER CART BUTTON AND SEARCH BUTTON HAS GIVEN EVENTLISTENER TO ADD AND REMOVE CLASSLIST----*/


//load program only after document is ready
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search_icon");
    const searchButton = document.getElementById("search-butn");
    const cartSelection = document.getElementById('cart-section');
    const cart = document.getElementById('cart');
    let isclicked = false;

    //If any click Happened On document 
    function hideBoth() {
        searchButton.classList.add("active");
        cartSelection.classList.add("hide");
    };
    document.addEventListener("click", hideBoth);

    /* when Search Icon Is Clicked Then Search Button got Trigger*/
    searchIcon.addEventListener("click", function (event) {
        event.stopPropagation();//Stop document to Get this value
        if (isclicked === false) {// if false then 
            searchButton.classList.remove("active");//remove active class from searchButton
            if (!cartSelection.classList.contains("hide")) {//for cartSelection To add class hide If it doesn't Contain hide in its class list
                cartSelection.classList.add("hide");
            }
        } else if (!searchButton.classList.contains("active")) {//if searchbutton doesn't contains active then add active class
            searchButton.classList.add("active");
        }
        //Turning isclicked value to false
        isclicked = !isclicked;
    });
    /*For cart if clicked hen cartSelection got Trigger*/
    cart.addEventListener("click", (event) => {
        event.stopPropagation();//stop document to get value
        if (!cartSelection.classList.contains("hide") && !searchButton.classList.contains("active")) {
            searchButton.classList.add("active");//if both condition = false then add active 
        } else {
            searchButton.classList.add("active");//if no condition is false then add active and isclicked value to false
            isclicked = false;
        }
        if (cartSelection.classList.contains("hide")) {//another condition if cartSelection contain hide then remove
            cartSelection.classList.remove("hide");
        } else {//if not then add hide class
            cartSelection.classList.add("hide");
        }
    });
});

/*----------------------------------END OF HEADER SECTION------------------------------------------*/
/* Window Resize Map and All Anchor Disable And Menu Icon Visiable
let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (screenWidth > 500 && screenWidth > 760)*/







/*___________Script For image Updater_________
const imageList = [
      'image/343782845_1627708551010837_1530097465503108517_n.jpg',
      'image/p13.jpg',
      'image/p14.jpg',
      'image/p11.jpg',
      'image/p10.jpg',
      'image/p9.jpg',
      'image/p3.jpg',
      'image/p7.jpg',
      'image/p6.jpg',
      'image/p5.jpg',
    ];

    let currentImageIndex = 0;

    function showImage(index) {
      const imageElement = document.getElementById('image');
      if (imageElement) {
        imageElement.src = imageList[index];
        currentImageIndex = index;
      }
    }

    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
      showImage(currentImageIndex);
    }

    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % imageList.length;
      showImage(currentImageIndex);
    }

    // Initial image display
    showImage(currentImageIndex);

    // Additional script for displaying a random image on page load
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
    const imageElement = document.getElementById('image');
    if (imageElement) {
      imageElement.src = randomImage;
    }


_______________________Style For Button________________
.lg\:max-w-lg {
    max-width: 32rem;  Change this value to the desired max-width for large screens 
  }

  .lg\:w-full {
    width: 100%;
  }

  .md\:w-1\/2 {
    width: 50%;  Change this value to the desired width for medium screens 
  }

  .w-full {
    width: 100%;
  }

  .image-container {
    position: relative;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #333;  Change this color to the desired color 
  }

  .nav-button-left {
    left: 0;
  }

  .nav-button-right {
    right: 0;
  }

#image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.375rem; Adjust the border-radius to your preference 
  }
  


  ______________________HTML For Next Image Button__________________ 
  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full image-container relative">
          <button onclick="prevImage()" class="nav-button nav-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <img id="image" class="object-cover object-center image-container rounded" alt="Soch">
          <button onclick="nextImage()" class="nav-button nav-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>*/