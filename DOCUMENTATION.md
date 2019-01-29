# color *0.0.1*

> A simple color app


### src/index.js


#### maxImages() 








##### Returns


- `Void`



#### insertElement(tag, text, parent) 

Insert a tag with text inside an HTML element




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| tag | `String`  | The HTML tag to create | &nbsp; |
| text | `String`  | The text that will be displayed inside the tag. e.g. <a>Text</a> | &nbsp; |
| parent | `String`  | The parent of the created tag. The tag will be inserted into this parent | &nbsp; |




##### Returns


- `Void`



#### displayMenu(menu) 

Display the menu links




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| menu | `Array`  | The array containing menu objects | &nbsp; |




##### Returns


- `Void`



#### displayUpload(images, max) 

Display the upload button and the title




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| images | `Array`  | The image gallery | &nbsp; |
| max | `Number`  | The maximum number of images accepted in the gallery | &nbsp; |




##### Returns


- `Void`



#### pushImage(images, name, path, extension, num) 

Push images in the image table




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| images | `Array`  | The gallery | &nbsp; |
| name | `String`  | The name of the image | &nbsp; |
| path | `String`  | The (relative or absolute) path to the file | &nbsp; |
| extension | `String`  | The file extension e.g ".jpg" ".gif" | &nbsp; |
| num | `Number`  | The number of images we want push | &nbsp; |




##### Returns


- `Void`



#### isExtensionValid(toCheck) 

Validates the file extension




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| toCheck | `String`  | The thing to be checked | &nbsp; |




##### Returns


- `Boolean`  returns "yes" if the extension is valid (i.e is present in the validExtensions list) and "no" if the extension is invalid



#### displayImages(images) 

Display the images in a gallery and add eventListeners




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| images | `Array`  | The list of images | &nbsp; |




##### Returns


- `Void`



#### previewImage(container, image) 

Display an image in the preview zone when the user cliks it




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| container | `String`  | The image that will be listened | &nbsp; |
| image | `Object`  | The object containing the details of the clicked image | &nbsp; |




##### Returns


- `Void`



#### deleteImage(button, image) 

Delete an image form the gallery when the users clisk the button




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| button | `String`  | The button to delete an image | &nbsp; |
| image | `Array`  | The list of images | &nbsp; |




##### Returns


- `Void`



#### removePreview() 

Removes the image from the preview zone when the user clicks it again






##### Returns


- `Void`



#### randomBackground(i) 

Randomly change the background on page load




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| i | `Number`  | The number of images to pick from (i.e 5 means 6 backgrounds to pick from) | &nbsp; |




##### Returns


- `Void`



#### getRandomInt(max) 

Randomly generates an integer, between 0 and max




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| max | `Number`  | The maximum of the generated number | &nbsp; |




##### Returns


- `Number`  An integer between 0 and max



#### displayTypes() 

Display a list containing the extensions of files accepted






##### Returns


- `Void`




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
