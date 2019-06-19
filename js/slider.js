function Slider(sliderItemsSelector, interval = 7000){
    let that = this;
    
    that.slides = document.querySelectorAll(sliderItemsSelector);
    that.currentSlideIndex = that.slides.length - 1;

    that.next = function(){
        let currentSlide = that.getSlide(that.currentSlideIndex);
        let nextSlide = that.getSlide(++that.currentSlideIndex);

        currentSlide.style.opacity = "0";
        nextSlide.style.opacity = "1";
    };

    that.prev = function(){
        let currentSlide = that.getSlide(that.currentSlideIndex);
        let nextSlide = that.getSlide(--that.currentSlideIndex);

        currentSlide.style.opacity = "0";
        nextSlide.style.opacity = "1";
    };

    that.setSlideVisible = function(slide){
        for (let index = 0; index < that.slides.length; index++) {
            const element = that.slides[index];
            
            element.classList.add("display-none");
        }

        slide.classList.remove("display-none");
    };

    that.getSlide = function(index){
        if(that.currentSlideIndex >= that.slides.length){
            that.currentSlideIndex = 0;
        }
        else if(that.currentSlideIndex < 0){
            that.currentSlideIndex = that.slides.length - 1;
        }

        return that.slides[that.currentSlideIndex];
    };

    that.addSliderListeners = function(prevSelector, nextSelector){
        let nextButton = document.querySelector(prevSelector);
        let prevButton = document.querySelector(nextSelector);
        nextButton.addEventListener("click", that.next);
        prevButton.addEventListener("click", that.prev);
    };

    setInterval(that.next, interval);
}