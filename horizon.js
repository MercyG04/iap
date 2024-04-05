window.addEventListener('resize', function() {
    // Get the width of the window
    var windowWidth = window.innerWidth;

    // Select the header element
    var header = document.querySelector('header');

    // If the window width is less than 768px, add a class to the header
    if (windowWidth < 768) {
        header.classList.add('mobile');
    } else {
        // If the window width is greater than or equal to 768px, remove the class
        header.classList.remove('mobile');
    }
});