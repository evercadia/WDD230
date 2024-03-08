const baseURL = "https://evercadia.github.io/wdd230/";
const linksURL = "https://evercadia.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById('activity-links');

  weeks.forEach((week) => {
    const weekContainer = document.createElement('div');
    weekContainer.classList.add('week');

    const weekHeading = document.createElement('h2');
    weekHeading.textContent = `Week ${week.week}`;

    const linksList = document.createElement('ul');

    week.links.forEach((link) => {
      const linkItem = document.createElement('li');
      const linkAnchor = document.createElement('a');
      linkAnchor.href = `${baseURL}${link.url}`;
      linkAnchor.textContent = link.title;

      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });

    weekContainer.appendChild(weekHeading);
    weekContainer.appendChild(linksList);
    linksContainer.appendChild(weekContainer);
  });
}

getLinks();
function displayLinks(weeks) {
    const linksContainer = document.getElementById("linksContainer");
    const linksList = document.getElementById("linksList");

    weeks.forEach((week) => {
        const weekItem = document.createElement("li");
        weekItem.textContent = `Week ${week.lesson}`;

        const links = week.links.map((link) => {
            const linkItem = document.createElement("li");
            const linkAnchor = document.createElement("a");
            linkAnchor.href = `${baseURL}${link.url}`;
            linkAnchor.textContent = link.title;
            linkItem.appendChild(linkAnchor);
            return linkItem;
        });

        weekItem.appendChild(document.createElement("ul").append(...links));
        linksList.appendChild(weekItem);
    });

    linksContainer.appendChild(linksList);
}
