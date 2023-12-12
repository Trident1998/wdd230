document.querySelector("main").style.display = "block";

const baseURL = "https://trident1998.github.io/wdd230/";
const pricingUrl = "http://127.0.0.1:5500/project/data/pricing.json";
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const article = document.querySelector(".cards");




async function getRentals() {
    const response = await fetch(pricingUrl);
    const data = await response.json();
    displayRentals(data.rentals);
}

function displayRentals(rentals) {
    const tableBody = document.querySelector('.data-body');

    rentals.forEach(rental => {
        const section = document.createElement("section");
        section.classList.add("rental-type");
        section.classList.add("rental-page");


        const h2 = document.createElement("h2");
        h2.textContent = `${rental.type} - ${rental.maxPersons} persons`;

        const img = document.createElement("img");
        img.src = baseURL + rental.imgUrl;
        img.alt = rental.type;


        const rawTable = ceateTable();
        const body = document.createElement("tbody");
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${rental.reservationHalfDay}</td>
        <td>${rental.reservationFullDay}</td>
        <td>${rental.walkInHalfDay}</td>
        <td>${rental.walkInFullDay}</td>`;
        body.appendChild(row);
        rawTable.appendChild(body);

        section.appendChild(h2);
        section.appendChild(img);
        section.appendChild(rawTable);

        tableBody.appendChild(section);
    });
}

const ceateTable = () => {
    const table = document.createElement("table");
    const head = document.createElement("thead");
    const row = document.createElement('tr');
    row.innerHTML = `
    <th>Reservation Half Day</th>
    <th>Reservation Full Day</th>
    <th>Walk-In Half Day</th>
    <th>Walk-In Full Day</th>`;
    head.appendChild(row);
    table.appendChild(head);
    return table;
}
  
  
getRentals();
