CommentList = React.createClass
  render: ->
    commentNodes = @props.data.map (comment) ->
      <Comment author={comment.author}>
        {comment.text}
      </Comment>

    <div className="commentList">
      {commentNodes}
    </div>


CommentForm = React.createClass
  render: ->
    <div className="commentForm">
      Hello, React! I am a CommentForm.
    </div>

CommentBox = React.createClass
  getInitialState: ->
    data: []

  componentDidMount: ->
    jpxhr = $.ajax
      url: @props.url
      dataType: "jsonp"

    jpxhr
      .done (res) =>
        @setState
        data: res
      .fail (xhr, status, err) =>
        console.error @props.url, status, err.toString()

  render: ->
    <div className="commentBox">
      <CommentList data={@state.data} />
      <CommentForm />
    </div>

React.render <CommentBox url="../sample_data/makejson.php" />, $('.container')[0]
