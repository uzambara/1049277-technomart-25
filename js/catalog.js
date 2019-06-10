const SUCCESS_CART_ADDING_DIALOG_SELECTOR = ".dialog-form-buy-success";
const SUCCESS_CART_ADDING_OPEN_SELECTOR = ".product-card-actions-buy";
const SUCCESS_CART_ADDING_CLOSE_SELECTOR = ".dialog-form-buy-success .close-button";
const CONTINUE_SHOPPING_SELECTOR = ".button.button-continue-shopping";

let successCartAddingDialog = new Dialog(
    SUCCESS_CART_ADDING_DIALOG_SELECTOR);

successCartAddingDialog.addOpenEventListener(SUCCESS_CART_ADDING_OPEN_SELECTOR);
successCartAddingDialog.addCloseEventListener(SUCCESS_CART_ADDING_CLOSE_SELECTOR);
successCartAddingDialog.addCloseEventListener(CONTINUE_SHOPPING_SELECTOR);