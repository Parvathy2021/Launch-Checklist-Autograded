// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        console.log(selectedPlanet) // New variable to hold pickPlanet function taking listedPlanets as parameter
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl); 
        // Execute addDest function taking a document and the randomly selectedPlanet variable as a parameter
    })

    // Adding event listener
    document.addEventListener("submit", function(event) {
        event.preventDefault(); //prevent the default behavior of form submission (page refresh).
 //Input values are retrieved using document.querySelector()
         const pilotName = document.querySelector("input[name=pilotName]").value;
         const copilotName = document.querySelector("input[name=copilotName]").value;
         const fuelLevel = Number(document.querySelector("input[name=fuelLevel]").value);
         const cargoMass = Number(document.querySelector("input[name=cargoMass]").value);
//The faultyItems element is retrieved using  
         const faultyItems = document.getElementById('faultyItems');

//The formSubmission() function is called with input values and the faultyItems element.
// formSubmission() handles submission, performs validation, and updates shuttle requirements.
         formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
     })
    
    
 });