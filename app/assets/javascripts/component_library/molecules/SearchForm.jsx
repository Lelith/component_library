class SearchForm extends React.Component {
  render() {
    return (
      <form className={this.props.className}>
        <input type="text" placeholder="Search" />
        <Button {...this.props.Button}></Button>
      </form>
    )
  }
}

SearchForm.propTypes = {
  className: React.PropTypes.string,
	Button: React.PropTypes.object
};

SearchForm.defaultProps = {
  className: "search-form",
  Button: {}
};
