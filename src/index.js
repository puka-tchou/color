/**
 * 
 * 
 * 
 * 
 *                                              ,%@@@@@@&(.                                                                        
 *                                      ,@@@@@@@@@@@@@@@@@@%                                                                    
 *                                   .@@@@@@@@@@@@@@@@@@@@@@@@%                                                                 
 *                                 .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            .&@                                                
 *                               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 
 *                               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                  
 *                             #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 
 *#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                                
 *.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#
 *
 * /

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
        }
    ];
    /** @type {Number} - the maximum images in the gallery */
    var maxImages = 10;

    /**
     * Display the menu links
     * 
     * @param {Array} item - The menu array
     */
    function displayMenu(item) {
        for (var key in item) {
            if (!item[key].name || !item[key].url) {
                console.warn("L'élément avec l'index = " + key + " du menu est vide !");
            }
            var menuItem = insertElement("li", "", ".js-menu");
            var menuLink = insertElement("a", item[key].name);
            menuLink.setAttribute("class", "nav-link")
            menuLink.setAttribute("href", item[key].url);
            menuItem.setAttribute("class", "nav-item");
            menuItem.appendChild(menuLink);
        }
    }

    /**
     * Display the upload button and the title
     *
     * @param {Number} max - the maximum number of images accepted
     * @param {Array} images - the images
     */
    function displayUpload(max, images) {
        var uploadTitle = "Analyser une image";
        var uploadButton = insertElement("a", "", ".uploadContainer");
        uploadButton.setAttribute("role", "button");
        uploadButton.setAttribute("class", "btn--success")
        var uploadButtonText = document.createTextNode("Upload");
        if (images.length > max) {
            uploadTitle = "Vous n'avez plus de place dans votre galerie";
            uploadButtonText = document.createTextNode("Supprimer une image");
            uploadButton.setAttribute("class", "btn--warning")
        }
        insertElement("h1", uploadTitle, ".js-upload-title")
        uploadButton.appendChild(uploadButtonText);
    }

    /**
     * Fills the image table with images
     * 
     * @param {Array} images - the array containing the images
     * @param {String} name - the name of the image file
     * @param {Number} numberOfImages - The number of images we want to display
     * @param {String} path - the (relative) path to the image file
     * @param {String} extension - the file extension
     */
    function pushImage(images, numberOfImages, name, path, extension) {
        for (var index = 0; index < numberOfImages; index++) {
            images.push({
                name: name + (index + 1),
                url: path + "image" + index + extension,
                extension: extension
            });
        }
    }

    /**
     * Validates the file extension
     * 
     * @param {String} toCheck - the thing to be checked
     * @returns {Boolean} returns "yes" if the extension is valid and "no" if the extension is invalid
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
     * Display images
     * 
     * @param {Array} images - the array containing all images
     */
    function displayImages(images) {
        for (var key in images) {
            if (isExtensionValid(images[key])) {
                var galleryItem = insertElement("a", "", ".gallery");
                galleryItem.setAttribute("class", "imageItem box-shadow transition");
                galleryItem.setAttribute("id", images[key].url);
                galleryItem.setAttribute("alt", images[key].name);
                galleryItem.setAttribute("title", images[key].name);
                galleryItem.setAttribute("style", "background-image: url(" + images[key].url + ")");
                galleryItem.setAttribute("onclick", "displayPreview(this.id)")
            }
        }
    }

    /**
     * Display the clicked image in the preview zone
     * 
     * @param {String} url - a string containing the (relative) path to the image
     */
    function displayPreview(url) {
        var image = document.querySelector(".js-image-preview");
        image.setAttribute("src", url);
        image.setAttribute("class", "js-image-preview");
    }

    /**
     * Randomly change the background
     */
    function randomBackground(i) {
        var imageNumber = getRandomInt(i);
        var backgroundPath = "assets/background/";
        var background = document.querySelector('aside');
        background.setAttribute("style", "background-image:url(" + backgroundPath + imageNumber + ".webp)")
    }

    /**
     * Generate a random number : 0 < number < max
     *
     * @param {number} max
     * @returns number
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /**
     * Display a list containing the type of files accepted
     */
    function displayTypes() {
        for (var key in validExtensions) {
            var listItem = insertElement("li", validExtensions[key], "ul.js-extension-list")
        }
    }

    /**
     * Create an element with some text inside and append it to a parent
     * 
     * @param {String} tag
     * @param {String} text
     * @param {String} parent
     * @returns {Object}
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
            var parent = document.querySelector(parent);
            parent.appendChild(tag);
        }
        return tag
    }

    displayMenu(menuItems);
    pushImage(images, 5, "Landscape ", "uploads/landscape/", ".jpg");
    displayUpload(maxImages, images);
    displayImages(images);
    randomBackground(6);
    displayTypes();

    insertElement(true);
})
/**
 * Execute anonymous function
 */
();