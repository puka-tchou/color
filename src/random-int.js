/**
 * Randomly generates an integer, between 0 and max.
 *
 * @description This function generates a random integer and returns it.
 * @example const randomNumber = randomInt(5);
 * @param {number} max The maximum of the generated number.
 * @returns {number} An integer between 0 and max.
 */
export function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}