class Footer extends React.Component {
  render() {
    const title = {
      value: "Footer"
    }

    return (
      <footer className={this.props.className}>
				<Title {...title}></Title>
			</footer>
    )
  }
}

Footer.propTypes = {
  className: React.PropTypes.string,
	Title: React.PropTypes.object
};

Footer.defaultProps = {
  className: "footer",
  Title: {}
};
