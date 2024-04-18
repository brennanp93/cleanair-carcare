const button = document.getElementById("myButton");
const date = new Date().getFullYear();

document.getElementById("date").innerHTML = date;
function hideImage() {
  const image = document.getElementById("image");
  const form = document.getElementById("appointment-form");
  // if image is showing
  if (image.classList.contains("active")) {
    image.classList.remove("active");
    form.style.display = "block";
    button.innerText = "Click to see a gross air filter";
  } else {
    image.classList.add("active");
    form.style.display = "none";
    button.innerText = "Click to return to the form";
  }
}
