class Nav extends React.Component {
  render() {
    return (
      <a className={this.props.className} href={this.props.href}>{this.props.value}</a>
    )
  }
}

Nav.propTypes = {
  className: React.PropTypes.string,
  href: React.PropTypes.string,
  value: React.PropTypes.string,
};

Nav.defaultProps = {
  className: "nav",
  href: "#",
  value: "Link",
};
