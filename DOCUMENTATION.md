## Members

<dl>
<dt><a href="#maxImages">maxImages</a> : <code>Number</code></dt>
<dd><p>The maximum images allowed in the gallery</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#startTime">startTime()</a></dt>
<dd><p>Main function</p>
</dd>
<dt><a href="#checkTime">checkTime(i)</a> ⇒</dt>
<dd><p>Add missing zero in front of numbers</p>
</dd>
<dt><a href="#insertElement">insertElement(tag, text, parent)</a></dt>
<dd><p>Insert a tag with text inside an HTML element</p>
</dd>
<dt><a href="#displayMenu">displayMenu(menu)</a></dt>
<dd><p>Display the menu links</p>
</dd>
<dt><a href="#displayUpload">displayUpload(images, max)</a></dt>
<dd><p>Display the upload button and the title</p>
</dd>
<dt><a href="#pushImage">pushImage(images, name, path, extension, num)</a></dt>
<dd><p>Push images in the image table</p>
</dd>
<dt><a href="#isExtensionValid">isExtensionValid(toCheck)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates the file extension</p>
</dd>
<dt><a href="#displayImages">displayImages(images)</a></dt>
<dd><p>Display the images in a gallery and add eventListeners</p>
</dd>
<dt><a href="#previewImage">previewImage(container, image)</a></dt>
<dd><p>Display an image in the preview zone when the user cliks it</p>
</dd>
<dt><a href="#deleteImage">deleteImage(button, image)</a></dt>
<dd><p>Delete an image form the gallery when the users clisk the button</p>
</dd>
<dt><a href="#removePreview">removePreview()</a></dt>
<dd><p>Removes the image from the preview zone when the user clicks it again</p>
</dd>
<dt><a href="#randomBackground">randomBackground(i)</a></dt>
<dd><p>Randomly change the background on page load</p>
</dd>
<dt><a href="#getRandomInt">getRandomInt(max)</a> ⇒ <code>Number</code></dt>
<dd><p>Randomly generates an integer, between 0 and max</p>
</dd>
<dt><a href="#displayTypes">displayTypes()</a></dt>
<dd><p>Display a list containing the extensions of files accepted</p>
</dd>
</dl>

<a name="maxImages"></a>

## maxImages : <code>Number</code>
The maximum images allowed in the gallery

**Kind**: global variable  
<a name="startTime"></a>

## startTime()
Main function

**Kind**: global function  
<a name="checkTime"></a>

## checkTime(i) ⇒
Add missing zero in front of numbers

**Kind**: global function  
**Returns**: string  

| Param | Type |
| --- | --- |
| i | <code>number</code> | 

<a name="insertElement"></a>

## insertElement(tag, text, parent)
Insert a tag with text inside an HTML element

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>String</code> | The HTML tag to create |
| text | <code>String</code> | The text that will be displayed inside the tag. e.g. <a>Text</a> |
| parent | <code>String</code> | The parent of the created tag. The tag will be inserted into this parent |

<a name="displayMenu"></a>

## displayMenu(menu)
Display the menu links

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| menu | <code>Array</code> | The array containing menu objects |

<a name="displayUpload"></a>

## displayUpload(images, max)
Display the upload button and the title

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| images | <code>Array</code> | The image gallery |
| max | <code>Number</code> | The maximum number of images accepted in the gallery |

<a name="pushImage"></a>

## pushImage(images, name, path, extension, num)
Push images in the image table

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| images | <code>Array</code> | The gallery |
| name | <code>String</code> | The name of the image |
| path | <code>String</code> | The (relative or absolute) path to the file |
| extension | <code>String</code> | The file extension e.g ".jpg" ".gif" |
| num | <code>Number</code> | The number of images we want push |

<a name="isExtensionValid"></a>

## isExtensionValid(toCheck) ⇒ <code>Boolean</code>
Validates the file extension

**Kind**: global function  
**Returns**: <code>Boolean</code> - returns "yes" if the extension is valid (i.e is present in the validExtensions list) and "no" if the extension is invalid  

| Param | Type | Description |
| --- | --- | --- |
| toCheck | <code>String</code> | The thing to be checked |

<a name="displayImages"></a>

## displayImages(images)
Display the images in a gallery and add eventListeners

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| images | <code>Array</code> | The list of images |

<a name="previewImage"></a>

## previewImage(container, image)
Display an image in the preview zone when the user cliks it

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| container | <code>String</code> | The image that will be listened |
| image | <code>Object</code> | The object containing the details of the clicked image |

<a name="deleteImage"></a>

## deleteImage(button, image)
Delete an image form the gallery when the users clisk the button

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>String</code> | The button to delete an image |
| image | <code>Array</code> | The list of images |

<a name="removePreview"></a>

## removePreview()
Removes the image from the preview zone when the user clicks it again

**Kind**: global function  
<a name="randomBackground"></a>

## randomBackground(i)
Randomly change the background on page load

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>Number</code> | The number of images to pick from (i.e 5 means 6 backgrounds to pick from) |

<a name="getRandomInt"></a>

## getRandomInt(max) ⇒ <code>Number</code>
Randomly generates an integer, between 0 and max

**Kind**: global function  
**Returns**: <code>Number</code> - An integer between 0 and max  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>Number</code> | The maximum of the generated number |

<a name="displayTypes"></a>

## displayTypes()
Display a list containing the extensions of files accepted

**Kind**: global function  
