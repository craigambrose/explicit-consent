// App component - represents the whole app
App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <div id="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
});
