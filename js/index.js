
document.addEventListener("DOMContentLoaded", function () {
    // Форма обратной связи
    let writeUsDialog = new Dialog(
        dialogSelector = feedbackDialogSelector,
        openElementSelector = feedbackOpenSelector,
        closeElementSelector = feedBackCloseSelector);

    writeUsDialog.addOpenEventListener();
    writeUsDialog.addCloseEventListener();

    // Карта
    let mapDialog = new Dialog(
        dialogSelector = mapDialogSelector,
        openElementSelector = mapOpenSelector,
        closeElementSelector = mapCloseSelector);

    mapDialog.addOpenEventListener();
    mapDialog.addCloseEventListener();

    // Слайдер
    let slider = new Slider(nextSliderSelector, prevSliderSelector, sliderSelector);
    slider.addSliderListeners();

    let servicePairs = [
        new ServicePair(".company-features-item-delivery", ".service-item-delivery"),
        new ServicePair(".company-features-item-warranty", ".service-item-warranty"),
        new ServicePair(".company-features-item-credit", ".service-item-credit")
    ];

    let services = new Services(servicePairs, currentServiceClassName);
    services.addEventListeners();
});