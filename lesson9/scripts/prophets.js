const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets)  // note that we reference the prophet array of the data object given the structure of the json file
  }
  
  getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards"); // Select the output container element

    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthdate = document.createElement("p");
        let deathdate = document.createElement("p");
        let age = document.createElement("p");

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        
        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-Day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // Build the paragraph element by setting all the relevant attribute
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        deathdate.textContent = `Date of Death: ${prophet.death}`;

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(birthdate);
        card.appendChild(deathdate);
        card.appendChild(age);

        cards.appendChild(card);
    })
}