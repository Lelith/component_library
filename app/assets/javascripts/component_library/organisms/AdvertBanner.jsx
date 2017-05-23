class AdvertBanner extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Banner {...this.props.Banner}></Banner>
      </div>
    )
  }
}

AdvertBanner.propTypes = {
  className: React.PropTypes.string,
	Banner: React.PropTypes.object
};

AdvertBanner.defaultProps = {
  className: "advert-banner",
  Banner: {}
};
