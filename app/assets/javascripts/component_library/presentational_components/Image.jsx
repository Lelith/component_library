class Image extends React.Component {
  render() {
    return (
		  <img className={this.props.className} src={this.props.src} alt={this.props.alt}/>
    )
  }
}

Image.propTypes = {
  className: React.PropTypes.string,
  src: React.PropTypes.string,
  alt: React.PropTypes.string
};

Image.defaultProps = {
  className: "image",
  src: "https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97200&w=300&h=200",
  alt: "image"
};
