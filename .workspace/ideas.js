/**
 * Change the displayed language
 *
 * @param {string} lang - Either the browser language or the user-chosen language
 */
function displayLang(lang) {
    if (!lang) {
        lang = navigator.language;
    };
    /** @type {RegExp} - A regular expression to search for a supported language */
    var frRegExp = new RegExp('fr*');
    var galleryContainer = document.querySelector('.galleryName');
    var galleryName = document.createTextNode('My gallery')
    if (frRegExp.test(lang)) {
        galleryName = document.createTextNode('Ma galerie')
    }
    galleryContainer.appendChild(galleryName);
};

displayLang(lang);