// Using a for loop to log powers of 2 from 2 to 1024
console.log("Powers of 2 using for loop:");
for (let i = 2; i <= 1024; i *= 2) {
    console.log(i);
}

// Using a while loop to log powers of 2 from 2 to 1024
console.log("Powers of 2 using while loop:");
let num = 2;
while (num <= 1024) {
    console.log(num);
    num *= 2;
}


let userName;

do {
  // Prompt the user to enter their name
userName = prompt("Please enter your name:");

  // Check if the input is a number or less than 2 characters
} while (!isNaN(userName) || userName.length < 2);

// Display a welcome message
alert(`Welcome, ${userName}!`);


// Function to calculate total price with defaults for tax and tip rates
function calculateTotalPrice(billAmount, taxRate = 0.12, tipRate = 0.15) {
    const tax = billAmount * taxRate;
    const tip = billAmount * tipRate;
    return billAmount + tax + tip;
}
