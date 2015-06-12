Comment = React.createClass
  render: ->
    rawMarkup = marked(@.props.children.toString(), { sanitize: true })
    <div className='comment'>
      <h2 className='commentAuther'>
        { @.props.auther }
      </h2>
      <span dangerouslySetInnerHTML={{__html: rawMarkup}}
    </div>
window.onload = ->
  React.render(<Comment />, document.getElementById('content'))
