var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var closeBtn = document.getElementById("close");

var images = []; // Array to store image URLs
var currentIndex = 0;

// Get all images in the grid
var gridImages = document.querySelectorAll(".grid-img");

// Add event listener to each image
gridImages.forEach(function (image, index) {
  image.addEventListener("click", function () {
    var imgSrc = this.getAttribute("src");
    openLightbox(imgSrc);
    currentIndex = images.indexOf(imgSrc);
    currentIndex = index;
  });
  images.push(image.getAttribute("src"));
});

// Function to open lightbox with a specific image
function openLightbox(imgSrc) {
  lightboxImg.src = imgSrc;
  lightbox.style.display = "block";
}

// Close the lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Event listener to close lightbox when clicking outside the image
document.body.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// Event listener for clicking on the left side of the lightbox image
lightboxImg.addEventListener("click", function (event) {
  var mouseX = event.clientX;
  var lightboxWidth = lightbox.offsetWidth;
  if (mouseX < lightboxWidth / 2) {
    // Clicked on the left side of the image
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1;
    }
  } else {
    // Clicked on the right side of the image
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  }
  lightboxImg.src = images[currentIndex];
});

// Open lightbox with carousel
