document.addEventListener("DOMContentLoaded", function (event) {
    // Your code to run since DOM is loaded and ready

    var checkAll = document.getElementById('checkAll');
    var overSize = document.getElementById('overSize');
    var takeAndGo = document.getElementById('takeAndGo');

    checkAll.addEventListener('change', function (event) {
        var checkbox = event.target;
        if (checkbox.checked || checkbox.indeterminate) {
            overSize.checked = true;
            takeAndGo.checked = true;
        } else {
            overSize.checked = false;
            takeAndGo.checked = false;
        }
    });

    overSize.addEventListener('change', function (event) {
        var checkbox = event.target;

        if (checkbox.checked) {
            if (takeAndGo.checked) {
                checkAll.checked = true;
                checkAll.indeterminate = false;
            }
            else checkAll.indeterminate = true;
        } else {
            if (takeAndGo.checked) checkAll.indeterminate = true;
            else {
                checkAll.checked = false;
                checkAll.indeterminate = false;
            }
        }
    });

    takeAndGo.addEventListener('change', function (event) {
        var checkbox = event.target;

        if (checkbox.checked) {
            if (overSize.checked) {
                checkAll.checked = true;
                checkAll.indeterminate = false;
            }
            else checkAll.indeterminate = true;
        } else {
            if (overSize.checked) checkAll.indeterminate = true;
            else {
                checkAll.checked = false;
                checkAll.indeterminate = false;
            }
        }
    });
});