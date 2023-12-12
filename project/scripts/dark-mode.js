const sun = "images/sun-white.svg"
const moon = "images/moon-white.svg"

var theme = "light";
const root = document.querySelector(":root");
const container = document.querySelector(".theme-container");
const themeIcon = document.getElementById("theme-icon");

const main = document.querySelector("main");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section")

const form = document.querySelector("form");

const tor = document.querySelector("th");

container.addEventListener("click", () => {
	const classListArray = Array.from(container.classList);

	if (classListArray.includes('light')) {
		container.classList.remove('light')
		container.classList.add('dark')
		body.style.background = "#28262C";
		main.style.color = "#EBF0F0";
		themeIcon.src = "images/moon-white.svg";

		if(form != null) {
			form.style.background = "#28262C";
		}
		if(tor != null) {
			th.style.background = "#28262C";
		}

	} else {
		container.classList.remove('dark')
		container.classList.add('light')
		body.style.background = "#EBF0F0";
		main.style.color = "#28262C";
		themeIcon.src = "images/sun-white.svg";
		if(form != null) {
			form.style.background = "#f9f9f9";
		}
	}
});
