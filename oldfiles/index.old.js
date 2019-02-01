/**
 * Self-executed anonymous function
 */
"use strict";
(function () {
    var app = {
        namespace: "color_app",
        images: JSON.parse(localStorage.getItem("color_app")).images
    };
    if (!app.images) {
        app.images = [];
    }
    var validExtensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif"
    ];
    var menuItems = [{
        name: "accueil",
        url: "index.html"
    },
    {
        name: "galerie",
        url: "gallery.html"
    },
    {
        name: "github",
        url: "#"
    },
    {
        name: "documentation",
        url: "/docs/index.html"
    }
    ];

    /**
     * Create a new HTMLElement and append it in the given parent.
     * 
     * @description Creates a HTML tag using the first parameter. If the second
     * parameter is set, append text inside this tag. If the third parameter is
     * set, append the created tag inside the parent.
     * @example insertElement("a", "Click me!", ".a-container");
     * @param {string} tag The HTML tag to create.
     * @param {string} text The text that will be displayed inside the tag.
     * E.g. <a>Text</a>.
     * @param {string} parent The parent of the created tag. The tag will be
     * inserted into this parent.
     * @returns {HTMLElement} The created HTMLElement.
     */
    function insertElement(tag, text, parent) {
        if (!tag || "string" !== typeof tag) {
            throw new Error("insertElement requires a tag\n" + tag +
                " is not allowed as a tag parameter");
        }
        tag = document.createElement(tag);
        if ("undefined" !== typeof text) {
            tag.appendChild(document.createTextNode(text));
        }
        if ("undefined" !== typeof parent) {
            parent = document.querySelector(parent);
            parent.appendChild(tag);
        }
        return tag;
    }

    /**
     * Display the menu links.
     * 
     * @description Display the menu links.
     * @example displayMenu(menuItems);
     * @param {Array} menu The array containing menu objects.
     */
    function displayMenu() {
        for (var key in menuItems) {
            var menuItem = insertElement("li", "", ".js-menu");
            var menuLink = insertElement("a", menuItems[key].name);
            menuLink.setAttribute("class", "nav-link");
            menuLink.setAttribute("href", menuItems[key].url);
            menuItem.setAttribute("class", "nav-item");
            menuItem.appendChild(menuLink);
        }
        return true;
    }

    /**
     * Push images in the image table.
     * 
     * @description //TODO
     * @example //TODO
     * @param {string} url The (relative or absolute) path to the file.
     * @param {Object} colors The colors of the image.
     */
    function pushImage(url, colors) {
        app.images.push({
            url: url,
            colors: colors
        });
        localStorage.setItem(app.namespace, JSON.stringify(app));
    }

    /**
     * Connect to the web service to get images colors.
     * 
     * @description //TODO
     * @example //TODO
     * @param {string} method The used to connect to the web service.
     * @param {string} query The complete query to append at the end of the url
     * e.g "&Yay".
     * @param {FormData} body The value that will go in the xhr.send() statement.
     * @param {*} success Something that will be executed when the request is loaded.
     */
    function queryWebService(method, query, body, success) {
        var xhr = new XMLHttpRequest();
        if (null === query) {
            xhr.open(
                method,
                "https://api.imagga.com/v2/colors?extract_object_colors=0"
            );
        } else {
            xhr.open(
                method,
                "https://api.imagga.com/v2/colors?extract_object_colors=0&image_url=" +
                query
            );
        }
        xhr.setRequestHeader(
            "authorization",
            "Basic YWNjX2VhMWFiMDhmM2JjMmI0NjpmNjU1NTRjMjlkZmU2MjBkZjZkNzlhOWI4NTZjOGRjYQ=="
        );
        xhr.onload = function (event) {
            if (200 === this.status) {
                success(this, query);
            }
        };
        xhr.send(body);
    }

    /**
     * On file change, send the file to the web service.
     * 
     * @description //TODO
     * @example //TODO
     * @param {HTMLElement} button The button that is clicked by the user.
     */
    function onFileChange(button) {
        var file = document.querySelector("#js-file");
        button.onclick = function () {
            file.click();
        };
        file.addEventListener(
            "change",
            function (event) {
                var formData = new FormData;
                formData.append("image", file.files[0]);
                queryWebService(
                    "POST",
                    null,
                    formData,
                    function (xhr) {
                        var reader = new FileReader();
                        reader.onloadend = function (event) {
                            var file = event.target.result;
                            pushImage(file, JSON.parse(xhr.response).result.colors.image_colors);
                            displayImages();
                            document.querySelector("div.js-gallery a.image-item:last-child").click();
                        };
                        reader.readAsDataURL(file.files[0]);
                    }
                );
            });
    }

    /**
     * On url input, send the file to the web service.
     * 
     * @description //TODO
     * @example //TODO
     * @param {HTMLFormElement} form The form that is submitted.
     */
    function onFormSubmit(form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            queryWebService(
                "GET",
                form.elements.url.value,
                null,
                function (url, xhr) {
                    pushImage(url, JSON.parse(xhr.response).result.colors.image_colors);
                    displayImages();
                    document.querySelector("div.js-gallery a.image-item:last-child").click();
                });
        });
    }

    /**
     * Display the upload button and the title and add a onclick event to the
     * button.
     *
     * @description //TODO
     * @example //TODO
     * @param {number} max The maximum number of images accepted in the gallery.
     */
    function displayUpload(max) {
        var uploadContainer = document.querySelector(".js-upload-container");
        var uploadButton = insertElement("a", "", ".js-upload-container");
        var uploadButtonText = document.createTextNode("upload");
        var form = insertElement("form");
        var inputField = insertElement("input");
        var submitField = insertElement("input");
        uploadButton.role = "button";
        uploadButton.className = "btn--success";
        form.action = "";
        form.method = "GET";
        inputField.type = "url";
        inputField.required = "required";
        inputField.name = "url";
        submitField.type = "submit";
        submitField.value = "envoyer";
        if (app.images.length > max) {
            uploadButton.className = "btn--warning";
            uploadButtonText = document.createTextNode("supprimer une image");
        }
        uploadButton.appendChild(uploadButtonText);
        form.appendChild(inputField);
        form.appendChild(submitField);
        uploadContainer.appendChild(form);
        onFileChange(uploadButton);
        onFormSubmit(form);
    }

    /**
     * Display the images in a gallery and add eventListeners.
     *
     * @description //TODO
     * @example //TODO
     */
    function displayImages() {
        var gallery = document.querySelector(".js-gallery");
        gallery.innerHTML = "";
        for (var key in app.images) {
            var galleryItem = insertElement("a", "", ".js-gallery");
            var deleteText = document.createTextNode("x");
            var deleteBtn = document.createElement("button");
            deleteBtn.appendChild(deleteText);
            galleryItem.appendChild(deleteBtn);
            galleryItem.className = "image-item box-shadow transition";
            galleryItem.setAttribute("dataUrl", app.images[key].url);
            galleryItem.style = "background-image: url(" + app.images[key].url + ")";
            galleryItem.addEventListener("click", previewImage);
            deleteImage(deleteBtn, app.images[key]);
        }
    }

    /**
     * Display an image in the preview zone when the user cliks it.
     *
     * @description //TODO
     * @example //TODO
     * @param {undefined} event The event triggered.
     */
    function previewImage(event) {
        var preview = document.querySelector(".js-image-preview");
        var url = event.target.getAttribute("dataUrl");
        preview.src = url;
        preview.className = "clicked js-image-preview item-center";
        preview.addEventListener("click", removePreview);
        var image = app.images.find(function (element) {
            return url === element.url;
        });
        displayColor(image);
    }

    /**
     * Delete an image from the gallery when the users cliks on the button.
     *
     * @description //TODO
     * @example //TODO
     * @param {string} button The button to delete an image.
     * @param {Array} image The list of images.
     */
    function deleteImage(button, image) {
        var preview = document.querySelector(".js-image-preview");
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            var result = app.images.find(function (item) {
                return item.url === image.url;
            });
            var key = app.images.indexOf(result);
            app.images.splice(key, 1);
            localStorage.setItem(app.namespace, JSON.stringify(app));
            var gallery = document.querySelector(".js-gallery");
            gallery.innerHTML = "";
            displayImages();
            if (preview.getAttribute("src") === image.url) {
                removePreview();
                removeInside(".js-color-list");
            }
        });
    }

    /**
     * Removes the image from the preview zone when the user clicks it again.
     * 
     * @description //TODO
     * @example //TODO
     */
    function removePreview() {
        var preview = document.querySelector(".clicked");
        if (preview) {
            preview.className = "js-image-preview item-center";
            preview.src = "../assets/cat1.gif";
            removeInside(".js-color-list");
        }
    }

    function displayColor(image) {
        removeInside(".js-color-list");
        for (var key in image.colors) {
            insertElement("li", image.colors[key].html_code, ".js-color-list");
        }
    }

    /**
     * Remove all that is inside a selector.
     * 
     * @description //TODO
     * @example removeInside(".css-selector");
     * @param {string} selector The selector to target.
     */
    function removeInside(selector) {
        document.querySelector(selector).innerHTML = "";
    }

    /**
     * Randomly change the background on page load.
     *
     * @description //TODO
     * @example //TODO
     * @param {number} i The number of images to pick from
     * (i.e 5 means 6 backgrounds to pick from).
     */
    function randomBackground(i) {
        var imageNumber = getRandomInt(i);
        var backgroundPath = "assets/background/";
        var background = document.querySelector(".background");
        background.style = "background-image:url(" + backgroundPath + imageNumber + ".webp)";
    }

    /**
     * Randomly generates an integer, between 0 and max.
     *
     * @description //TODO
     * @example //TODO
     * @param {number} max The maximum of the generated number.
     * @returns {number} An integer between 0 and max.
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /**
     * Display a list containing the extensions of files accepted.
     * 
     * @description //TODO
     * @example //TODO
     */
    function displayTypes() {
        for (var i = 0; i < validExtensions.length; i++) {
            insertElement("li", validExtensions[i], "ul.js-extension-list");
        }
    }

    displayMenu();
    displayUpload(10);
    displayImages();
    randomBackground(5);
    displayTypes();
}());