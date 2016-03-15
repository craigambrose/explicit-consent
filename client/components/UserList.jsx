UserList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let query = {};

    return {
      users: Meteor.users.find(query).fetch()
    };
  },

  renderUsers() {
    return this.data.users.map((user) => {
      let route = ("/chat/" + user._id);

      return <div key={user._id}>
        <a href={route}>
          {user.emails[0].address}
        </a>
      </div>;
    });
  },

  render() {
    return (
      <div className="container">
        <h1>People</h1>
        <div>
          {this.renderUsers()}
        </div>
      </div>
    );
  }
});
