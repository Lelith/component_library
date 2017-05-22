class Title extends React.Component {
  render() {
    return <div className={this.props.className}>{this.props.value}</div>;
  }
}

Title.propTypes = {
  className: React.PropTypes.string,
	value: React.PropTypes.string
};

Title.defaultProps = {
  className: "title",
  value: "Title"
};
