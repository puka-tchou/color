const app = {
  namespace: 'color_app',
  images: JSON.parse(localStorage.getItem('color_app')),
};

app.images = !app.images ? [] : app.images.images;

/**
 * @returns {Object}
 */
export function getApp() {
  return app;
}
