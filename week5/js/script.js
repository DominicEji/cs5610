// Function to prompt the user to enter a radius
function getRadiusFromUser() {
    const radius = prompt("Please enter the radius of the circle:");
    if (radius !== null && !isNaN(radius) && radius > 0) {
        return parseFloat(radius);
    } else {
        alert("Invalid input. Please enter a positive number.");
        return null;
    }
}

// Function to calculate the area of a circle given its radius
function calculateArea(radius) {
    if (radius !== null) {
        const area = Math.PI * Math.pow(radius, 2);
        document.getElementById("result").textContent = `Area of the circle: ${area.toFixed(2)}`;
    } else {
        document.getElementById("result").textContent = "Calculation could not be performed.";
    }
}