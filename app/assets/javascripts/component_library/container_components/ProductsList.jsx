class ProductsList extends React.Component {
  render() {
  	const list = this.props.productsList.map((product, index) =>
      <Product product={product} key={index}></Product>
  	);

    return (
    	<div className={this.props.className}>
        {this.props.productsList.length > 0 && list}
		  </div>
    )
  }
}

ProductsList.propTypes = {
  className: React.PropTypes.string,
  productsList: React.PropTypes.array
};

ProductsList.defaultProps = {
  className: "products-list",
  productsList: []
};
