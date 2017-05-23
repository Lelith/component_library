class PromoboxOrganism extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Promobox {...this.props.Promobox}></Promobox>
      </div>
    )
  }
}

PromoboxOrganism.propTypes = {
  className: React.PropTypes.string,
  Promobox: React.PropTypes.object
};

PromoboxOrganism.defaultProps = {
  className: "promobox-organism",
  Promobox: {}
};
