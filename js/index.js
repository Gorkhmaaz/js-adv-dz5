/////Task 1
const slider = document.getElementById("slider");

slider.addEventListener("input", function() {
    this.nextElementSibling.value = this.value;
  });

  slider.dispatchEvent(new Event("input"));

