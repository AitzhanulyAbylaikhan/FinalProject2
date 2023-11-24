
document.addEventListener('DOMContentLoaded', function() {
    const clickSound = document.getElementById('clickSound');

    // Add a click event listener to the body and use event delegation
    document.body.addEventListener('click', function(event) {
        // Check if the clicked element has the class 'btn-sound'
        if (event.target.classList.contains('btn-sound')) {
            // If yes, play the click sound
            clickSound.play();
        }
    });
});

window.addEventListener('scroll', function() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollProgress = (window.scrollY / docHeight) * 100;

    document.getElementById('slider').style.width = scrollProgress + '%';
})

