(function() {
  var CommentBox;

  CommentBox = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "commentBox"
      }, "Hello, world! I am a CommentBox.");
    }
  });

  window.onload = function() {
    return React.render(React.createElement(CommentBox, null), document.getElementById('content'));
  };

}).call(this);

(function() {
  var CommentBox;

  CommentBox = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "commentList"
      }, "Hello, world! I am a CommentList.");
    }
  });

  CommentBox = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "commentForm"
      }, "Hello, world! I am a CommentForm.");
    }
  });

}).call(this);
