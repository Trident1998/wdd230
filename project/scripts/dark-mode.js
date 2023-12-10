const sun = "images/sun-white.svg"
const moon = "images/moon-white.svg"

var theme = "light";
const root = document.querySelector(":root");
const container = document.querySelector(".theme-container");
const themeIcon = document.getElementById("theme-icon");

const main = document.querySelector("main");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section")

container.addEventListener("click", () => {
	container.classList.forEach(it => console.log(it));
	const classListArray = Array.from(container.classList);

	if (classListArray.includes('light')) {
		container.classList.remove('light')
		container.classList.add('dark')
		body.style.background = "#28262C";
		main.style.color = "#EBF0F0";
		themeIcon.src = "images/moon-white.svg";
	} else {
		container.classList.remove('dark')
		container.classList.add('light')
		body.style.background = "#EBF0F0";
		main.style.color = "#28262C";
		themeIcon.src = "images/sun-white.svg";
	}
});
