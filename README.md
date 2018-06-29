# [React Page Maker](https://www.npmjs.com/package/react-accordion-feature)

This is a  Accordion Component developed in React JS.

# Below are the `features` of this component: #
* one panel to be expanded at a time
* multiple panels to be expanded at a time
* allows `n` level of nesting of accordions
* pre expanded panel/panels on page load
* accessible with keyboard
* minimal css which holds the structure of the component
* allows custom HTML


# Install #
```shell
npm install --save react-accordion-feature
```

># How to include this component
```
import Accordion from 'react-accordion-feature
```
># How to use this component
```
<Accordion customClass="accordionWrapper">
      <Accordion.Pane title="This is first accordion">
        <div>
          <h4>This is the first content title</h4>
          <p>
            {`Content goes here.`}
          </p>
        </div>
      </Accordion.Pane>
      <Accordion.Pane title="This is the second accordion">
        <div>
          <h4>This is the second content title</h4>
          {`Content goes here.`}
        </div>
      </Accordion.Pane>
      <Accordion.Pane title="This is the third accordion">
        <div>
          <h4>This is the third content title</h4>
          <p>
            {`Content goes here.`}
          </p>
        </div>
      </Accordion.Pane>
    </Accordion>
```

># Props that can be passed to the component
* customClass="accordionWrapper otherclasses" accordionWrapper needs to be passed to hold the minimal structure of the component

* multiplePanel - allows multiple panels to be expanded at a time

* activePane={[0, 1]} - pass the pane/panes index that needs to be expanded by default on page load

* hasCustomIcon (Boolean) - by default `+` and `-` icons are displayed, if you want our own icons, pass this flag and then you can add you icons using css class
