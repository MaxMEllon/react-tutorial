(function() {
  var Comment;

  Comment = React.createClass({
    render: function() {
      var rawMarkup;
      rawMarkup = marked(this.props.children.toString(), {
        sanitize: true
      });
      return React.createElement("div", {
        "className": 'comment'
      }, React.createElement("h2", {
        "className": 'commentAuther'
      }, this.props.auther), "\x3Cspan dangerouslySetInnerHTML=", {
        __html: rawMarkup
      });
    }
  });

  window.onload = function() {
    return React.render(React.createElement(Comment, null), document.getElementById('content'));
  };

}).call(this);
