// Форма обратной связи
const feedbackDialogSelector = ".dialog-form-feedback";
const feedbackOpenSelector = ".button-write-us";
const feedBackCloseSelector = ".dialog-form-feedback .close-button";

// Карта
const mapDialogSelector = ".dialog-map";
const mapOpenSelector = ".company-info-map-link";
const mapCloseSelector = ".dialog-map .close-button"

// Слайдер
const nextSliderSelector = ".promo-slider-next"; 
const prevSliderSelector = ".promo-slider-prev"; 
const sliderSelector = ".promo-slider";

const showDialogClassName = "show-dialog";
const overlaySelector = ".overlay";

const visuallyHiddenClassName = "visually-hidden";

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
});
