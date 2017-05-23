class Line extends React.Component {
  render() {
    return (
      <div className={this.props.className}></div>
    )
  }
}

Line.propTypes = {
  className: React.PropTypes.string
};

Line.defaultProps = {
  className: "line"
};
