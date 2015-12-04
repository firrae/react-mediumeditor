MediumEditorComp = React.createClass({
  getInitialState() {
    return {

    }
  },
  componentDidMount() {
    let editor = new MediumEditor('.editable', {
      toolbar: {
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
          'removeFormat'
        ]
      },
      anchor: {
        /* These are the default options for anchor form,
         if nothing is passed this is what it used */
        customClassOption: null,
        customClassOptionText: 'Button',
        linkValidation: true,
        placeholderText: 'Paste or type a link',
        targetCheckbox: true,
        targetCheckboxText: 'Open in new window'
      }
    });
    console.log(editor);
  },
  render() {
    return(
      <div className="editable" contentEditable="true" spellCheck="true" role="textbox" aria-multiline="true"></div>
    );
  }
});
