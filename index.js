$(document).ready(function(){
    $(".card p").mouseover(function(){
        $(this).css("background-color", "#B0B0B0");
    });
});

alert("Hello, this is car auction site");

var element = document.getElementById("animate");

// Set the initial position of the element.
var position = 0;

// Function to animate the element.
function animate() {
    if (position >= window.innerWidth - 50) {
        // Reset the position when it reaches the right edge.
        position = 0;
    } else {
        // Move the element to the right.
        position += 2;
    }

    // Apply the new position to the element.
    element.style.left = position  + "px";

    // Request the next frame for animation.
    requestAnimationFrame(animate);
}

// Start the animation.
animate();
