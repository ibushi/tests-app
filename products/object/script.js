document.addEventListener("DOMContentLoaded", function (event) {
    // Your code to run since DOM is loaded and ready

    var image = document.getElementById('image');
    var width = '20px';
    var height = '20px';
    var style = { width, height };

    image.style.width = style.width;
    image.style.height = style.height;
});