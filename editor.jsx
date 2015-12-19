MediumEditorComp = React.createClass({
  //Get the default Properties
  //We are setting edit by default to true
  getDefaultProps () {
    return {
      edit : true
    };
  },

  //Init the medium editor and create a reference
  //Within our component instance
  initMedium () {
    let instance = this;

    instance.medium = new MediumEditor(instance.refs.editor, {
      toolbar: this.props.toolbar,
      anchor: this.props.anchor,
      anchorPreview: this.props.anchorPreview,
      placeholder: this.props.placeholder,
      anchorForm: this.props.anchorForm,
      paste: this.props.paste,
      keyboardCommands: this.props.keyboardCommands
    });

    //Subscribe to changes and if there is a callback call it
    instance.medium.subscribe('editableInput', function (event, editor) {
      if(typeof instance.props.onChange === 'function') {
        instance.props.onChange(event, instance.refs.editor.innerHTML);
      }
    });
  },

  //Allow us to toggle the medium editor
  toggleMediumEditor () {
    if(this.props.edit) {
      this.initMedium();
    } else if(this.medium) {
      this.medium.destroy();
    }
  },

  //On mount toggle the editor based on the edit prop
  componentDidMount() {
    this.toggleMediumEditor();
  },

  //When the component is unmounted destroy the
  //Non-isomorphic component
  componentWillUnmount () {
    if(this.medium)
      this.medium.destroy();
  },

  //Check if we should update
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.edit !== this.props.edit;
  },

  //Toggle the editor when something updates
  componentDidUpdate (prevProps, prevState) {
      this.toggleMediumEditor();
  },

  //Render our component
  render() {
    let instance = this;
    return(
      <div
        ref="editor"
        className="editable"
        spellCheck="true"
        role="textbox"
        aria-multiline="true"
        dangerouslySetInnerHTML={ { __html : instance.props.defaultValue } }
        style={ this.props.style }
        {...this.props.other}
        />
    );
  }
});
