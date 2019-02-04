import { pushImage } from "./push-image";
import { displayImages } from "./display-gallery";
import { queryWebService } from "./web-service";
/**
 * On file change, send the file to the web service.
 * 
 * @description //TODO
 * @example //TODO
 * @param {HTMLElement} button The button that is clicked by the user.
 */
export function onFileChange(button) {
    var file = document.querySelector("#js-file");
    button.onclick = function() {
        file.click();
    };
    file.addEventListener("change", function(event) {
        var formData = new FormData;
        formData.append("image", file.files[0]);
        queryWebService("POST", null, formData, function(response) {
            var reader = new FileReader();
            reader.onloadend = function(event) {
                var file = event.target.result;
                pushImage(file, JSON.parse(response).result.colors.image_colors);
                displayImages();
                document.querySelector("div.js-gallery a.image-item:last-child").click();
            };
            reader.readAsDataURL(file.files[0]);
        });
        return event;
    });
}
/**
 * On url input, send the file to the web service.
 * 
 * @description //TODO
 * @example //TODO
 * @param {HTMLFormElement} form The form that is submitted.
 */
export function onFormSubmit(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        queryWebService("GET", form.elements.url.value, null, function(response, url) {
            pushImage(url, JSON.parse(response).result.colors.image_colors);
            displayImages();
            document.querySelector("div.js-gallery a.image-item:last-child").click();
        });
    });
}