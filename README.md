# input-math

WYSIWYG for math equations ([Demo](./demo.html))


## Example of use
```
<input-math></input-math>
<input-math value="ax^2+bx+\frac{c}{5}=0"></input-math>
<input-math show-symbols="none"></input-math>
<input-math show-symbols="basic,greek"></input-math>
```


## Dependencies

The component depend on bower components to work, but the development process
require some node modules. Running the `npm install` will install all the dependencies,
both npm and bower.  


## Development
To start off with a development, just run `gulp`. This will open a new tab in
the default browser and will reload the page every time something changes.

If you open the component in several tabs, they will all reload upon change detection.
Also if you do NOT use shadow dom, you can synchronize click events on all the tabs. Just
open the component in few browsers and interact with it (click something) in just one tab.

### Demo
You can check how the component looks when minified. To do so, run a `gulp build` to generate
production code and then `gulp serve:demo` to open the browser and show the component.


## Documentation
Documentation is available as `demo.html` file. Just open it in the browser or run `gulp serve:docs`
to automatically open it.


## Testing Your Element

@TODO