function Dialog(dialogSelector, openElementSelector, closeElementSelector){
    let that = this;
    that.dialogSelector = dialogSelector;
    that.dialogElement = document.querySelector(dialogSelector);

    // Подписка для открытие формы
    that.addOpenEventListener = function(){
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
    that.addCloseEventListener = function(){
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
   
        if(that.dialogElement){
            that.showOverlay();
            that.dialogElement.classList.add(showDialogClassName);
        }
        else{
            that.logBadSelectorError(dialogSelector);
        }
    }

    that.closeDialog = function(){
        that.preventDefault(arguments);

        if(that.dialogElement){
            that.closeOverlay();
            that.dialogElement.classList.remove(showDialogClassName);
        }
        else{
            that.logBadSelectorError(dialogSelector);
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
        let overlay = document.querySelector(overlaySelector);

        if(overlay)
            overlay.classList.add(showDialogClassName);
    }

    that.closeOverlay = function(){
        let overlay = document.querySelector(overlaySelector);

        if(overlay)
            overlay.classList.remove(showDialogClassName);
    }

    that.logBadSelectorError = function(selectorValue){
        console.error("Не удалось найти элемент по селектору: " + selectorValue);
    }
}
