class Counter extends React.Component
  @propTypes:
    name: React.PropTypes.string.isRequired

  constructor: ->
    @state = { count: 0 }

    onClickUpper: ->
      @setState
        count: @state.count + 1

    onClickLower: ->
      @setState
        count: @state.count - 1

    render: ->
      <div className="container">
        <button onClick={this.onClickUpper}>Up</button>
        <button onClick={this.onClickLower}>Down</button>
        <text>{this.state.count}</text>
      </div>

