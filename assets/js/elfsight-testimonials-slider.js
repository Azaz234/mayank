(function () {
    "use strict";

    document.addEventListener('appReady.EappsTestimonialsSlider', function() {
        var widgets = document.querySelectorAll('[data-elfsight-testimonials-slider-options]');

        Array.prototype.slice.call(widgets).forEach(function(widget) {
            var version = widget.getAttribute('data-elfsight-testimonials-slider-version');
            var options = widget.getAttribute('data-elfsight-testimonials-slider-options');
            var data = JSON.parse(decodeURIComponent(options));

            window.eappsTestimonialsSlider(widget, data);
            
            widget.removeAttribute('data-elfsight-testimonials-slider-options');
            widget.removeAttribute('data-elfsight-testimonials-slider-version');
            
            widget.data = {
                options: data,
                version: version
            };
        });
    });

    //= ../app/app/dist/testimonials-slider.js
})();