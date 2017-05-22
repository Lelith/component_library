class Footer extends React.Component {
  render() {
    return (
      <footer className={this.props.className}>
				<Title title={this.props.Title}></Title>
			</footer>
    )
  }
}

Footer.propTypes = {
  className: React.PropTypes.string,
	Title: React.PropTypes.object
};

Footer.defaultProps = {
  className: "header",
  Title: {}
};
