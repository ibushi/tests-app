document.addEventListener("DOMContentLoaded", function (event) {
    // Your code to run since DOM is loaded and ready

    var text = document.getElementById('text');
    var hello = 'Hello World';
    text.innerText = `This is ${hello} app.`;
});