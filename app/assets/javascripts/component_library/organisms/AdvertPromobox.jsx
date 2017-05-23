class AdvertPromobox extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Promobox {...this.props.Promobox}></Promobox>
      </div>
    )
  }
}

AdvertPromobox.propTypes = {
  className: React.PropTypes.string,
  Promobox: React.PropTypes.object
};

AdvertPromobox.defaultProps = {
  className: "advert-promobox",
  Promobox: {}
};
