## Constants

<dl>
<dt><a href="#menuItems">menuItems</a> : <code>Object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getApp">getApp()</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#deleteImage">deleteImage(button, image)</a></dt>
<dd><p>Delete an image from the gallery when the users cliks on the button.</p>
</dd>
<dt><a href="#displayFooter">displayFooter()</a></dt>
<dd><p>Display a list containing the files accepted in the footer.</p>
</dd>
<dt><a href="#removePreview">removePreview()</a></dt>
<dd><p>Removes the image from the preview zone when the user clicks it.</p>
</dd>
<dt><a href="#displayColor">displayColor(image)</a></dt>
<dd><p>Display the color list of the image in the preview zone.</p>
</dd>
<dt><a href="#previewImage">previewImage(event)</a></dt>
<dd><p>Display an image in the preview zone when the user cliks it.</p>
</dd>
<dt><a href="#displayImages">displayImages()</a></dt>
<dd><p>Display the images in a gallery and add eventListeners.</p>
</dd>
<dt><a href="#displayMenu">displayMenu(menu)</a></dt>
<dd><p>Display the menu links.</p>
</dd>
<dt><a href="#displayUpload">displayUpload(max)</a></dt>
<dd><p>Display the upload button and the title and add an onclick() event to the button.</p>
</dd>
<dt><a href="#insertElement">insertElement(tag, text, parent)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>This function creates an HTMLElement (a tag).</p>
</dd>
<dt><a href="#pushImage">pushImage(url, colors)</a></dt>
<dd><p>Push images in the image table.</p>
</dd>
<dt><a href="#randomBackground">randomBackground(i)</a></dt>
<dd><p>Changes the background using randomly each time the page is loaded.</p>
</dd>
<dt><a href="#randomInt">randomInt(max)</a> ⇒ <code>number</code></dt>
<dd><p>This function generates a random integer and returns it.</p>
</dd>
<dt><a href="#removeInside">removeInside(selector)</a></dt>
<dd><p>Remove everything that is inside an HTMLElement.</p>
</dd>
<dt><a href="#onFileChange">onFileChange(button)</a></dt>
<dd><p>On file change, send the file to the web service.</p>
</dd>
<dt><a href="#onFormSubmit">onFormSubmit(form)</a></dt>
<dd><p>On url input, send the file to the web service.</p>
</dd>
<dt><a href="#queryWebService">queryWebService(method, query, body, success)</a></dt>
<dd><p>Connect to the web service to get images colors.</p>
</dd>
</dl>

<a name="menuItems"></a>

## menuItems : <code>Object</code>

**Kind**: global constant  
<a name="getApp"></a>

## getApp() ⇒ <code>Object</code>

**Kind**: global function  
<a name="deleteImage"></a>

## deleteImage(button, image)

Delete an image from the gallery when the users cliks on the button.

**Kind**: global function  

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| button | <code>string</code> | The button to delete an image. |
| image  | <code>Array</code>  | The list of images.            |

**Example**  

```js
deleteImage(button, element);
```

<a name="displayFooter"></a>

## displayFooter()

Display a list containing the files accepted in the footer.

**Kind**: global function  
<a name="removePreview"></a>

## removePreview()

Removes the image from the preview zone when the user clicks it.

**Kind**: global function  
**Example**  

```js
removePreview();
```

<a name="displayColor"></a>

## displayColor(image)

Display the color list of the image in the preview zone.

**Kind**: global function  

| Param | Type                | Description                                      |
| ----- | ------------------- | ------------------------------------------------ |
| image | <code>Object</code> | The object containing the image that is clicked. |

<a name="previewImage"></a>

## previewImage(event)

Display an image in the preview zone when the user cliks it.

**Kind**: global function  

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| event | <code>Object</code> | The event triggered. |

**Example**  

```js
target.addEventListener('click', previewImage);
```

<a name="displayImages"></a>

## displayImages()

Display the images in a gallery and add eventListeners.

**Kind**: global function  
**Example**  

```js
displayImages();
```

<a name="displayMenu"></a>

## displayMenu(menu)

Display the menu links.

**Kind**: global function  

| Param | Type               | Description                        |
| ----- | ------------------ | ---------------------------------- |
| menu  | <code>Array</code> | The array containing menu objects. |

