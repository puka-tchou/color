/**
 * Main function
 *
 */
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // var s = today.getSeconds();
    m = checkTime(m);
    // s = checkTime(s);
    document.querySelector(".clock").innerHTML =
        h + ":" + m;
    // var t = setTimeout(startTime, 500);
}

/**
 * Add missing zero in front of numbers
 *
 * @param {number} i
 * @returns string
 */
function checkTime(i) {
    if (i < 10) { i = "0" + i; }  // add zero in front of numbers < 10
    return i;
}

setTimeout(startTime(), 5000);