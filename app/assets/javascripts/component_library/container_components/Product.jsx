class Product extends React.Component {
  render() {
    const product = this.props.product;

    return (
  		<div className={this.props.className}>
				<Image {...product.Image}></Image>
				<div className="caption">
					<Title {...product.Title}></Title>
					<Description {...product.Description}></Description>
					<div>
						<Button {...product.Button}></Button>
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
