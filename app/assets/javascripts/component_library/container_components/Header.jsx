class Header extends React.Component {
  render() {
    return (
      <header className={this.props.className}>
				<Title title={this.props.Title}></Title>
			</header>
    )
  }
}

Header.propTypes = {
  className: React.PropTypes.string,
	Title: React.PropTypes.object
};

Header.defaultProps = {
  className: "header",
  Title: {}
};
