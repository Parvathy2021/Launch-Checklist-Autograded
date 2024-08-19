// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    

    document.getElementById("missionTarget").innerHTML =   //locating the parameters
    `<h2>Mission Destination</h2>
     <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}"/>`
}

// Validating Input // Creating an alert to validate the input
function validateInput(value) {
    if (value === '') {
        return 'Empty';
    } else if (isNaN(value)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }

}

// Handling Form Submissions
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
     // Checking Validations and Issuing Alerts
     let pilotNameValidation = validateInput(pilot);
     let copilotNameValidation = validateInput(copilot);
     let fuelLevelValid = validateInput(fuelLevel);
     let cargoMassValid = validateInput(cargoLevel);
    
     
    //Getting all the elements neccessary
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelStatus = document.getElementById("fuelStatus");
    let cargoMassStatus = document.getElementById("cargoStatus");


   

    if (pilot === '' || copilot === '' || fuelLevel === '' || cargoLevel === '') {
        alert('All field are required!'); //Displays alert when no field is entered
    }
    //Displays alert when Strinng is not eneter in names of  pilot and co-pilotl 

    else if (pilotNameValidation === 'Is a Number' || copilotNameValidation=== 'Is a Number') {
        alert('Invalid input! Pilot Name and Co-pilot Name  should be strings.');
    } 

    //Displays alert when number is not eneter in fuel and cargo level 
    else if (fuelLevelValid === 'Not a Number' || cargoMassValid === 'Not a Number') {
        alert('Invalid input! Fuel Level and Cargo Mass should be Numbers.');
    } 


    // Updating shuttle information
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;


    // Update faulty items
    let faultyItems = document.getElementById('faultyItems');
    let launchStatus = document.getElementById('launchStatus');

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {

        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = 'green';
    }

    if (fuelLevel < 10000) {
        faultyItems.style.visibility = 'visible';
        fuelLevelStatus.innerHTML = 'Fuel level too low for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';
     //   alert('Fuel level too low for launch');

    } else {
        fuelLevelStatus.innerHTML = 'Fuel level high enough for launch';
    }

    if (cargoLevel > 10000) {
        faultyItems.style.visibility = 'visible';
        cargoMassStatus.innerHTML = 'Cargo mass too heavy for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';
      //  alert('Cargo mass too heavy for launch');

    } else {
        cargoMassStatus.innerHTML = 'Cargo mass low enough for launch';
    }
};

async function myFetch() {
    let planetsResponse;


    planetsResponse = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        return response.json();
    });

    return planetsResponse;
}

function pickPlanet(planets) { //Picks random index from the list of the planets returning random planet from the list
    let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
}




module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;