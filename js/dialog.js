function Dialog(dialogSelector){
    let that = this;
    that.dialogSelector = dialogSelector;
    that.dialogElement = document.querySelector(dialogSelector);
    that.autoFocusField = null;

    that.closeByEsc = function(e){
        if(e.keyCode === 27){
            that.closeDialog();
        }
    }

    // Подписка для открытия формы
    that.addOpenEventListener = function(openElementSelector){
        let openElements = document.querySelectorAll(openElementSelector);

        if(openElements){
            for (let index = 0; index < openElements.length; index++) {
                const openElement = openElements[index];
                openElement.addEventListener("click", that.showDialog);
            }
        }else{
            that.logBadSelectorError(openElementSelector);
        }
    };

    // Подписка для закрытия формы
    that.addCloseEventListener = function(closeElementSelector){
        let closeElement = document.querySelector(closeElementSelector);

        if(closeElement){
            closeElement.addEventListener("click", that.closeDialog);
        }
        else{
            that.logBadSelectorError(closeElementSelector);
        }
    };

    that.showDialog = function(){
        that.preventDefault(arguments);
        window.addEventListener("keyup", that.closeByEsc);

        if(that.dialogElement){
            that.showOverlay();
            that.dialogElement.classList.add(SHOW_DIALOG_CLASS_NAME);
        }
        else{
            that.logBadSelectorError(dialogSelector);
        }

        if(that.autoFocusField){
            that.autoFocusField.focus();
        }
    };

    that.closeDialog = function(){
        that.preventDefault(arguments);
        window.removeEventListener("keyup", that.closeByEsc);

        if(that.dialogElement){
            that.closeOverlay();
            that.dialogElement.classList.remove(SHOW_DIALOG_CLASS_NAME);
        }
        else{
            that.logBadSelectorError(that.dialogSelector);
        }
    };

    that.preventDefault = function(args){
        if(args.length > 0){
            let ev = args[0];
            if(ev["preventDefault"])
                ev.preventDefault();
        }
    };

    that.showOverlay = function(){
        let overlay = document.querySelector(OVERLAY_SELECTOR);

        if(overlay)
            overlay.classList.add(SHOW_OVERLAY_CLASS_NAME);
    };

    that.closeOverlay = function(){
        let overlay = document.querySelector(OVERLAY_SELECTOR);

        if(overlay)
            overlay.classList.remove(SHOW_OVERLAY_CLASS_NAME);
    };

    that.addAutoFocusField = function(autoFocusFieldSelector){
        that.autoFocusField = document.querySelector(autoFocusFieldSelector);
    }

    that.validateForm = function(e){
        console.log(e);
        for (let validityIndex = 0; validityIndex < that.validities.length; validityIndex++) {
            const fieldValidity = that.validities[validityIndex];
            if (!fieldValidity.field.checkValidity()) {
                let message = "";
           
                for (let index = 0; index < Object.keys(fieldValidity.validityMessages).length; index++) {
                    const key = Object.keys(fieldValidity.validityMessages)[index];

                    if(fieldValidity.field.validity[key] && fieldValidity.validityMessages[key])
                        message += fieldValidity.validityMessages[key] + "\n";
                    
                }

                fieldValidity.field.setCustomValidity(message);
            }
        }
    }

    that.validities = [];

    that.addCustomValidity = function(fieldSelector, validityMessages){
        let field = document.querySelector(fieldSelector);
        field.addEventListener("input", that.validateForm);

        that.validities.push(new FieldValidity(field, validityMessages));
    }

    that.logBadSelectorError = function(selectorValue){
        console.error("Не удалось найти элемент по селектору: " + selectorValue);
    };
}

function FieldValidity(field, validityMessages){
    return {
        field: field,
        validityMessages: validityMessages
    }
}

function ValidityMessages(
    patternMismatch,
    rangeOverflow,
    rangeUnderflow,
    stepMismatch,
    tooLong,
    tooShort,
    typeMismatch,
    valueMissing){
    return {
        patternMismatch: patternMismatch, // Значение не удовлетворяет шаблону, установленному в атрибуте pattern
        rangeOverflow: rangeOverflow, // Значение превосходит атрибут max
        rangeUnderflow: rangeUnderflow, // Значение меньше атрибута min
        stepMismatch: stepMismatch, // Значение не соответствует указаному шагу
        tooLong: tooLong, // Значение слишком длинное
        tooShort: tooShort, // Значение слишком короткое
        typeMismatch: typeMismatch, // Значение не соответствует указаному атрибуту type
        valueMissing: valueMissing, // Отсутствует обязательное значение
    }
}
