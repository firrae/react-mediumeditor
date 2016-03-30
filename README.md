[![Codacy Badge](https://api.codacy.com/project/badge/grade/6b012115bfb34a8cb3a19e1dbfa8b49b)](https://www.codacy.com/app/firrae/react-mediumeditor)
# react-mediumeditor
MediumEditor wrapped up in a ReactJS component.

## Adding it to your project
```
meteor add firrae:react-mediumeditor
```

## Overview
This will create a MediumEditor based on the [mediumeditor:mediumeditor](https://github.com/yabwe/medium-editor) package wherever you use <MediumEditorComp />. The component recieves a set of different options including: 

* [Toolbar](https://github.com/yabwe/medium-editor#toolbar-options) - toolbar
* [Anchor](https://github.com/yabwe/medium-editor#anchor-form-options) - anchor
* [Anchor Preview](https://github.com/yabwe/medium-editor#anchor-preview-options) - anchorPreview
* [Placeholder](https://github.com/yabwe/medium-editor#placeholder-options) - placeholder
* [Paste](https://github.com/yabwe/medium-editor#paste-options) - paste
* [Keyboard Commands](https://github.com/yabwe/medium-editor#keyboardcommands-options) - keyboardCommands
* Default Value - defaultValue
* Style - style - Pass through the style you wish to apply to the div the editor resides in
* Disable Editor - edit - True or False, this will turn the editor on or off
* Other - other - this will take in an object and set them as values on the div of the editor

## Accessing the text in the editor
The simpliest method to retrieve the text from the editor simply use the following: ``` $('.editable').html() ```. If you need multiple editors then you can pass along other parameters to the div like so: ``` <MediumEditorComp other="{{data-key: 1}}" /> ``` and access it in a similar jQuery fashion.

If you need a mode dynamic way you can pass though a function prop that will fire onChange:

```
changeEvent(event, returnedText) {
    console.log(returnedText);
},
render() {
    return(
        <MediumEditorComp onChange={this.changeEvent} />
    );
}
```

## Toolbar
The component will take in all the same options that the standard editor will under the toolbar object, simply pass an object containing the settings you want and it'll be passed to the editor. For example:

```javascript
Component = React.createClass({
  mixins: [ ReactMeteorData ],
  getInitialState() {
    const toolbar = {
      buttons: [ 
      { 
        name: 'h1', 
        action: 'append-h2', 
        aria: 'header type 1',
        tagNames: ['h2'], 
        contentDefault: '<b>H1</b>', 
        classList: ['custom-class-h1'], 
        attrs: {
          'data-custom-attr': 'attr-value-h1' 
        } 
      },
      { 
        name: 'h2',
        action: 'append-h3',
        aria: 'header type 2',
        tagNames: ['h3'],
        contentDefault: '<b>H2</b>',
        classList: ['custom-class-h2'],
        attrs: {
          'data-custom-attr': 'attr-value-h2'
        }
      },
      'bold', 
      'italic', 
      'strikethrough', 
      'subscript',
      'superscript',
      'justifyLeft',
      'justifyCenter',
      'justifyRight', 
      'orderedlist', 
      'unorderedlist', 
      'anchor', 
      'removeFormat'   ]
     };
    
    return {
      toolbar
    }
  },
  render() {
    <div>
      <MediumEditorComp toolbar={this.state.toolbar} />
    </div>
  }
```

## Anchor

```javascript
Component = React.createClass({
  mixins: [ ReactMeteorData ],
  getInitialState() {
    const anchor = {
          customClassOption: null,
          customClassOptionText: 'Button',
          linkValidation: true,
          placeholderText: 'Paste or type a link',
          targetCheckbox: true,
          targetCheckboxText: 'Open in new window'
        };
        
        return {
          anchor
        }
  },
  render() {
    <div>
      <MediumEditorComp anchor={this.state.anchor} />
    </div>
  }
```

## Other

You can pass along extra parameters to the div that holds the editor through the "other" prop like so: ``` <MediumEditorComp other="{{data-key: 1}}" /> ```. They will appear in the DOM as ``` <div ... data-key="1" ```

## Extra Options

Each of the named options at the top act the same way and offer the options [here](https://github.com/yabwe/medium-editor/blob/master/OPTIONS.md). If you notice something not working feel free to submit an issue or pull request and I'll get to it when I can.

## Contributors

* Firrae
* patrickml
