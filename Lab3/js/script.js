
// Prices object
const prices = {
    flavors: {
        original: 2.5,
        mango: 3.0,
        strawberry: 3.5,
    },
    sizes: {
        small: 1.0,
        medium: 1.5,
        large: 2.0,
    },
    toppings: {
        boba: 0.5,
        jelly: 0.75,
        pudding: 1.0,
    }
};

// This function validates order before placing it
function validateOrder(flavor, size) {
    if (!flavor || !size) {
        alert('Please select both a flavor and a size.');
        return false;
    }
    return true;
}

// Calculate total price
function calculatePrice(flavor, size, toppings) {
    let basePrice = prices.flavors[flavor];
    let toppingPrice = toppings.reduce((total, topping) => total + prices.toppings[topping], 0);
    let sizeMultiplier = prices.sizes[size];
    return sizeMultiplier * (basePrice + toppingPrice);
}

// Display order summary
function displayOrderSummary(order) {
document.getElementById('order-summary').innerHTML = `
    <h2>Order Summary</h2>
    <p>- Flavor: ${order.flavor}</p>
    <p>- Size: ${order.size}</p>
    <p>- Toppings: ${order.toppings.length > 0 ? order.toppings.join(', ') : 'No toppings'}</p>
    <p>- Total Price: $${order.finalPrice.toFixed(2)}</p>
`;
}

// Place order function
function placeOrder() {
    let flavor = document.getElementById('flavor').value;
    let size = document.getElementById('size').value;
    let toppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);

    if (!validateOrder(flavor, size)) {
    let finalPrice = calculatePrice(flavor, size, toppings);
    let order = {
        flavor: flavor,
        size: size,
        toppings: toppings,
        finalPrice: finalPrice
    };
    displayOrderSummary(order);
}
}

// Attach event listener to button
document.getElementById('place-order-btn').addEventListener('click', () => {
        placeOrder();  // No parameters needed

});
