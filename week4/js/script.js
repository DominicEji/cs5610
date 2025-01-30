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

// Function that fetches the total price to the console
function printTotalPrice(billAmount) {
    const totalPrice = calculateTotalPrice(billAmount);
    console.log(`The total price for a bill of $${billAmount.toFixed(2)} is $${totalPrice.toFixed(2)}.`);
}

printTotalPrice(2455); // For a $2455 bill

let students = [
    {
        name: "Cristian",
        age: 30,
        location: "Vancouver"
},
    {
        name: "James",
        age: 40,
        location: "Toronto"
    },
{
        name: "Garry",
        age: 20,
        location: "Vancouver"
    }
];

// Function to find students living in Vancouver
function findStudentsInVancouver(students) {
    return students.filter(student => student.location === "Vancouver");
}

// Function to find students who are 30 years or older
function findStudents30Plus(students) {
    return students.filter(student => student.age >= 30);
}
