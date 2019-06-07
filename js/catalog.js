const successCartAddingDialogSelector = ".dialog-form-buy-success";
const successCartAddingOpenSelector = ".product-card-actions-buy";
const successCardAddingCloseSelector = ".dialog-form-buy-success .close-button";

let successCartAddingDialog = new Dialog(
    successCartAddingDialogSelector,
    successCartAddingOpenSelector,
    successCardAddingCloseSelector);

successCartAddingDialog.addOpenEventListener();
successCartAddingDialog.addCloseEventListener();