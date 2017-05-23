class Product extends React.Component {
  render() {
    return (
  		<div className={this.props.className}>
				<Image {...this.props.Image}></Image>
				<div className="caption">
					<Title {...this.props.Title}></Title>
					<Description {...this.props.Description}></Description>
					<div>
						<Button {...this.props.Button}></Button>
					</div>
				</div>
  		</div>
    )
  }
}

Product.propTypes = {
	className: React.PropTypes.string,
	Description: React.PropTypes.object,
	Title: React.PropTypes.object,
	Image: React.PropTypes.object,
	Button: React.PropTypes.object
};

Product.defaultProps = {
  className: "product",
	Description: {},
	Title: {},
	Image: {},
	Button: {}
};
