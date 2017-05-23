class Button extends React.Component {
  render() {
    return (
	    <button className={this.props.className} type={this.props.type} onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}

Button.propTypes = {
  className: React.PropTypes.string,
  value: React.PropTypes.string,
  type: React.PropTypes.string,
  onClick: React.PropTypes.func
};

Button.defaultProps = {
  className: "button",
  value: "Button",
  type: "button",
  onClick: function(e){return e;}
};
