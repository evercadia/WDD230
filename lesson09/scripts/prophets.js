const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Define a function expression named "displayProphets"
const displayProphets = (prophets) => {
  // Select the div.cards element
  const cards = document.querySelector('.cards');

  // Inside the forEach loop, create a section element and store it in a variable named "card"
  prophets.forEach((prophet) => {
    let card = document.createElement('section');

    // Create an h2 element and store it in a variable named "fullName"
    let fullName = document.createElement('h2');
    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Create an img element and store it in a variable named "portrait"
    let portrait = document.createElement('img');
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Using appendChild() on the section element named "card", add the heading and image elements
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Finally, add the section card to the "cards" div
    cards.appendChild(card);
  }); // end of arrow function and forEach loop
};

// Example usage
async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData(url);
