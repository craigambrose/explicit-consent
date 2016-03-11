import Navbar from './Navbar'

// App component - represents the whole app
App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <div id="page-content">hello world</div>
      </div>
    );
  }
});
export default App;
