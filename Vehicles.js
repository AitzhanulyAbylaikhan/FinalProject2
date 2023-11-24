$(document).ready(function () {
    var $element = $("#animate");
    var position = 0;

    function animate() {
        if (position >= $(window).width() - $element.width()) {
            position = 0;
        } else {
            position += 25;
        }

        // Use jQuery to animate the left property
        $element.animate({ left: position + "px" }, 500, animate);
    }

    // Start the animation.
    animate();
});

window.addEventListener('scroll', function() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollProgress = (window.scrollY / docHeight) * 100;

    document.getElementById('slider').style.width = scrollProgress + '%';
})
