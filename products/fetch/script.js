document.addEventListener("DOMContentLoaded", function (event) {
    // Your code to run since DOM is loaded and ready

    var text = document.getElementById('text');
    
    fetch('https://www.booknomads.com/api/v0/isbn/9789000010134')
        .then(function (response) {
            return response.text();
        })
        .then(function (res) {
            text.innerHTML = 'Fetched response: <br><br>' + res;
        })
        .catch(function (error) {
            text.innerHTML = 'There has been an error.';
        });
});