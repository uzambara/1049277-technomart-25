const SUCCESS_CART_ADDING_DIALOG_SELECTOR = ".dialog-form-buy-success";
const SUCCESS_CART_ADDING_OPEN_SELECTOR = ".product-card-actions-buy";
const SUCCESS_CART_ADDING_CLOSE_SELECTOR = ".dialog-form-buy-success .close-button";
const CONTINUE_SHOPPING_SELECTOR = ".button.button-continue-shopping";
const CART_SELECTOR = ".interface-link.cart";
const CART_ITEMS_COUNTER_SELECTOR = ".cart-items-count";

import Cart from './cart';
import Dialog from './dialog';

document.addEventListener("DOMContentLoaded", function () {
    let cart = new Cart(CART_SELECTOR, CART_ITEMS_COUNTER_SELECTOR, SUCCESS_CART_ADDING_OPEN_SELECTOR);
    let successCartAddingDialog = new Dialog(
        SUCCESS_CART_ADDING_DIALOG_SELECTOR);

    successCartAddingDialog.addOpenEventListener(SUCCESS_CART_ADDING_OPEN_SELECTOR);
    successCartAddingDialog.addCloseEventListener(SUCCESS_CART_ADDING_CLOSE_SELECTOR);
    successCartAddingDialog.addCloseEventListener(CONTINUE_SHOPPING_SELECTOR);
});