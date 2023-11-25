document.querySelector("main").style.display = "block";

const baseURL = "https://trident1998.github.io/wdd230/";
const membersURL = "https://trident1998.github.io/wdd230/chamber/data/members.json";
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const article = document.querySelector(".cards");



async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members);
    console.log(data);
}

function displayMembers(members) {
    members.forEach(member => {
        const section = document.createElement("section");
        section.classList.add("card");

        const h3 = document.createElement("h4")
        const img = document.createElement("img");
        const h2 = document.createElement("h3")
        const a = document.createElement("a");
        const p = document.createElement("p");


        img.src = member.logo;
        img.alt = `${member.name} logo`;

        h2.textContent = member.name;
        h3.textContent = member.membership_level;

        a.href = member.link;
        a.textContent = "Go to the Site";
        a.target = "_blank";

        p.textContent = `${member.staffs_amount} specialists`;
        
        section.appendChild(h2);
        section.appendChild(img);
        section.appendChild(h3);
        section.appendChild(p);
        section.appendChild(a);

        article.appendChild(section)

    });
}
  
  
  getMembers();


gridbutton.addEventListener("click", () => {
	// example using arrow function
	article.classList.add("grid");
	article.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	article.classList.add("list");
	article.classList.remove("grid");
}
