import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    return (
      <div className='Todo-list'>
        {props.tasks.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleTask={props.toggleTask} />
        ))}
      </div>
    );
  };
  
  export default TodoList;