if (Meteor.isClient) {
  // Meteor.startup(function () {
  //   ReactDOM.render(<App />, document.getElementById("render-target"));
  // });

  const {Router, Route, IndexRoute, browserHistory} = ReactRouter;

  Meteor.startup(function() {
    ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Chat} />
          <Route path="/users" component={UserList} />
          <Route path="/chat/:userId" component={Chat} />
          {/* ... */}
        </Route>
      </Router>
    ), document.getElementById("render-target"));
  });
}
