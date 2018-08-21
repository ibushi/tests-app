document.addEventListener("DOMContentLoaded", function (event) {
    // Your code to run since DOM is loaded and ready

    var text = document.getElementById('text');
    if (text.innerText.startsWith('Lorem')) {
        text.innerText = 'This is Lorem ipsum text';
    }
});