**Example**  

```js
displayMenu(menuItems);
```

<a name="displayUpload"></a>

## displayUpload(max)

Display the upload button and the title and add an onclick() event to the button.

**Kind**: global function  

| Param | Type                | Description                                           |
| ----- | ------------------- | ----------------------------------------------------- |
| max   | <code>number</code> | The maximum number of images accepted in the gallery. |

**Example**  

```js
displayUpload(5);
```

<a name="insertElement"></a>

## insertElement(tag, text, parent) ⇒ <code>HTMLElement</code>

This function creates an HTMLElement (a tag).

**Kind**: global function  
**Returns**: <code>HTMLElement</code> - The HTMLElement created by the script.  

| Param  | Type                                            | Description                                                               |
| ------ | ----------------------------------------------- | ------------------------------------------------------------------------- |
| tag    | <code>string</code>                             | The HTML tag to create.                                                   |
| text   | <code>string</code>                             | The text that will be displayed inside the tag.                           |
| parent | <code>string</code> \| <code>HTMLElement</code> | The parent of the created tag. The tag will be inserted into this parent. |

**Example**  

```js
insertElement("a", "Click me!", ".a-container");
```

<a name="pushImage"></a>

## pushImage(url, colors)

Push images in the image table.

**Kind**: global function  

| Param  | Type                | Description                                  |
| ------ | ------------------- | -------------------------------------------- |
| url    | <code>string</code> | The (relative or absolute) path to the file. |
| colors | <code>Array</code>  | The colors of the image.                     |

**Example**  

```js
pushImage('https://www.site.com/image.png', []);
```

<a name="randomBackground"></a>

## randomBackground(i)

Changes the background using randomly each time the page is loaded.

**Kind**: global function  

| Param | Type                | Description                                                                 |
| ----- | ------------------- | --------------------------------------------------------------------------- |
| i     | <code>number</code> | The number of images to pick from (i.e 5 means 6 backgrounds to pick from). |

**Example**  

```js
randomBackground(5);
```

<a name="randomInt"></a>

## randomInt(max) ⇒ <code>number</code>

This function generates a random integer and returns it.

**Kind**: global function  
**Returns**: <code>number</code> - An integer between 0 and max.  

| Param | Type                | Description                          |
| ----- | ------------------- | ------------------------------------ |
| max   | <code>number</code> | The maximum of the generated number. |

**Example**  

```js
const randomNumber = randomInt(5);
```

<a name="removeInside"></a>

## removeInside(selector)

Remove everything that is inside an HTMLElement.

**Kind**: global function  

| Param    | Type                | Description                                                                      |
| -------- | ------------------- | -------------------------------------------------------------------------------- |
| selector | <code>string</code> | The selector to target. Everuthing in this element will be removed form the DOM. |

**Example**  

```js
removeInside(".css-selector");
```

<a name="onFileChange"></a>

## onFileChange(button)

On file change, send the file to the web service.

**Kind**: global function  

| Param  | Type                     | Description                             |
| ------ | ------------------------ | --------------------------------------- |
| button | <code>HTMLElement</code> | The button that is clicked by the user. |

**Example**  

```js
onFileChange(button);
```

<a name="onFormSubmit"></a>

## onFormSubmit(form)

On url input, send the file to the web service.

**Kind**: global function  

| Param | Type                         | Description                 |
| ----- | ---------------------------- | --------------------------- |
| form  | <code>HTMLFormElement</code> | The form that is submitted. |

**Example**  

```js
onFormSubmit(form);
```

<a name="queryWebService"></a>

## queryWebService(method, query, body, success)

Connect to the web service to get images colors.

**Kind**: global function  

| Param   | Type                  | Description                                                    |
| ------- | --------------------- | -------------------------------------------------------------- |
| method  | <code>string</code>   | The method used to connect to the web service, GET or POST.    |
| query   | <code>string</code>   | The complete query to append at the end of the url e.g "&Yay". |
| body    | <code>FormData</code> | The value that will go in the xhr.send() statement.            |
| success | <code>\*</code>       | Something that will be executed when the request is loaded.    |

**Example**  

```js
queryWebService('GET', url, null, (response, url) => {console.log(response);});
```
