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
            parent = document.querySelector(parent);
            parent.appendChild(tag);
        }
        return tag;
    }

    /**
     * Display the menu links
     * 
     * @param {Array} item - The menu array
     */
    function displayMenu(item) {
        for (var key in item) {
            // if (!item[key].name || !item[key].url) {
            //     console.warn("L'élément avec l'index = " + key + " du menu est vide !");
            // }
            var menuItem = insertElement("li", "", ".js-menu");
            var menuLink = insertElement("a", item[key].name);
            menuLink.setAttribute("class", "nav-link");
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
        uploadButton.setAttribute("class", "btn--success");
        var uploadButtonText = document.createTextNode("Upload");
        if (images.length > max) {
            uploadTitle = "Vous n'avez plus de place dans votre galerie";
            uploadButtonText = document.createTextNode("Supprimer une image");
            uploadButton.setAttribute("class", "btn--warning");
        }
        insertElement("h1", uploadTitle, ".js-upload-title");
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
     * Display the image in the preview zone
     * 
     * @param {*} item 
     * @param {*} param 
     */
    function previewImage(container, image) {
        container.addEventListener("click", function (event) {
            var preview = document.querySelector(".js-image-preview");
            preview.src = image.url;
            preview.className = "clicked js-image-preview";
            preview.addEventListener("click", removePreview);
        });
    }


    function deleteImage(button, image) {        
        button.addEventListener("click", function (event) {
            var result = images.find(function (item) {
                return item.url === image.url;
            });
            var key = images.indexOf(result);
            images.splice(key, 1);
            var gallery = document.querySelector(".gallery");
            gallery.innerHTML = "";
            displayImages(images);
        });
    }

    /**
     * Remove the image from the preview
     * 
     */
    function removePreview() {
        var preview = document.querySelector(".clicked");
        if (preview) {
            preview.className = "js-image-preview";
            preview.src = "../assets/cat1.gif";
        }
        // console.warn("This should not have happened");
    }

    /**
     * Randomly change the background
     * 
     * @param {Number} i 
     */
    function randomBackground(i) {
        var imageNumber = getRandomInt(i);
        var backgroundPath = "assets/background/";
        var background = document.querySelector("aside");
        background.setAttribute("style", "background-image:url(" + backgroundPath + imageNumber + ".webp)");

        // var request = new XMLHttpRequest();
        // request.open('GET', "http://api.giphy.com/v1/gifs/random?api_key=De3Jd3dQlTSX8Ds9968RlGZjEnsl9P35&tag=pixel-art-landscape-nature", true);
        // request.send();
        // request.onreadystatechange = processRequest;

        // function processRequest(event) {
        //     if (200 === request.status && 4 === request.readyState) {
        //         var response = JSON.parse(request.responseText);
        //         var url = response.data.image_original_url
        //         background.setAttribute("style", "background-image:url(" + url + ")");
        //         return response.data.image_original_url;
        //     }
        // }
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
            // var listItem = 
            insertElement("li", validExtensions[key], "ul.js-extension-list");
        }
    }

    displayMenu(menuItems);
    pushImage(images, 5, "Landscape ", "uploads/landscape/", ".jpg");
    displayUpload(maxImages, images);
    displayImages(images);
    randomBackground(5);
    displayTypes();
})
/**
* Execute anonymous function
*/
();