const CART_WITH_PRODUCTS_CLASS_NAME = "cart-with-products";

function Cart(cartElementSelector, cartCounterSelector, addToCartElementSelector){
    let that = this;
    that.cartItemsCount = 0;

    that.cart = document.querySelector(cartElementSelector);
    if(that.cartItemsCount === 0){
        that.cart.classList.remove(CART_WITH_PRODUCTS_CLASS_NAME);
    }
    else{
        that.cart.classList.add(CART_WITH_PRODUCTS_CLASS_NAME);
    }

    that.cartCounterElement = document.querySelector(cartCounterSelector);
    that.cartCounterElement.innerHTML = that.cartItemsCount;

    let addToCartElements = document.querySelectorAll(addToCartElementSelector);

    that.addToCart = function(e){
        that.cartItemsCount++;

        if(that.cartItemsCount === 0){
            that.cart.classList.remove(CART_WITH_PRODUCTS_CLASS_NAME);
        }
        else{
            that.cart.classList.add(CART_WITH_PRODUCTS_CLASS_NAME);
        }

        that.cartCounterElement.innerHTML = that.cartItemsCount;
        e.preventDefault();
    }

    for (let index = 0; index < addToCartElements.length; index++) {
        const addToCartElement = addToCartElements[index];
        
        addToCartElement.addEventListener("click", that.addToCart);
    }
}