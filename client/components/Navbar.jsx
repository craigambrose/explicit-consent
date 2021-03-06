Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Explicit Consent</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul ref="container" className="nav navbar-nav">
              <li><a href="/users">Users</a></li>
            </ul>
            <AccountsUIWrapper />
          </div>
        </div>
      </nav>
    );
  }
});
