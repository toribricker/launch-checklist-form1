window.addEventListener("load", function () {
// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
let copilotName = document.getElementsByName("copilotName")
let fuelLevel = document.getElementById("fuelLevel")
let cargoMass = document.getElementsById("cargoMass")

let button = document.getElementById("formSubmit");

button.addEventListener("click", function() {
  let input = document.getElementById("pilotName")
});


let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === ""){
   alert("All fields are required!");
   event.preventDefault();
}
else if( isNaN(pilotName) === false || isNaN(copilotName) === false|| isNaN(fuelLeve) --- true|| isNaN(cargomass)=== true){
   alert("Make sure to enter valid information for each field!");
   event.preventDefault();
}
})
});
