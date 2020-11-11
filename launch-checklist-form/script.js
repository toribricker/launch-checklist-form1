window.addEventListener('load', function () {
	fetch('https://handlers.education.launchcode.org/static/planets.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (planets) {
			let missionTarget = document.querySelector('#missionTarget');
			let randomNumber = Math.floor(Math.random() * 6 + 0);
			let planet = planets[randomNumber];
			missionTarget.innerHTML = `<h2>Mission Destination</h2>
      <ol>
        <li>Name: ${planet.name}</li>
        <li>Diameter: ${planet.diameter}</li>
        <li>Star: ${planet.star}</li>
        <li>Distance from Earth: ${planet.distance}</li>
        <li>Number of Moons: ${planet.moons}</li>
      </ol>
      <img src="${planet.image}"></img>`;
		});
	let form = document.querySelector('form');
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		let pilotName = document.getElementById('pilotName').value;
		let copilotName = document.getElementById('copilotName').value;
		let fuelLevel = document.getElementById('fuelLevel').value;
		let cargoMass = document.getElementById('cargoMass').value;
		let faultyItems = document.querySelector('#faultyItems');
		let launchStatus = document.querySelector('#launchStatus');
		if (
			pilotName === '' ||
			copilotName === '' ||
			fuelLevel === '' ||
			cargoMass === ''
		) {
			alert('All fields are required!');
			return;
		} else if (
			isNaN(pilotName) === false ||
			isNaN(copilotName) === false ||
			isNaN(fuelLevel) === true ||
			isNaN(cargoMass) === true
		) {
			alert('Make sure to enter valid information for each field!');
			return;
		}

		faultyItems.setAttribute('style', 'visibility: visible');
		let pilotStatus = document.getElementById('pilotStatus');
		let copilotStatus = document.getElementById('copilotStatus');
		let fuelStatus = document.getElementById('fuelStatus');
		let cargoStatus = document.getElementById('cargoStatus');

		let launchReady = true;
		let fuelMessage = 'Fuel level high enough for launch';
		fuelStatus.removeAttribute('style');
		if (fuelLevel < 10000) {
			fuelMessage = 'Not enough fuel for the journey';
			fuelStatus.setAttribute('style', 'color: red');
			launchReady = false;
		}

		let cargoMessage = 'Cargo mass low enough for launch';
		cargoStatus.removeAttribute('style');
		if (cargoMass > 10000) {
			cargoMessage = 'Too much mass for the shuttle to take off';
			cargoStatus.setAttribute('style', 'color: red');
			launchReady = false;
		}

		let launchStatusMessage = 'Shuttle is ready for launch';
		launchStatus.setAttribute('style', 'color: green');
		if (!launchReady) {
			launchStatusMessage = 'Shuttle not ready for launch';
			launchStatus.setAttribute('style', 'color: red');
		}

		launchStatus.innerHTML = launchStatusMessage;
		pilotStatus.innerHTML = `Pilot ${pilotName} Ready`;
		copilotStatus.innerHTML = `Copilot ${copilotName} Ready`;
		fuelStatus.innerHTML = fuelMessage;
		cargoStatus.innerHTML = cargoMessage;
	});
});
