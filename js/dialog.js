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

    that.validateArguments = [];
    that.submitDialog = function(e){
        e.preventDefault();
        if(that.validateArguments){
            for (let index = 0; index < that.validateArguments.length; index++) {
                const validateArgument = that.validateArguments[index];

                let isValid = validateArgument.expression.test(validateArgument.field.value);
                if(!isValid){
                    //e.preventDefault();
                    //alert(1);
                } 
                
            }
        }
    }

    that.validate = function(element, expression){
        return element.value.match(expression);
    }

    that.submitElement;
    that.addSubmitElement = function(submitElementSelector){
        let submitElement = document.querySelector(submitElementSelector);
        console.log(submitElementSelector);
        console.log(submitElement);
        submitElement.addEventListener("submit", that.submitDialog);
    }

    that.addFieldValidation = function(fieldSelector, regularExpression){
        let field = document.querySelector(fieldSelector);

        that.validateArguments.push({
            field: field,
            expression: regularExpression
        });

    }

    that.logBadSelectorError = function(selectorValue){
        console.error("Не удалось найти элемент по селектору: " + selectorValue);
    };
}
