import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  function handleAddTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <ToDoForm
        onAddTodo = {handleAddTodo}
      />
      <ToDoList
        todoList = {todoList}
      />
    </div>
  );
}

export default App;
