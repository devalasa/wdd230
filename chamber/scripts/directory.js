const url = "https://devalasa.github.io/wdd230/chamber/json/data.json";


async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.directory);
    displayDirectory(data.directory)
}

getDirectoryData()

const displayDirectory = (directory) => {
    const cards = document.querySelector("div.directory");
    directory.forEach((company) => {
        // Create elements to add to the div.directory
        let directory_container = document.createElement("section");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let membership = document.createElement("p");
        let address = document.createElement("p");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let desc = document.createElement("p");

        // Build the h2 content out to show the company name
        h2.textContent = `${company.name}`;
        // Build the image portrait by settting all the relevant attribute
        img.setAttribute("src", company.logoURL);
        img.setAttribute("alt", `Logo of ${company.name}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "200");
        img.setAttribute("height", "200");

        // Build the paragraph element
        membership.textContent = `Membership: ${company.ID} ${company.membership} level`;
        address.textContent = `Address: ${company.address}`;
        email.textContent = `Email: ${company.email}`;
        phone.textContent = `Phone: ${company.phoneNumber}`;
        url.textContent = `${company.websiteURL}`;
        url.href = `${company.websiteURL}`;
        desc.textContent = `${company.description}`;

        // Append the section(directory_container) with the created elements
        directory_container.appendChild(h2);
        directory_container.appendChild(img);
        directory_container.appendChild(membership);
        directory_container.appendChild(address);
        directory_container.appendChild(email);
        directory_container.appendChild(phone);
        directory_container.appendChild(url);
        directory_container.appendChild(desc);

        cards.appendChild(directory_container);
    })
}