import { getApp } from "./app";

/**
 * Push images in the image table.
 * 
 * @description //TODO
 * @example //TODO
 * @param {string} url The (relative or absolute) path to the file.
 * @param {Object} colors The colors of the image.
 */
export function pushImage(url, colors) {
    var app = getApp();
    app.images.push({
        url,
        colors
    });
    localStorage.setItem(app.namespace, JSON.stringify(app));
}