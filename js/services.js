function Services(servicePairs, currentClassName){
    let that = this;

    that.currentClassName = currentClassName;
    that.getCurrentService = function(){
        for (let index = 0; index < that.servicePairs.length; index++) {
            const servicePair = that.servicePairs[index];
            if(servicePair.link.classList.contains(that.currentClassName)){
                return servicePair.link;
            }
        }

        return null;
    };

    that.servicePairs = servicePairs;
    that.selectedService = that.getCurrentService();
    that.addEventListeners = function(){
        for (let index = 0; index < that.servicePairs.length; index++) {
            const pair = that.servicePairs[index];
            pair.link.addEventListener("click", that.changeService);
            pair.link.childNodes[0].addEventListener("focus", that.changeService);
        }
    };

    that.changeService = function(ev){
        ev.preventDefault();
        
        that.selectedService.classList.toggle(that.currentClassName);
        let selectedContent = that.getContentByLink(that.selectedService);
        if(selectedContent)
            selectedContent.classList.toggle(VISUALLY_HIDDEN_CLASS_NAME);

        ev.target.parentElement.classList.toggle(that.currentClassName);
        let newSelectedService = that.getContentByLink(ev.target.parentElement);
        if(newSelectedService)
            newSelectedService.classList.toggle(VISUALLY_HIDDEN_CLASS_NAME);

        that.selectedService = ev.target.parentElement;
    };

    that.getContentByLink = function(link){
        for (let index = 0; index < that.servicePairs.length; index++) {
            const servicePair = that.servicePairs[index];
            if(servicePair.link === link){
                return servicePair.content;
            }
            
        }

        return null;
    };
}

function ServicePair(linkSelector, contentSelector){
    this.link = document.querySelector(linkSelector);
    this.content = document.querySelector(contentSelector);
}