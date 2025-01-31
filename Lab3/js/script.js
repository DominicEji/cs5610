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
