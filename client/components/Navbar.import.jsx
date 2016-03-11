import AccountsUIWrapper from './AccountsUIWrapper'

Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Explicit Consent</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <AccountsUIWrapper />
          </div>
        </div>
      </nav>
    );
  }
});
export default Navbar;
