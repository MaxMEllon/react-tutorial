(function() {
  var Counter,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Counter = (function(_super) {
    __extends(Counter, _super);

    Counter.propTypes = {
      name: React.PropTypes.string.isRequired
    };

    function Counter() {
      this.state = {
        count: 0
      };
      ({
        onClickUpper: function() {
          return this.setState({
            count: this.state.count + 1
          });
        },
        onClickLower: function() {
          return this.setState({
            count: this.state.count - 1
          });
        },
        render: function() {
          return React.createElement("div", {
            "className": "container"
          }, React.createElement("button", {
            "onClick": this.onClickUpper
          }, "Up"), React.createElement("button", {
            "onClick": this.onClickLower
          }, "Down"), React.createElement("text", null, this.state.count));
        }
      });
    }

    return Counter;

  })(React.Component);

}).call(this);

(function() {
  var Todo, TodoList,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Todo = (function(_super) {
    __extends(Todo, _super);

    function Todo() {
      this._onDelete = __bind(this._onDelete, this);
      return Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.propTypes = {
      todo: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired
      }),
      onDelete: React.PropTypes.func.isRequired
    };

    Todo.prototype._onDelete = function() {
      return this.props.onDelete(this.props.todo.id);
    };

    Todo.prototype.render = function() {
      return React.createElement("div", null, React.createElement("span", null, this.props.todo.text), React.createElement("button", {
        "onClick": this._onDelete
      }, "delete"));
    };

    return Todo;

  })(React.Component);

  TodoList = (function(_super) {
    __extends(TodoList, _super);

    function TodoList() {
      this.state = {
        todos: [
          {
            id: 1,
            text: 'todo 1'
          }, {
            id: 2,
            text: 'todo 2'
          }, {
            id: 3,
            text: 'todo 3'
          }
        ]
      };
    }

    TodoList.prototype.deleteTodo = function(id) {
      return this.setState({
        todos: this.state.todos.filter(function(todo) {
          return todo.id !== id;
        })
      });
    };

    TodoList.prototype.render = function() {
      var todos;
      todos = this.state.todos.map((function(_this) {
        return function(todo) {
          return React.createElement("li", {
            "key": todo.id
          }, React.createElement(Todo, {
            "onDelete": _this.deleteTodo,
            "todo": todo
          }));
        };
      })(this));
      return React.createElement("ul", null, todos);
    };

    return TodoList;

  })(React.Component);

  React.render(React.createElement(TodoList, null), $('.container')[0]);

}).call(this);
