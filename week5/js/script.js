// This is my array of shopping items   
let shoppingItems = ["bread", "cheese", "green pepper"];


// Function to prompt the user to enter a radius
function getRadiusFromUser() {
    const radius = prompt("Please enter the radius of the circle:");
    if (radius !== null && !isNaN(radius) && radius > 0) {
        document.getElementById("radius").textContent = `value provided by user: ${radius}`;
        return parseFloat(radius);
    } else {
        alert("Invalid input. Please enter a positive number.");
        document.getElementById("radius").textContent = "Invalid input.";
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

// Function to populate the unordered list in the array elements
function populateShoppingList(items) {
    const shoppingList = document.querySelector(".shopping");

    // clear anyexisting items in the list
    shoppingList.innerHTML = "";

    // This loops through the array and creates a list items
    items.forEach(item => {
        const listitem = document.createElement("li");
        listitem.textContent = item;
        shoppingList.appendChild(listitem);
    });
}

// This function changes the list marker type using setAttribute()
function changeListMarkerUsingAttribute() {
    const listitems = document.querySelectorAll("li");
    listitems.forEach(item => {
        item.setAttribute("class", "squareList");
    });
}

// This function changes the list marker type using classlist.add()
function changeListMarkerUsingClassList() {
    const listitems = document.querySelectorAll("li");
    listitems.forEach(item => {
        item.classList.add("squareList");
    });
}

// Function to change the text color to green if the text contains "green"
function changeColorForGreenItems() {
    const listItems = document.querySelectorAll("li");
    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes("green")) {
            item.style.color = "green";
        }
    });
}

// Event listener to call functions when button is clicked
document.getElementById("calculateButton").addEventListener("click", function () {
    const radius = getRadiusFromUser();
    calculateArea(radius);
});

// This populates the shopping list when the page loads
populateShoppingList(shoppingItems);

// This applies the square list style using classlist.add() when the page loads
changeListMarkerUsingClassList();

// Apply the green color to list items containing "green"
changeColorForGreenItems();
