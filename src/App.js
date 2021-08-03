import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  addTask = (title) => {
    const newTodo = {
      task: title,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTodo],
    });
  };

  toggleTask = (id) => {
    const newList = this.state.tasks.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    this.setState({
      tasks: newList,
    });
  };

  clearTask = () => {
    const newTasks = this.state.tasks.filter((todo) => {
      return todo.completed === false;
    });
    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        <TodoForm addTask={this.addTask} clearTask={this.clearTask} />
      </div>
    );
  }
}

export default App;
