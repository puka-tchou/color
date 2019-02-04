/**
 * Randomly change the background on page load.
 *
 * @description //TODO
 * @example //TODO
 * @param {number} i The number of images to pick from
 * (i.e 5 means 6 backgrounds to pick from).
 */
export function randomBackground(i) {
    var imageNumber = randomInt(i);
    var background = document.querySelector(".background");
    background.style = "background-image:url(assets/background/" + imageNumber + ".webp)";
}

/**
 * Randomly generates an integer, between 0 and max.
 *
 * @description //TODO
 * @example //TODO
 * @param {number} max The maximum of the generated number.
 * @returns {number} An integer between 0 and max.
 */
function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}