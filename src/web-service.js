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
export function queryWebService(method, query, body, success) {
  const xhr = new XMLHttpRequest();
  if (query === null) {
    xhr.open(
      method,
      'https://api.imagga.com/v2/colors?extract_object_colors=0',
    );
  } else {
    xhr.open(
      method,
      `https://api.imagga.com/v2/colors?extract_object_colors=0&image_url=${query}`,
    );
  }
  xhr.setRequestHeader(
    'authorization',
    'Basic YWNjX2VhMWFiMDhmM2JjMmI0NjpmNjU1NTRjMjlkZmU2MjBkZjZkNzlhOWI4NTZjOGRjYQ==',
  );
  xhr.onloadend = (event) => {
    if (xhr.status === 200) {
      success(xhr.response, query);
    }
  };
  xhr.send(body);
}
