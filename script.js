// Access the DOM elements
let pImg = document.querySelector("#person-img")
let pFirstName = document.querySelector("#first")
let pLastName = document.querySelector("#last")
let pCity = document.querySelector("#city")
let pCountry = document.querySelector("#country")
let pPhone = document.querySelector("#phone")
let pDOB = document.querySelector("#dob")
let pEmail = document.querySelector("#email")
let pStreet = document.querySelector("#street")
let pAge = document.querySelector("#age")

// Access data
let person = data.results[7]

// Update image 
pImg.src = person.picture.large


// Update content
pFirstName.textContent = `First Name: ${person.name.first}`
pLastName.textContent = `Last Name: ${person.name.last}`
pCity.textContent = `City: ${person.location.city}`
pCountry.textContent = `Country: ${person.location.country}`
pPhone.textContent = `Phone Number: ${person.phone}`
pDOB.textContent = `Date of Birth: ${person.dob.date.slice(0, 10)}`
pEmail.textContent = `Email: ${person.email}`
pStreet.textContent = `Street: ${person.location.street.number} ${person.location.street.name}`

//Random Person
function generateRandomPerson() {
    let randomIndex = Math.floor(Math.random() * data.results.length);
    let randomPerson = data.results[randomIndex];

    pImg.src = randomPerson.picture.large;
    pFirstName.textContent = `First Name: ${randomPerson.name.first}`;
    pLastName.textContent = `Last Name: ${randomPerson.name.last}`;
    pCity.textContent = `City: ${randomPerson.location.city}`;
    pCountry.textContent = `Country: ${randomPerson.location.country}`;
    pPhone.textContent = `Phone Number: ${randomPerson.phone}`;
    pDOB.textContent = `Date of Birth: ${randomPerson.dob.date.slice(0, 10)}`;
    pEmail.textContent = `Email: ${randomPerson.email}`;
    pStreet.textContent = `Street: ${randomPerson.location.street.number} ${randomPerson.location.street.name}`;
}

// Attach an event listener to the button
const randomButton = document.querySelector("#random-btn");
randomButton.addEventListener("click", generateRandomPerson);
