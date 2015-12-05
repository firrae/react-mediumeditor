MediumEditorComp = React.createClass({
  getInitialState() {
    return {

    }
  },
  componentDidMount() {
    let editor = new MediumEditor('.editable', {
      toolbar: this.props.toolbar,
      anchor: this.props.anchor
    });
    console.log(editor);
  },
  render() {
    return(
      <div className="editable" contentEditable="true" spellCheck="true" role="textbox" aria-multiline="true"></div>
    );
  }
});
