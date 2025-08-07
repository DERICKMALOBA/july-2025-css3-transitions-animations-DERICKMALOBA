// Global variable
let boxAnimationState = true;

// Function with parameters and return value
function changeColor(element, color) {
  element.style.backgroundColor = color;
  return `Color changed to ${color}`;
}

// Toggle box animation using class
function toggleBoxAnimation() {
  const box = document.getElementById("animatedBox");
  if (boxAnimationState) {
    box.style.animation = "none";
  } else {
    box.style.animation = "bounce 2s infinite";
  }
  boxAnimationState = !boxAnimationState;
}

// Function to show/hide modal
function toggleModal(show) {
  const modal = document.getElementById("modal");
  if (show) {
    modal.classList.add("show");
  } else {
    modal.classList.remove("show");
  }
}
