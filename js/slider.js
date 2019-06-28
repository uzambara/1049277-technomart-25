function Slider(sliderItemsSelector, interval){
    let that = this;
    if(!interval)
        interval = 7000;

    that.slides = document.querySelectorAll(sliderItemsSelector);
    that.currentSlideIndex = that.slides.length - 1;
    that.sliderSwitcherItems = document.querySelectorAll(".slider-switcher-item");

    that.next = function(){
        let currentSlide = that.slides[that.currentSlideIndex];
        let currentSwticherItem = that.sliderSwitcherItems[that.currentSlideIndex];

        let nextIndex = that.getNextIndex(++that.currentSlideIndex);

        let nextSlide = that.slides[nextIndex];
        let nextSwitcherItem = that.sliderSwitcherItems[nextIndex];

        currentSlide.style.opacity = "0";
        nextSlide.style.opacity = "1";

        currentSwticherItem.classList.remove("slider-switcher-item-current");
        nextSwitcherItem.classList.add("slider-switcher-item-current");
    };

    that.prev = function(){
        let currentSlide = that.slides[that.currentSlideIndex];
        let currentSwticherItem = that.sliderSwitcherItems[that.currentSlideIndex];

        let nextIndex = that.getNextIndex(--that.currentSlideIndex);

        let nextSlide = that.slides[nextIndex];
        let nextSwitcherItem = that.sliderSwitcherItems[nextIndex];

        currentSlide.style.opacity = "0";
        nextSlide.style.opacity = "1";

        currentSwticherItem.classList.remove("slider-switcher-item-current");
        nextSwitcherItem.classList.add("slider-switcher-item-current");
    };

    that.setSlideVisible = function(slide){
        for (let index = 0; index < that.slides.length; index++) {
            const element = that.slides[index];
            
            element.classList.add("display-none");
        }

        slide.classList.remove("display-none");
    };

    that.getNextIndex = function(index){
        if(index >= that.slides.length){
            that.currentSlideIndex = 0;
        }
        else if(index < 0){
            that.currentSlideIndex = that.slides.length - 1;
        }

        return that.currentSlideIndex;
    }

    that.getSliderSwitcherItem = function(index){

    }

    that.addSliderListeners = function(prevSelector, nextSelector){
        let nextButton = document.querySelector(prevSelector);
        let prevButton = document.querySelector(nextSelector);
        nextButton.addEventListener("click", that.next);
        prevButton.addEventListener("click", that.prev);
    };

    setInterval(that.next, interval);
}