MediumEditorComp = React.createClass({
  getInitialState() {
    return {

    }
  },
  componentDidMount() {
    let editor = new MediumEditor('.editable', {
      toolbar: this.props.toolbar,
      anchor: this.props.anchor,
      anchorPreview: this.props.anchorPreview,
      placeholder: this.props.placeholder,
      anchorForm: this.props.anchorForm,
      paste: this.props.paste,
      keyboardCommands: this.props.keyboardCommands
    });
  },
  render() {
    return(
      <div className="editable" contentEditable="true" spellCheck="true" role="textbox" aria-multiline="true"></div>
    );
  }
});
