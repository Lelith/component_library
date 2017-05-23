class Logo extends React.Component {
  render() {
    return (
      <img className={this.props.className} src={this.props.src} alt={this.props.alt} onClick={this.props.onClick}/>
    )
  }
}

Logo.propTypes = {
  className: React.PropTypes.string,
  alt: React.PropTypes.string,
  src: React.PropTypes.string,
  onClick: React.PropTypes.func
};

Logo.defaultProps = {
  className: "logo",
  alt: "Logo",
  src: "http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png",
  onClick: function(){location.replace("/")}
};
