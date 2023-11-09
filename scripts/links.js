const baseURL = "https://trident1998.github.io/wdd230/";
const linksURL = "https://trident1998.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
    console.log(data);
}

function displayLinks(weeks) {
    const ul = document.querySelector(".card ul");
    weeks.forEach(week => {
        const li = document.createElement("li");
        const weekNumber = week.lesson;
        const activities = week.links;

        content = `Week ${weekNumber}:`

        activities.forEach(activity => {
            const activityName = activity.name;
            const activityLink = `${baseURL}${activity.url}`;

            content += ` <a class="link" href="${activity.url}" target="_blank">${activity.title}</a> |`;
      });

      li.innerHTML = content.slice(0, -1); ;
      ul.appendChild(li);

    });
  }
  
  
getLinks();
