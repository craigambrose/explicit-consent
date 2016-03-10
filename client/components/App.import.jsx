
// App component - represents the whole app
App = React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Explicit Consent</a>
            </div>
            <ul className="nav navbar-nav pull-right">
              <li><a href="/about">About</a></li>
              <li><a href="/login">Log in</a></li>
            </ul>
          </div>
        </nav>

        <div className="container">hello world</div>
      </div>
    );
  }
});
export default App;
