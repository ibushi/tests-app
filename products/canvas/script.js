document.addEventListener("DOMContentLoaded", function (event) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.moveTo(0, 0);
    ctx.lineTo(400, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(295, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

    // Create gradient
    var grd = ctx.createLinearGradient(50, 100, 200, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(50, 120, 150, 80);
});