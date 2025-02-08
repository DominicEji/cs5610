
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

// Calculate total price
function calculatePrice(flavor, size, toppings) {
    let basePrice = prices.flavors[flavor];
    let toppingPrice = toppings.reduce((total, topping) => total + prices.toppings[topping], 0);
    let sizeMultiplier = prices.sizes[size];
    return sizeMultiplier * (basePrice + toppingPrice);
}

// Display order summary
function displayOrderSummary(order) {
    let summaryMessage = `You have ordered a ${order.size} ${order.flavor} boba with ${order.toppings.length > 0 ? order.toppings.join(', ') : 'no toppings'}. Total Price: $${order.finalPrice.toFixed(2)}.`;

document.getElementById('order-summary').innerHTML = `
    <h2>Order Summary</h2>
    <p>${summaryMessage}</p>
`;
}

// Place order function
function placeOrder() {
    let flavor = document.getElementById('flavor').value;
    let size = document.getElementById('size').value;
    let toppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);

    // calculate the final price using the selected values
    let finalPrice = calculatePrice(flavor, size, toppings);

    // create an order object
    let order = {
        flavor: flavor,
        size: size,
        toppings: toppings,
        finalPrice: finalPrice
    };

    // display order summary
    displayOrderSummary(order);
}

// Attach event listener to button
document.getElementById('place-order-btn').addEventListener('click', () => {
        placeOrder();  // call placeOrder function

});
