const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section")

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#001f3f";
		main.style.color = "#fbfaf8";
		sections.forEach(section => {
            section.style.background = "#333333";
        });		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#fbfaf8";
		main.style.color = "#001f3f";
		sections.forEach(section => {
            section.style.background = "#eeeeee";
        });		modeButton.textContent = "🕶️";
	}
});