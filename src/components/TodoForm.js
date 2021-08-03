import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.input);
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChange} type='text' name='todo' />
        <button onClick={this.handleSubmit}>Add Task</button>
        <br />
        <button onClick={this.props.clearCompleted}>Clear Completed Tasks</button>
      </form>
    );
  }
}
export default TodoForm;