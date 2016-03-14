Message = React.createClass({
  render() {
    return (
      <div className="message">
        <div className="avatar-container">
          <img src="http://placekitten.com.s3.amazonaws.com/homepage-samples/96/139.jpg" className="avatar" />
        </div>
        <div>
          <p>{this.props.message.text}</p>
        </div>
      </div>
    );
  }
});
