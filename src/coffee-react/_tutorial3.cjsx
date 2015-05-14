CommentBox = React.createClass
  render: ->
    <div className="commentBox">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
    </div>

React.render <CommentBox />, $content
