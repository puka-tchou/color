const app = {
  namespace: 'color_app',
  images: JSON.parse(localStorage.getItem('color_app'))
};

// If app.images is not defined, set it to [], else give it the value of app.images.images
app.images = !app.images ? [] : app.images.images;

/**
 * @returns {Object}
 */
export function getApp() {
  return app;
}
