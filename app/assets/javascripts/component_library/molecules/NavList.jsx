class NavList extends React.Component {
  render() {
    const list = this.props.navList.map((nav, index) =>
      <Nav {...nav} key={index}></Nav>
  	);

    return (
      <div className={this.props.className}>
        {list}
      </div>
    )
  }
}

NavList.propTypes = {
  className: React.PropTypes.string,
  navList: React.PropTypes.array
};

NavList.defaultProps = {
  className: "nav-list",
  navList: []
};
