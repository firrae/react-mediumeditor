# react-mediumeditor
MediumEditor wrapped up in a ReactJS component.

This will create a MediumEditor based on the [mediumeditor:mediumeditor](https://github.com/yabwe/medium-editor) package wherever you use <MediumEditorComp />. The component recieves a set of different options including: 
* Toolbar
* Anchor
* Placeholder
* Anchor Form
* Paste
* KeyboardCommands

##Toolbar
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

##Anchor
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
