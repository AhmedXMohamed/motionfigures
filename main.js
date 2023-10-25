let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Grey Tshirt',
        tag:'greytshirt',
        price: 15,
        inCart: 0,
    },
    {
        name: "Grey Hoddie",
        tag: "greyhoddie",
        price: 20,
        inCart: 0
    },
    {
        name: "Black Tshirt",
        tag: "blacktshirt",
        price: 15,
        inCart: 0,
    },
    {
        name: "Black Hoddie",
        tag: "blackhoddie",
        price: 20,
        inCart: 0,
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cart Numbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers
    }
}

function cartNumbers() {

    let productNumbers = localStorage.getItem('cart Numbers')

    productNumbers = parseInt(productNumbers);

if( productNumbers ) {
        localStorage.setItem('cart Numbers', productNumbers + 1)
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cart Numbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product)
}

function setItem(product) {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        cartItems[product.tag].inCart += 1;

    }
    product.inCart = 1;
    cartItems = {
        [product.tag]: product
    }

    localStorage.setItem("productInCart", JSON.stringify
    (cartItems));
}

onloadCartNumbers();
localStorage.setItem("productsIncart", JSON.stringify)
(cartItems);


function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
        product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function display() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".product-container");
    if( cartItems && productContainer ) {
        productContainer.innerHTML


    }

    if( cartItems ) {

    }
}

onloadCartNumbers();