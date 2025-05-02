import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  // function recieves data from child comp (ToDoForm) => appends new object (newTodo) into todoList arr, with specific props
  function handleAddTodo(title) {
    const newTodo = {
      id: Date.now(),
      title: title,
      isCompleted: false
    }
    // push newTodo object into todoList arr
    setTodoList([...todoList, newTodo]);
  }

  // retrieves data from child (ToDoList), containing id of item checked in form => sets isCompleted prop to true
  function onCompleteTodo(id) {
    const updatedTodos = todoList.map((todo) => {
      if(todo.id === id) {
        return {...todo, isCompleted: true}
      }
      return todo;
    });
    // add same item, but with isCompleted prop changed to true
    setTodoList(updatedTodos);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <ToDoForm
        onAddTodo={handleAddTodo}
      />
      <ToDoList
        todoList={todoList}
        onCompletedTodo={onCompleteTodo}
      />
    </div>
  );
}

export default App;
