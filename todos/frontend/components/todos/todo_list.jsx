import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = (props) => {
  
  return (
   <ul>
     {props.todos.map(todo => {
       return <TodoListItem todo={todo} />
     })}
   </ul>
  )
}

export default TodoList