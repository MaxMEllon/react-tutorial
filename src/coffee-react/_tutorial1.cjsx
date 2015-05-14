CommentBox = React.createClass
  render: ->
    <div className="commentBox">
      Hello, world! I am a CommentBox.
    </div>

window.onload = ->
  React.render(
    <CommentBox />,
    document.getElementById('content')
  );
