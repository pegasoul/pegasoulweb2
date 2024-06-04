// Function to open the lightbox with a specific carousel
function openLightboxWithCarousel(images) {
  var carouselContainer = document.getElementById("carouselContainer");
  carouselContainer.innerHTML = ""; // Clear previous content

  // Create carousel structure
  var carousel = document.createElement("div");
  carousel.classList.add("carousel", "slide");
  carousel.setAttribute("data-bs-ride", "carousel");

  var carouselInner = document.createElement("div");
  carouselInner.classList.add("carousel-inner");

  images.forEach(function (image, index) {
    var carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    var img = document.createElement("img");
    img.classList.add("d-block", "w-100");
    img.src = image.src;
    img.alt = image.alt;

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });

  var prevButton = document.createElement("button");
  prevButton.classList.add("carousel-control-prev");
  prevButton.setAttribute("type", "button");
  prevButton.setAttribute("data-bs-target", "#lightbox .carousel");
  prevButton.setAttribute("data-bs-slide", "prev");
  prevButton.innerHTML =
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>';

  var nextButton = document.createElement("button");
  nextButton.classList.add("carousel-control-next");
  nextButton.setAttribute("type", "button");
  nextButton.setAttribute("data-bs-target", "#lightbox .carousel");
  nextButton.setAttribute("data-bs-slide", "next");
  nextButton.innerHTML =
    '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>';

  carousel.appendChild(carouselInner);
  carousel.appendChild(prevButton);
  carousel.appendChild(nextButton);
  carouselContainer.appendChild(carousel);

  // Show lightbox
  document.getElementById("lightbox").style.display = "block";

  // Activate Bootstrap carousel
  new bootstrap.Carousel(carousel);
}

// Example usage:
var images1 = [
  { src: "../img/dsg/1.jpg", alt: "Image 1" },
  { src: "../img/dsg/2.jpg", alt: "Image 2" },
  { src: "../img/dsg/3.jpg", alt: "Image 3" },
  // Add more image objects for carousel 1 as needed
];

var images2 = [
  { src: "../img/dsg/4.jpg", alt: "Image 4" },
  { src: "../img/dsg/5.jpg", alt: "Image 5" },
  { src: "../img/dsg/6.jpg", alt: "Image 6" },
  // Add more image objects for carousel 2 as needed
];

var images3 = [
  { src: "../img/dsg/7.jpg", alt: "Image 7" },
  { src: "../img/dsg/8.jpg", alt: "Image 8" },
  { src: "../img/dsg/9.jpg", alt: "Image 9" },
  // Add more image objects for carousel 2 as needed
];

// Function to open lightbox with carousel when an image is clicked
document.querySelectorAll(".grid-img").forEach(function (image, index) {
  if (index === 0) {
    image.addEventListener("click", function () {
      openLightboxWithCarousel(images1);
    });
  }
  if (index === 1) {
    image.addEventListener("click", function () {
      openLightboxWithCarousel(images2);
    });
  }
  if (index === 2) {
    image.addEventListener("click", function () {
      openLightboxWithCarousel(images3);
    });
  }
  // Add more conditions for additional grid items as needed
});

// Function to close the lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
