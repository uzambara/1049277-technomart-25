import Dialog, { ValidityMessages } from './dialog';
import * as Const from './main';
import Slider from './slider';
import {Services, ServicePair} from './services';

document.addEventListener("DOMContentLoaded", function () {
    // Форма обратной связи
    let writeUsDialog = new Dialog(Const.FEEDBACK_DIALOG_SELECTOR);

    writeUsDialog.addOpenEventListener(Const.FEEDBACK_OPEN_SELECTOR);
    writeUsDialog.addCloseEventListener(Const.FEEDBACK_CLOSE_SELECTOR);
    writeUsDialog.addAutoFocusField(Const.FEEDBACK_NAME_FIELD_SELECTOR);

    let nameValidity = new ValidityMessages(
        "Введите ваше Имя и Фамилию",
        "",
        "",
        "",
        "",
        "",
        "",
        "");
    writeUsDialog.addValidityForm(".dialog-form-feedback", ".button-send-feed-back");
    writeUsDialog.addCustomValidity("#feedback-form-user-name", nameValidity);

    // Карта
    let mapDialog = new Dialog(Const.MAP_DIALOG_SELECTOR);

    mapDialog.addOpenEventListener(Const.MAP_OPEN_SELECTOR);
    mapDialog.addCloseEventListener(Const.MAP_CLOSE_SELECTOR);

    // Слайдер
    let slider = new Slider(Const.SLIDER_SELECTOR);
    slider.addSliderListeners(Const.NEXT_SLIDER_SELECTOR, Const.PREV_SLIDER_SELECTOR);

    let servicePairs = [
        new ServicePair(".company-features-item-delivery", ".service-item-delivery"),
        new ServicePair(".company-features-item-warranty", ".service-item-warranty"),
        new ServicePair(".company-features-item-credit", ".service-item-credit")
    ];

    let services = new Services(servicePairs, Const.CURRENT_SERVICE_CLASS_NAME);
    services.addEventListeners();
});