## Constants

<dl>
<dt><a href="#menuItems">menuItems</a> : <code>Object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getApp">getApp()</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#displayFooter">displayFooter()</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#removeInside">removeInside(selector)</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#removePreview">removePreview()</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#previewImage">previewImage(event)</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#displayImages">displayImages()</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#deleteImage">deleteImage(button, image)</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#displayMenu">displayMenu(menu)</a></dt>
<dd><p>Display the menu links.</p>
</dd>
<dt><a href="#displayUpload">displayUpload(max)</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#insertElement">insertElement(tag, text, parent)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>This function creates an HTMLElement (a tag).</p>
</dd>
<dt><a href="#pushImage">pushImage(url, colors)</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#randomBackground">randomBackground(i)</a></dt>
<dd><p>Changes the background using randomly each time the page is loaded.</p>
</dd>
<dt><a href="#randomInt">randomInt(max)</a> ⇒ <code>number</code></dt>
<dd><p>This function generates a random integer and returns it.</p>
</dd>
<dt><a href="#onFileChange">onFileChange(button)</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#onFormSubmit">onFormSubmit(form)</a></dt>
<dd><p>//TODO</p>
</dd>
<dt><a href="#queryWebService">queryWebService(method, query, body, success)</a></dt>
<dd><p>//TODO</p>
</dd>
</dl>

<a name="menuItems"></a>

## menuItems : <code>Object</code>

**Kind**: global constant  
<a name="getApp"></a>

## getApp() ⇒ <code>Object</code>

**Kind**: global function  
<a name="displayFooter"></a>

## displayFooter()

//TODO

**Kind**: global function  
**Example**  

```js
//TODO
```

<a name="removeInside"></a>

## removeInside(selector)

//TODO

**Kind**: global function  

| Param    | Type                | Description             |
| -------- | ------------------- | ----------------------- |
| selector | <code>string</code> | The selector to target. |

**Example**  

```js
removeInside(".css-selector");
```

<a name="removePreview"></a>

## removePreview()

//TODO

**Kind**: global function  
**Example**  

```js
//TODO
```

<a name="previewImage"></a>

## previewImage(event)

//TODO

**Kind**: global function  

| Param | Type                   | Description          |
| ----- | ---------------------- | -------------------- |
| event | <code>undefined</code> | The event triggered. |

**Example**  

```js
//TODO
```

<a name="displayImages"></a>

## displayImages()

//TODO

**Kind**: global function  
**Example**  

```js
//TODO
```

<a name="deleteImage"></a>

## deleteImage(button, image)

//TODO

**Kind**: global function  

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| button | <code>string</code> | The button to delete an image. |
| image  | <code>Array</code>  | The list of images.            |

**Example**  

```js
//TODO
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

//TODO

**Kind**: global function  

| Param | Type                | Description                                           |
| ----- | ------------------- | ----------------------------------------------------- |
| max   | <code>number</code> | The maximum number of images accepted in the gallery. |

**Example**  

```js
//TODO
```

<a name="insertElement"></a>

## insertElement(tag, text, parent) ⇒ <code>HTMLElement</code>

This function creates an HTMLElement (a tag).

**Kind**: global function  
**Returns**: <code>HTMLElement</code> - The HTMLElement created by the script.  

| Param  | Type                                            | Description                                                                                              |
| ------ | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| tag    | <code>string</code>                             | The HTML tag to create.                                                                                  |
| text   | <code>string</code>                             | The text that will be displayed inside the tag.                                                          |
| parent | <code>string</code> \| <code>HTMLElement</code> | The parent of the created tag. The tag will be inserted into this parent. //TODO Improve this definition |

**Example**  

```js
insertElement("a", "Click me!", ".a-container");
```

<a name="pushImage"></a>

## pushImage(url, colors)

//TODO

**Kind**: global function  

| Param  | Type                | Description                                  |
| ------ | ------------------- | -------------------------------------------- |
| url    | <code>string</code> | The (relative or absolute) path to the file. |
| colors | <code>Object</code> | The colors of the image.                     |

**Example**  

```js
//TODO
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

<a name="onFileChange"></a>

## onFileChange(button)

//TODO

**Kind**: global function  

| Param  | Type                     | Description                             |
| ------ | ------------------------ | --------------------------------------- |
| button | <code>HTMLElement</code> | The button that is clicked by the user. |

**Example**  

```js
//TODO
```

<a name="onFormSubmit"></a>

## onFormSubmit(form)

//TODO

**Kind**: global function  

| Param | Type                         | Description                 |
| ----- | ---------------------------- | --------------------------- |
| form  | <code>HTMLFormElement</code> | The form that is submitted. |

**Example**  

```js
//TODO
```

<a name="queryWebService"></a>

## queryWebService(method, query, body, success)

//TODO

**Kind**: global function  

| Param   | Type                  | Description                                                    |
| ------- | --------------------- | -------------------------------------------------------------- |
| method  | <code>string</code>   | The used to connect to the web service.                        |
| query   | <code>string</code>   | The complete query to append at the end of the url e.g "&Yay". |
| body    | <code>FormData</code> | The value that will go in the xhr.send() statement.            |
| success | <code>\*</code>       | Something that will be executed when the request is loaded.    |

**Example**  

```js
//TODO
```
