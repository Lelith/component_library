class Banner extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Title {...this.props.Title}></Title>
        <Description {...this.props.Description}></Description>
        <Button {...this.props.Button}></Button>
			</div>
    )
  }
}

Banner.propTypes = {
  className: React.PropTypes.string,
	Description: React.PropTypes.object,
	Title: React.PropTypes.object,
	Button: React.PropTypes.object
};

Banner.defaultProps = {
  className: "banner",
	Description: {},
	Title: {},
	Button: {}
};
