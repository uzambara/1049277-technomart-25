
document.addEventListener("DOMContentLoaded", function () {
    // Форма обратной связи
    let writeUsDialog = new Dialog(
        dialogSelector = FEEDBACK_DIALOG_SELECTOR);

    writeUsDialog.addOpenEventListener(FEEDBACK_OPEN_SELECTOR);
    writeUsDialog.addCloseEventListener(FEEDBACK_CLOSE_SELECTOR);

    // Карта
    let mapDialog = new Dialog(
        dialogSelector = MAP_DIALOG_SELECTOR);

    mapDialog.addOpenEventListener(MAP_OPEN_SELECTOR);
    mapDialog.addCloseEventListener(MAP_CLOSE_SELECTOR);

    // Слайдер
    let slider = new Slider(NEXT_SLIDER_SELECTOR, PREV_SLIDER_SELECTOR, SLIDER_SELECTOR);
    slider.addSliderListeners();

    let servicePairs = [
        new ServicePair(".company-features-item-delivery", ".service-item-delivery"),
        new ServicePair(".company-features-item-warranty", ".service-item-warranty"),
        new ServicePair(".company-features-item-credit", ".service-item-credit")
    ];

    let services = new Services(servicePairs, CURRENT_SERVICE_CLASS_NAME);
    services.addEventListeners();
});