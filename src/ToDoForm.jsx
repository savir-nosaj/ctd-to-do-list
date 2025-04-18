import { useState, useRef } from 'react';

function ToDoForm ({onAddTodo}) {
    const [workingTodoTitle, setWorkingTodoTitle] = useState("");
    const todoTitleInput = useRef("");
    
    // local handleAddTodo function performs the following:
    function handleAddTodo(title){
        // prevent page re-render
        title.preventDefault();
        // comm. current state (workingTodo) data back to parent
        onAddTodo(workingTodoTitle);
        // clear state
        setWorkingTodoTitle("");
        // focus on input after submit
        todoTitleInput.current.focus();
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input
                id="todoTitle"
                name="title"
                // onChange will trigger change in state => re-render; updating value with state-value
                value={workingTodoTitle}
                ref={todoTitleInput} 
                type="text"
                // when input is detected => run setWorkingTodo function, adding value to end of state (workingTodo) string
                onChange={(event) => setWorkingTodoTitle(event.target.value)}
            />
            <button type="submit" disabled={!workingTodoTitle}>Add Todo</button>
        </form>
    );
}

export default ToDoForm;
