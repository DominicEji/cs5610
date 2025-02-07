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

// Function to toggle the button text between "clicked!" and "Click Me!"
function toggleButtonText() {
    const button = document.getElementById("updateImage");
    if (button.textContent === "Click Me!") {
        button.textContent = "clicked!";
    } else {
        button.textContent = "Click Me!";
    }

    localStorage.setItem("buttonText", button.textContent);
}

// Function to restore the button text from local storage
function restoreButtonText() {
    const savedText = localStorage.getItem("buttonText");

    if (savedText) {
        document.getElementById("updateImage").textContent = savedText;
    }
}

// Function to update the image attributes
function updateImageAttributes() {
    const img = document.getElementById("shoppingCart");
img.src = "images/shopping-cart.png";  // Adjust the path if needed
img.alt = "A shopping cart image";
img.width = 200;
img.height = 150;
}

// Event handler function to change background color based on button text
function changeBackgroundColor(event) {
    if (event.target.classList.contains("colorButton")) {
    const buttonColor = event.target.textContent.toLowerCase();
    event.target.style.backgroundColor = buttonColor;  
}
}

// Event handler to apply a strikethrough to clicked list items
function toggleStrikethrough(event) {
    // Check if the clicked target is an <li> element
    if (event.target.tagName === "LI") {
        // Toggle between adding/removing the strikethrough
        if (!event.target.innerHTML.includes("<del>")) {
            event.target.innerHTML = `<del>${event.target.textContent}</del>`;
        } else {
            event.target.innerHTML = event.target.textContent;  // Remove strikethrough
        }
    }
}

// Event listener to call functions when button is clicked
document.getElementById("calculateButton").addEventListener("click", function () {
    const radius = getRadiusFromUser();
    calculateArea(radius);
});

// Add event listeners for the button functionality
document.getElementById("updateImage").addEventListener("click", toggleButtonText);
document.getElementById("updateImage").addEventListener("click", updateImageAttributes, { once: true });

document.getElementById("colorButtonContainer").addEventListener("mouseover", changeBackgroundColor);

document.querySelector(".shopping").addEventListener("click", toggleStrikethrough);


// This populates the shopping list when the page loads
populateShoppingList(shoppingItems);

// This applies the square list style using classlist.add() when the page loads
changeListMarkerUsingClassList();

// Apply the green color to list items containing "green"
changeColorForGreenItems();


restoreButtonText();