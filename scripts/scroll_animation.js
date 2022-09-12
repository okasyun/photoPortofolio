
document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }


    const _inviewslideAnimation = function(el, inview) {
        if(inview) {
            el.classList.add('inview');
        }
        else {
            el.classList.remove('inview');
        }
    }

     const _inviewtextAnimation = function(el, inview) {
        if(inview) {
            el.classList.add('inview');
        }
        else {
            el.classList.remove('inview');
        }
    }

    const so2 = new ScrollObserver('.cover-slide', _inviewslideAnimation);
    const so3 = new ScrollObserver('.text-animate', _inviewtextAnimation);
});


