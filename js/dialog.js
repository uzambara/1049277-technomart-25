function Dialog(dialogSelector){
    let that = this;
    that.dialogSelector = dialogSelector;
    that.dialogElement = document.querySelector(dialogSelector);

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
    }

    // Подписка для открытие формы
    that.addCloseEventListener = function(closeElementSelector){
        let closeElement = document.querySelector(closeElementSelector);

        if(closeElement){
            closeElement.addEventListener("click", that.closeDialog);
        }
        else{
            that.logBadSelectorError(closeElementSelector);
        }
    }

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
    }

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
    }

    that.preventDefault = function(args){
        if(args.length > 0){
            let ev = args[0];
            if(ev["preventDefault"])
                ev.preventDefault();
        }
    }

    that.showOverlay = function(){
        let overlay = document.querySelector(OVERLAY_SELECTOR);

        if(overlay)
            overlay.classList.add(SHOW_DIALOG_CLASS_NAME);
    }

    that.closeOverlay = function(){
        let overlay = document.querySelector(OVERLAY_SELECTOR);

        if(overlay)
            overlay.classList.remove(SHOW_DIALOG_CLASS_NAME);
    }

    that.logBadSelectorError = function(selectorValue){
        console.error("Не удалось найти элемент по селектору: " + selectorValue);
    }
}
