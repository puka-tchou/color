import { randomInt } from './random-int';
/**
 * Randomly change the background on page load.
 *
 * @description Changes the background using randomly each time the page is loaded.
 * @example randomBackground(5);
 * @param {number} i The number of images to pick from (i.e 5 means 6 backgrounds to pick from).
 *
 */
export function randomBackground(i) {
  const url = `background-image:url(assets/background/${randomInt(i)}.webp)`;
  document.querySelector('.background').style = url;
  return url;
}
