const toggleSwitch = document.querySelector('input[type="checkbox"]'); //select the input in the html
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// dark or light image
function imageMode(color) {
  image1.src = `img/undraw_landing_page_re_${color}.svg`;
  image2.src = `img/undraw_proud_coder_${color}.svg`;
  image3.src = `img/undraw_web_developer_re_${color}.svg`;
}

// changing style to dark mode function
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode"; //text content in the span
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

// changing style to light mode function
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

// event listener/function
// The onchange event occurs when the value of an element has been changed
toggleSwitch.addEventListener("change", function (event) {
  //console.log(event.target.checked);// specified in the dev tool (inspect)

  //   The setAttribute() method is used to set or add an attribute to a particular element and provides a value to it.

  // documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
});

// check local storage for theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
