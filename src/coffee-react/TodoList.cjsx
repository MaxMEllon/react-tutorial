class Todo extends React.Component

  @propTypes:
    todo: React.PropTypes.shape
      id: React.PropTypes.number.isRequired
      text: React.PropTypes.string.isRequired
    onDelete: React.PropTypes.func.isRequired

  _onDelete: =>
    @props.onDelete @props.todo.id

  render: ->
    <div>
      <span>{@props.todo.text}</span>
      <button onClick={@_onDelete}>delete</button>
    </div>

class TodoList extends React.Component
  constructor: ->
    @state = { todos: [
      {id: 1, text: 'todo 1'},
      {id: 2, text: 'todo 2'},
      {id: 3, text: 'todo 3'}
    ] }

  deleteTodo: (id) ->
    @setState
      todos: @state.todos.filter (todo)->
        todo.id isnt id

  render: ->
    todos = @state.todos.map (todo) =>
      <li key={todo.id}><Todo onDelete={@deleteTodo} todo={todo} /></li>
    <ul>{todos}</ul>

React.render <TodoList />, $('.container')[0]
