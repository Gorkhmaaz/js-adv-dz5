/////Task 1
const slider = document.getElementById("slider");

slider.addEventListener("input", function() {
    this.nextElementSibling.value = this.value;
  });

  slider.dispatchEvent(new Event("input"));

////Task 2
const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg"
  
];

let currentIndex = 0;
const imgElement = document.getElementById("galleryImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


function showImage(index) {
  imgElement.src = images[index];
  currentIndex = index;

  if (currentIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentIndex === images.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

function prevImage() {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  }
}


function nextImage() {
  if (currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
  }
}


prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);


showImage(currentIndex);




