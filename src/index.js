/**
 * Self-executed anonymous function
 */
(function () {
    var validExtensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif"
    ];
    var images = [];
    var menuItems = [
        {
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
     * Insert a tag with text inside an HTML element
     * @param {String} tag The HTML tag to create
     * @param {String} text The text that will be displayed inside the tag. e.g. <a>Text</a>
     * @param {String} parent The parent of the created tag. The tag will be inserted into this parent
     */
    function insertElement(tag, text, parent) {
        if (!tag || "string" !== typeof tag) {
            throw new Error("insertElement requires a tag\n" + tag + " is not allowed as a tag parameter");
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
     * Display the menu links
     * @param {Array} menu The array containing menu objects
     */
    function displayMenu(menu) {
        for (var key in menu) {
            var menuItem = insertElement("li", "", ".js-menu");
            var menuLink = insertElement("a", menu[key].name);
            menuLink.setAttribute("class", "nav-link");
            menuLink.setAttribute("href", menu[key].url);
            menuItem.setAttribute("class", "nav-item");
            menuItem.appendChild(menuLink);
        }
    }

    /**
     * Display the upload button and the title and add a onclick event to the button
     * @param {Array} images The image gallery
     * @param {Number} max The maximum number of images accepted in the gallery
     */
    function displayUpload(images, max) {
        var uploadTitle = "Analyser une image";
        var uploadButton = insertElement("a", "", ".uploadContainer");
        uploadButton.role = "button";
        uploadButton.className = "btn--success";
        var uploadButtonText = document.createTextNode("Upload");
        if (images.length > max) {
            uploadTitle = "Vous n'avez plus de place dans votre galerie";
            uploadButtonText = document.createTextNode("Supprimer une image");
            uploadButton.className = "btn--warning";
        }
        insertElement("h1", uploadTitle, ".js-upload-title");
        uploadButton.appendChild(uploadButtonText);
        var file = document.querySelector("#js-file");
        uploadButton.onclick = function () {
            file.click();
        };
        file.addEventListener("change", function() {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://api.imagga.com/v2/colors");
            xhr.onload = function (event) {

            };
            xhr.setRequestHeader("authorization", "Basic YWNjX2VhMWFiMDhmM2JjMmI0NjpmNjU1NTRjMjlkZmU2MjBkZjZkNzlhOWI4NTZjOGRjYQ==");
            var formData = new FormData;
            formData.append("image", file.files[0]);
            xhr.send(formData);
        });
    }

    /**
     * Push images in the image table
     * @param {Array} images The gallery
     * @param {String} name The name of the image
     * @param {String} path The (relative or absolute) path to the file
     * @param {String} extension The file extension beginning with a dot e.g ".jpg" ".gif"
     * @param {Number} num The number of images we want push
     */
    function pushImage(images, name, path, extension, num) {
        for (var index = 0; index < num; index++) {
            images.push({
                name: name + (index + 1),
                url: path + "image" + index + extension,
                extension: extension
            });
        }
    }

    /**
     * Validates the file extension
     * @param {String} toCheck The thing to be checked
     * @returns {Boolean} returns "yes" if the extension is valid (i.e is present in the validExtensions list) and "no" if the extension is invalid
     */
    function isExtensionValid(image) {
        for (var key in validExtensions) {
            if (image.extension === validExtensions[key]) {
                return true;
            }
        }
        return false;
    }

    /**
     * Display the images in a gallery and add eventListeners
     * @param {Array} images The list of images
     */
    function displayImages(images) {
        for (var key in images) {
            if (isExtensionValid(images[key])) {
                var galleryItem = insertElement("a", "", ".gallery");
                var deleteText = document.createTextNode("x");
                var deleteBtn = document.createElement("button");
                deleteBtn.appendChild(deleteText);
                galleryItem.appendChild(deleteBtn);
                galleryItem.className = "image-item box-shadow transition";
                galleryItem.dataUrl = images[key].url;
                galleryItem.alt = images[key].name;
                galleryItem.title = images[key].name;
                galleryItem.style = "background-image: url(" + images[key].url + ")";
                previewImage(galleryItem, images[key]);
                deleteImage(deleteBtn, images[key]);
            }
        }
    }

    /**
     * Display an image in the preview zone when the user cliks it
     * @param {String} container The image that will be listened
     * @param {Object} image The object containing the details of the clicked image
     */
    function previewImage(container, image) {
        container.addEventListener("click", function (event) {
            var preview = document.querySelector(".js-image-preview");
            preview.src = image.url;
            preview.className = "clicked js-image-preview";
            preview.addEventListener("click", removePreview);
            // console.error("test");
        });
    }

    /**
     * Delete an image from the gallery when the users cliks on the button
     * @param {String} button The button to delete an image
     * @param {Array} image The list of images
     */
    function deleteImage(button, image) {
        var preview = document.querySelector(".js-image-preview");
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            var result = images.find(function (item) {
                return item.url === image.url;
            });
            var key = images.indexOf(result);
            images.splice(key, 1);
            var gallery = document.querySelector(".gallery");
            gallery.innerHTML = "";
            displayImages(images);
            if (preview.getAttribute("src") === image.url) {
                removePreview();
            }
        });
    }

    /**
     * Removes the image from the preview zone when the user clicks it again
     */
    function removePreview() {
        var preview = document.querySelector(".clicked");
        if (preview) {
            preview.className = "js-image-preview";
            preview.src = "../assets/cat1.gif";
        }
    }

    /**
     * Randomly change the background on page load
     * @param {Number} i The number of images to pick from (i.e 5 means 6 backgrounds to pick from)
     */
    function randomBackground(i) {
        var imageNumber = getRandomInt(i);
        var backgroundPath = "assets/background/";
        var background = document.querySelector("aside");
        background.setAttribute("style", "background-image:url(" + backgroundPath + imageNumber + ".webp)");
    }

    /**
     * Randomly generates an integer, between 0 and max
     * @param {Number} max The maximum of the generated number
     * @returns {Number} An integer between 0 and max
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /**
     * Display a list containing the extensions of files accepted
     */
    function displayTypes() {
        for (var key in validExtensions) {
            insertElement("li", validExtensions[key], "ul.js-extension-list");
        }
    }

    displayMenu(menuItems);
    pushImage(images, "Landscape ", "uploads/landscape/", ".jpg", 5);
    displayUpload(10, images);
    displayImages(images);
    randomBackground(5);
    displayTypes();
})
/**
* Execute the anonymous function
*/
();