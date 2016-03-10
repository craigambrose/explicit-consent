if (Meteor.isClient) {
  System.import('/client/components/App').then(function(module){
      // default export is attached as default property
      // all named exports are attached by their name
      var App = module.default;

      Meteor.startup(function () {
        ReactDOM.render(<App />, document.getElementById("render-target"));
      });
  });
}
