//Assignment | JavaScript Control Structures & Functions
//Exploring Conditional Statements and Loops
let isLoggedIn = false;

//Simulate user login
function login() {
    const username = prompt("Enter your username:");
    if (username) {
        isLoggedIn = true;
        alert(`Welcome, ${username}!`);
    } else {
        alert('Login failed. Please try again.');
    }
}

//Log in the user
login();

//Check if user is logged in
if (!isLoggedIn) {
    alert('You are not logged in. Please sign in to add items in your cart.');
}

//Product list
const products = [
    { id: 1, name: 'Ohuhu alcohol markers', price: 30.00},
    { id: 2, name: 'Sketchbook', price: 7.00},
    { id: 3, name: 'Blick acrylic paint', price: 15.00},
    { id: 4, name: 'Laptop', price: 1500.00}
];

//Cart
const cart = [];

function displayProducts() {
    console.log('Available products:');
    products.forEach(product => {
        console.log(`${product.id}. ${product.name} - $${product.price}`);
       alert('Available products: \n' + `${product.id}. ${product.name} - $${product.price}`);
    });
}

//Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name}- $${product.price} has been added to your cart.`);
    } else {
        alert('Invalid product ID. Please try again.');
    }
}

//Display product and prompt user to add to the cart
if (isLoggedIn) {
    displayProducts();

    let addMore = true;
    while(addMore) {
        const productId = parseInt(prompt('Enter the product Id (1-4)to add the item to your cart (or type 0 to finish):'), 10);
        if (productId === 0) {
            addMore = false;
        } else {
            addToCart(productId);
        }
    }
}

//Calculate total and display items in the cart to user
function displayCart() {
    let total = 0;
    cart.forEach(product => {
        total += product.price;
    });
    return total;
}

if (cart.length > 0) {
    const totalCost = displayCart();
    alert(`Your total is $${totalCost}. Thank you for shopping with us!`);
} else {
    alert('Your cart is empty.');
}

