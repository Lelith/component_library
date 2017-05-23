class BannerOrganism extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Banner {...this.props.Banner}></Banner>
      </div>
    )
  }
}

BannerOrganism.propTypes = {
  className: React.PropTypes.string,
	Banner: React.PropTypes.object
};

BannerOrganism.defaultProps = {
  className: "banner-organism",
  Banner: {}
};
