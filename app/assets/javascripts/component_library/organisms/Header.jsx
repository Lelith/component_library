class Header extends React.Component {
  render() {
    const navList = [{
			href: "/list",
			value: "Products"
		}]

    const searchForm = {
      Button: {
        value: "Submit",
      }
    }

    return (
      <header className={this.props.className}>
				<Logo></Logo>
				<NavList navList={navList}></NavList>
				<SearchForm {...searchForm}></SearchForm>
			</header>
    )
  }
}

Header.propTypes = {
  className: React.PropTypes.string,
	Title: React.PropTypes.object
};

Header.defaultProps = {
  className: "header",
  Title: {}
};
