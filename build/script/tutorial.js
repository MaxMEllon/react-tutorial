(function() {
  var CommentList;

  CommentList = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "commentList"
      }, React.createElement(Comment, {
        "author": "Pete Hunt"
      }, "This is one comment"), React.createElement(Comment, {
        "author": "Jordan Walke"
      }, "This is *another* comment"));
    }
  });

  React.render(React.createElement(CommentList, null), $content);

}).call(this);
