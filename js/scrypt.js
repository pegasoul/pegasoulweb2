// Get all images in the grid
var gridImages = document.querySelectorAll(".grid-img");

// Add event listener to each image
gridImages.forEach(function (image) {
  image.addEventListener("click", function () {
    var imgSrc = this.getAttribute("src");
    openLightbox(imgSrc);
  });
});

// Open lightbox function
function openLightbox(imgSrc) {
  document.getElementById("lightbox-img").src = imgSrc;
  document.getElementById("lightbox").style.display = "block";
}

// Close lightbox function
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Open lightbox with carousel

var images = [
  { src: "../img/dsg/tapa.jpg", alt: "Image 1" },
  { src: "../img/dsg/2.jpg", alt: "Image 2" },
  { src: "../img/dsg/puma.jpg", alt: "Image 3" },
];

function openLightboxWithCarousel(images) {
  var carouselInner = document.getElementById("carousel-inner");
  carouselInner.innerHTML = ""; // Clear previous carousel items

  images.forEach(function (image, index) {
    var carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    var img = document.createElement("img");
    img.src = image.src;
    img.classList.add("d-block", "w-100");

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });

  $("#lightbox").modal("show"); // Open the lightbox modal using Bootstrap jQuery
}
