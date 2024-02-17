function calculate() {
    var electricity = parseFloat(document.getElementById('electricity').value);
    var gas = parseFloat(document.getElementById('gas').value);
    var miles = parseFloat(document.getElementById('miles').value);

    var totalEmissions = (electricity * 0.41) + (gas * 11.7) + (miles * 0.404);

    document.getElementById('result').innerHTML = "Your carbon footprint is " + totalEmissions.toFixed(2) + " metric tons of CO2 equivalent per month.";
}
