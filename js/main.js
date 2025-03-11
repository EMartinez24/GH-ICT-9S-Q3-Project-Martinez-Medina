const fareAmountElement = document.getElementById('fareAmount');
const regularFareButton = document.getElementById('regularBtn');
const discountedFareButton = document.getElementById('discountedBtn');

function calculateRegularFare() {
    let fromStation = document.getElementById('fromStation').textContent;
    let toStation = document.getElementById('toStation').textContent;

    const stations = ["North Ave.", "Quezon Ave.", "Kamuning", "Cubao", "Santolan", "Ortigas", "Shaw Blvd.", "Boni", "Guadalupe", "Buendia", "Ayala", "Magallanes", "Taft"];

    let fromIndex = stations.indexOf(fromStation);
    let toIndex = stations.indexOf(toStation);

    let numStops = Math.abs(toIndex - fromIndex);

    let fare = 0;
    if (numStops <= 2) {
        fare = 13;
    } else if (numStops <= 4) {
        fare = 16;
    } else if (numStops <= 7) {
        fare = 20;
    } else if (numStops <= 10) {
        fare = 24;
    } else {
        fare = 28;
    }

    return fare;
}

regularFareButton.addEventListener('click', function() {
    let regularFare = calculateRegularFare();
    fareAmountElement.textContent = regularFare.toFixed(2);
});

discountedFareButton.addEventListener('click', function() {
    let regularFare = calculateRegularFare();

    if (regularFare >= 13 && regularFare <= 28) {
        let discountedFare = regularFare * 0.8;
        fareAmountElement.textContent = discountedFare.toFixed(2);
    } else {
        alert("Invalid regular fare amount. Please make sure it's between Php 13 and Php 28.");
    }
});