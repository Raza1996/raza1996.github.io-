document.addEventListener('DOMContentLoaded', function() {
    var touchElements = document.querySelectorAll('.square-block');

    if (!('ontouchstart' in window) || window.innerWidth > 1024) {
        return; // Exit if the device is not a touch device or if it's a large screen
    }
    
    touchElements.forEach(function(element) {
        var tapped = false;

        element.addEventListener('click', function(event) {
            if (!tapped) {
                event.preventDefault();
                tapped = true;
                element.classList.add('hover');
            } else {
                var link = element.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });

        element.addEventListener('mouseleave', function() {
            setTimeout(function() {
                tapped = false;
                element.classList.remove('hover');
            }, 500);
        });
    });
});