Chat = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let query = {};

    return {
      messages: Messages.find(query, {sort: {createdAt: -1}}).fetch()
    };
  },

  onMessageSubmit(event) {
    event.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.newMessageText);

    // Find the text field via the React ref
    var text = input.value.trim();

    Meteor.call("addMessage", text);

    // Clear form
    input.value = "";
  },

  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message
        key={message._id}
        message={message} />;
    });
  },

  render() {
    return (
      <div className="chat-page">
        <div className="message-list">
          {this.renderMessages()}
        </div>
        <div className="message-poster">
          <form className="new-message" onSubmit={this.onMessageSubmit} >
            <input type="text" id="new-message-text" ref="newMessageText" placeholder="Type a message..." />
          </form>
        </div>
      </div>
    );
  }
});
