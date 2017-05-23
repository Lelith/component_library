class Promobox extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Title {...this.props.Title}></Title>
        <Line></Line>
        <Description {...this.props.Description}></Description>
      </div>
    )
  }
}

Promobox.propTypes = {
  className: React.PropTypes.string,
	Title: React.PropTypes.object,
	Description: React.PropTypes.object
};

Promobox.defaultProps = {
  className: "promobox",
  Title: {},
  Description: {}
};
