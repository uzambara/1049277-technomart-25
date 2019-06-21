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

    // Подписка для открытие формы
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

    // Подписка для открытие формы
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
            overlay.classList.add(SHOW_DIALOG_CLASS_NAME);
    };

    that.closeOverlay = function(){
        let overlay = document.querySelector(OVERLAY_SELECTOR);

        if(overlay)
            overlay.classList.remove(SHOW_DIALOG_CLASS_NAME);
    };

    that.addAutoFocusField = function(autoFocusFieldSelector){
        that.autoFocusField = document.querySelector(autoFocusFieldSelector);
    }

    that.validity = null;

    that.validateForm = function(e){
        let el = document.getElementById("feedback-form-user-name");
        return;
        if(!el.checkValidity()){
            console.log(el.validity);
        }
        
        for (let key in that.validity) {
            if (that.validity.hasOwnProperty(key)) {
                //console.log(`${key}: ${el.validity[key]} ${that.validity[key]}`);           
                console.log(key + " " + el.validity[key] + " " + that.validity[key]);  
            }
        }

        console.log(el.validity);

        // let result = true;
        // if(that.validateArguments){
        //     for (let index = 0; index < that.validateArguments.length; index++) {
        //         const validateArgument = that.validateArguments[index];

        //         let isValid = validateArgument.expression.test(validateArgument.field.value);
        //         if(!isValid){
        //             validateArgument.field.setCustomValidity(validateArgument.errorMessage);
        //         }
        //         else{
        //             validateArgument.field.setCustomValidity("");
        //         } 
        //     }
        // }
    }
    that.setValidity = function(validity){
        that.validity = validity;
    }
    that.addSubmitForm = function(submitFormSelector){
        let submitForm = document.querySelector(submitFormSelector);
        // document.querySelector("#feedback-form-user-name").addEventListener("keyup", (e) => 
        // {
        //     console.log(e.target.value);
        //     e.target.setCustomValidity("");
        // });
        // document.querySelector("#feedback-form-email").addEventListener("keyup", (e) => 
        // {
        //     console.log(e.target.value);
        //     e.target.setCustomValidity("");
        // });
        submitForm.addEventListener("click", that.validateForm);
    }

    that.addFieldValidation = function(fieldSelector, regularExpression, errorMessage){
        let field = document.querySelector(fieldSelector);
        //field.setCustomValidity(errorMessage);
        that.validateArguments.push({
            field: field,
            expression: regularExpression,
            errorMessage: errorMessage
        });

    }

    that.logBadSelectorError = function(selectorValue){
        console.error("Не удалось найти элемент по селектору: " + selectorValue);
    };
}
