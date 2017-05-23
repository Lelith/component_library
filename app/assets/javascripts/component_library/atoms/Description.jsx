class Description extends React.Component {
  render() {
    return (
      <p className={this.props.className}>{this.props.value}</p>
    )
  }
}

Description.propTypes = {
  className: React.PropTypes.string,
	value: React.PropTypes.string
};

Description.defaultProps = {
  className: "description",
  value: "Lorem Ipsum ..."
};
