document.addEventListener("DOMContentLoaded", function (event) {
    // Your code to run since DOM is loaded and ready

    var text = document.getElementById('text');

    const promise = new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://www.booknomads.com/api/v0/isbn/9789000010134');
        xhr.addEventListener('load', () => resolve(xhr.responseText));
        xhr.addEventListener('error', () => reject(xhr.statusText));
        xhr.send();
    });

    promise.then(function (res) {
        text.innerHTML = 'Fetched response: <br><br>' + res;
    }).catch(function (error) {
        text.innerHTML = 'There has been an error.';
    });
});